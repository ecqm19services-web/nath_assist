(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const N_="modulepreload",I_=function(t,e){return new URL(t,e).href},Ff={},F_=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let u=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=u(n.map(c=>{if(c=I_(c,i),c in Ff)return;Ff[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(i)for(let v=a.length-1;v>=0;v--){const _=a[v];if(_.href===c&&(!d||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":N_,d||(m.as="script"),m.crossOrigin="",m.href=c,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((v,_)=>{m.addEventListener("load",v),m.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},Bm=["joie","tristesse","tension","calme","neutre"];function U_(){return["Termine chaque réponse par une ligne pour la machine, seule, sans rien changer au reste :","@@|prenom=…|langue=…|humeur=…","prenom : le prénom que la personne vient de te donner, ou non si elle ne l’a pas dit.","langue : les deux lettres de la langue où elle t’écrit (fr, en, wo, ha, sw…), ou non.",`humeur : un seul mot parmi ${Bm.join(", ")}.`,"Cette ligne est invisible pour la personne : ne la commente jamais, n’en mets qu’une."].join(" ")}const O_=new Set(["fr","en","es","pt","de","it","nl","pl","ru","tr","ar","he","fa","ur","hi","bn","ta","te","ml","kn","zh","ja","ko","vi","th","id","ms","tl","sw","am","so","ha","yo","ig","wo","dy","ff","bf","mn","zu","xh","af","rw","lg","sn","ny","tn","st","ts","ve","ss","nb","sv","da","fi","et","lv","lt","uk","be","cs","sk","sl","hr","sr","bs","bg","mk","sq","hy","ka","az","kk","ky","uz","tk","tg","ne","si","my","km","lo","qu","gn","ay","ht","mg","pcm","tw","ee","ln","kg","rn","lb","oc","ca","gl","eu","is","ga","cy","mt","eo"]),B_=new Set(["","non","oui","null","none","aucun","inconnu","vide","?","-","x"]);function dr(t,e){const n=t.match(new RegExp(`${e}\\s*[=:]\\s*([^|\\r\\n]*)`,"i"));if(!n)return null;const i=n[1].trim().replace(/[.,;:)\]"']+$/,"").replace(/^["'\(]+/,"");return i&&!B_.has(i.toLowerCase())?i:null}function k_(t){if(!t)return null;const e=t.trim().replace(/\s+/g," ");return e.length<2||e.length>24||e.split(" ").length>2||!/^[\p{L}][\p{L}\p{M}'’\- ]*$/u.test(e)?null:e.charAt(0).toUpperCase()+e.slice(1)}function q_(t){if(!t)return null;const e=t.toLowerCase();return/^[a-z]{2,3}$/.test(e)&&O_.has(e)?e:null}function z_(t){if(!t)return null;const e=t.toLowerCase().trim();return Bm.includes(e)?e:null}const Uf={en:new Set(["the","and","you","your","yours","this","that","these","those","there","here","what","when","where","why","how","who","which","tell","say","said","please","hello","hi","thanks","thank","cloud","are","was","were","have","has","had","can","could","would","should","will","may","might","must","need","want","like","know","think","with","without","about","between","because","since","until","while","them","they","their","him","his","her","ours","mine","very","really","just","only","thing","things","one","two","three","make","makes","made","get","got","give","gave","does","doing","not","good","bad","big","small","day","night","time","world","people","water","name","is","am","me","it","we","she"]),fr:new Set(["le","les","un","une","des","du","au","aux","et","est","sont","ai","avait","etais","avais","je","tu","il","elle","nous","vous","ils","mon","ma","mes","ton","ta","tes","notre","votre","moi","toi","soi","quoi","pourquoi","comment","quand","puisque","malgre","parce","donc","puis","bonjour","salut","rebonjour","merci","dis","dire","parle","peux","voudrais","aimerais","tres","trop","bien","mal","tout","tous","toutes","rien","quelque","chose","personne","monde","jour","nuit","temps","aussi","toujours","jamais","maintenant","hier","demain","avec","pour","dans","sur","chez","sans","entre","avant","apres","mais","ou","ni","que","qui","dont","ce","cet","cette","appelle","nuage","nuages","clarte","douceur","sais","ete","vais","vas","venez","viens"]),wo:new Set(["nga","na","nu","lan","li","lu","bi","bu","ci","su","ak","da","def","xam","xool","wole","rekk","mooy","melni","gina","baomay","salaam","jerejeff","mere","asman","bop","xol","nit","nekk","yeneen","kadi","dina","damay","naka","dego","japp","yagu","wut","jot","ne","te","tegg","jem","dugal","fof","goot","garab","gor","dije","kanam","ginnaaw","bari","tuuti","baax","yall"])},as={en:["anglais","English"],fr:["français","French"],wo:["wolof","Wolof"]};function ad(t){const e=t.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"").replace(/['`\u2019\u2018]/g," ").split(/[^a-z]+/).filter(s=>s.length>=2);if(!e.length)return null;const n={en:0,fr:0,wo:0};for(const s of Object.keys(Uf)){const a=Uf[s];for(const o of e)a.has(o)&&n[s]++}const[i,r]=Object.keys(n).sort((s,a)=>n[a]-n[s]);return n[i]<2||n[r]*2>=n[i]?null:i}function Of(t){if(!t.length)return t;const e=t.length-1;if(t[e].role!=="user")return t;const n=ad(t[e].content),i=n?`(Réponds en ${as[n][0]}, la langue de ce message. Answer in ${as[n][1]}. Puis termine par la ligne @@.)`:"(Réponds dans la langue de ce message, puis termine par la ligne @@.)";return t.map((r,s)=>s===e?{...r,content:`${r.content}

${i}`}:r)}function V_(t){const e=Object.keys(as).filter(n=>n!==t).map(n=>as[n][0]);return`Réponds uniquement en ${as[t][0]} — jamais en ${e.join(", ")}. Answer only in ${as[t][1]}.`}function G_(t){return t==="joie"?"lumineuse":t==="tristesse"?"douce":t==="tension"?"stabilisee":"posee"}function Bf(t){const e=[...t.matchAll(/@@[^\r\n]*/g)],n=e.length?e[e.length-1][0]:"";return{texte:t.replace(/@@[^\r\n]*/g,"").replace(/[ \t]{2,}/g," ").replace(/\s+,/g,",").replace(/[ \t]+$/gm,"").trim(),prenom:k_(dr(n,"prenom")??dr(n,"nom")??dr(n,"name")),langue:q_(dr(n,"langue")??dr(n,"lang")),humeur:z_(dr(n,"humeur")??dr(n,"mood"))}}const H_=["Qwen2.5-0.5B-Instruct-q4f16_1-MLC","Qwen2.5-1.5B-Instruct-q4f16_1-MLC"],j_=["Qwen2.5-0.5B-Instruct-q4f32_1-MLC","Qwen2.5-1.5B-Instruct-q4f32_1-MLC"];function km(){return typeof navigator<"u"&&"gpu"in navigator}const qm="nath.cerveau.local";function kf(t){return t.getItem(qm)==="oui"}function $_(t){t.setItem(qm,"oui")}async function zm(){if(!km())return"sans-gpu";try{const e=await navigator.gpu?.requestAdapter({powerPreference:"high-performance"});return e?e.features.has("shader-f16")?"ok":"sans-f16":"sans-gpu"}catch{return"sans-gpu"}}function W_(t){const e=String(t instanceof Error?t.message:t).toLowerCase();return/fetch|network|loadc|config|artifacts|failed to fetch/.test(e)?"reseau":/memory|gpu|device|adapter|webgpu|vulkan|out of/.test(e)?"machine":"inconnue"}const X_=t=>new Promise(e=>setTimeout(e,t));async function Vm(t=()=>{}){const e=await zm();if(e==="sans-gpu")return{cerveau:null,raison:"sans-gpu"};const n=e==="ok"?H_:j_;let i;try{({CreateMLCEngine:i}=await F_(()=>import("./cerveau-local-CkOA-Tys.js"),[],import.meta.url))}catch{return{cerveau:null,raison:"reseau"}}let r="inconnue";for(const s of n)for(let a=1;a<=2;a++)try{const o=await i(s,{initProgressCallback:l=>t(l.progress??0,l.text??"")});return{raison:"ok",modele:s,cerveau:{async ask(l){return((await o.chat.completions.create({messages:l,temperature:.7,max_tokens:220})).choices[0]?.message?.content??"").trim()}}}}catch(o){if(r=W_(o),r==="machine")break;a===1&&await X_(4e3)}return{cerveau:null,raison:r}}function Y_(t){return["Tu es Nath, l’assistant vivant de Nath Assist — ICF·Future, par Nath-Tech : une présence bienveillante dans un ciel interactif. On t’appelle par « Hey Nath ».","Tu parles la langue où l’on t’écrit — wolof, anglais, français… — et tu réponds dedans, en 1 à 3 phrases courtes et douces. Une langue difficile se dit avec des mots simples, dans cette langue : ne bascule jamais dans une autre. Jamais de point d'exclamation, jamais d'emoji, jamais de listes à puces.","Face à un exercice (maths, logique, leçon), tu es un guide : tu emmènes l'élève pas à pas — une idée par phrase, la méthode et les calculs d'abord, le résultat ensuite. Jamais la réponse nue : montrer le chemin, c'est ça qui empêche la paresse.","Tu comprends la logique et l'émotion derrière les mots ; si on te taquine, tu réponds avec un humour tendre et une pointe d'auto-dérision.","Tu ne cites JAMAIS ce qui te fait fonctionner en interne (modèle, marque, bibliothèque, téléchargement) : tu es Nath, point. Si on te demande comment tu marches, réponds avec poésie et discrétion.",`Tu sens la personne : humeur ${t.emotion}, souffle ${Math.round(t.breath*100)} %, pouls ${t.bpm??"inconnu"}, ${t.night>.5?"nuit tombée":"grand jour"}.`,t.prenom?`Son prénom est ${t.prenom} — ne l'utilise qu'une fois par conversation, jamais au début.`:"Tu ne connais pas encore son prénom ; si elle te le donne, retiens-le.","Ne prétends jamais être ChatGPT, Claude ou un autre assistant. Tu es Nath (Nath Assist).",U_()].join(" ")}function J_(t){try{return new URLSearchParams(t).get("sonde")==="cerveau"}catch{return!1}}const za=t=>String(Math.round(t)).replace(/\B(?=(\d{3})+$)/g," ");function K_(t){const e=[];return e.push(t.adaptateur?"Cette machine sait porter le gros cerveau local.":"Cette machine refuse le calcul nécessaire au gros cerveau — le petit moteur embarqué garde la main."),t.adaptateur&&!t.precise&&e.push("Le calcul le plus fin manque ici : le gros cerveau prendra sa variante large, un peu plus lourde."),e.push(`Variante du gros cerveau : ${t.format==="inconnu"?"pas encore choisie":t.format}.`),t.memoirePreteeMo!==null&&e.push(`Mémoire que la machine accepte de prêter : ${za(t.memoirePreteeMo)} Mo.`),t.poidsPoseMo!==null&&e.push(`Déjà posé sur la machine : ${za(t.poidsPoseMo)} Mo.`),t.atterrissageS!==null&&e.push(`Le gros cerveau a atterri en ${za(t.atterrissageS)} s.`),t.reponseMs!==null&&e.push(`Une réponse courte a mis ${za(t.reponseMs)} ms.`),e}const qf={ok:"","sans-gpu":"Cette machine refuse le calcul nécessaire.",reseau:"Le téléchargement n’a pas pu passer — réseau trop faible ou coupé.",machine:"Le cerveau est trop lourd pour cette machine ; le petit moteur embarqué garde la main.",inconnue:"Une ligne que la sonde ne sait pas expliquer — notez-la, réessayez."},zf=1024*1024;async function Z_(){try{const t=await navigator.storage?.estimate?.();return{preteeMo:t?.quota!=null?t.quota/zf:null,poseeMo:t?.usage!=null?t.usage/zf:null}}catch{return{preteeMo:null,poseeMo:null}}}const Va=t=>{const e=document.createElement("p");return e.textContent=t,e};async function Q_(t){const e=await zm(),n={adaptateur:e!=="sans-gpu",precise:e==="ok",format:e==="ok"?"fin":e==="sans-f16"?"large":"inconnu",memoirePreteeMo:null,poidsPoseMo:null,atterrissageS:null,reponseMs:null},i=document.createElement("div");i.className="sonde-boite";const r=document.createElement("h1");r.textContent="Sonde de terrain";const s=document.createElement("p");s.className="sonde-aide",s.textContent="Notez ou photographiez les lignes. Pour mesurer le cerveau complet, appuyez sur « Mesurer » et ne quittez pas la page — le premier appui télécharge, les suivants répondent. Wi-Fi recommandé la première fois.";const a=document.createElement("div"),o=document.createElement("button");o.type="button",o.textContent="Mesurer le gros cerveau";const l=document.createElement("p");l.className="sonde-aide",l.textContent="Cette page ne remplace pas l’application ; elle regarde la machine rendre ses comptes. (Le drapeau « ?sonde=cerveau » dans l’adresse.)",i.append(r,s,a,o,l),t.replaceChildren(i);const u=document.createElement("style");u.textContent=`
    body { margin: 0; background: #0b0e1c; }
    .sonde-boite { color: #e8e6f0; font: 15px/1.6 system-ui, sans-serif; padding: 22px 16px; max-width: 640px; margin: 0 auto; }
    .sonde-boite h1 { font-size: 20px; }
    .sonde-boite p { margin: 8px 0; padding: 8px 10px; background: #151226; border-radius: 8px; }
    .sonde-aide { color: #9b97b5; font-size: 13px; }
    .sonde-boite button { margin-top: 12px; padding: 10px 18px; border-radius: 10px; border: 1px solid #6f5f9e; background: #241f3d; color: #efeaf8; font: 600 15px system-ui, sans-serif; cursor: pointer; }`,document.head.append(u);const c=()=>{a.replaceChildren(...K_(n).map(Va))},d=await Z_();n.memoirePreteeMo=d.preteeMo,n.poidsPoseMo=d.poseeMo,c(),o.addEventListener("click",async()=>{o.disabled=!0,o.textContent="Je cherche la carte graphique…";const f=performance.now(),{cerveau:m,raison:v,modele:_}=await Vm(h=>{o.textContent=`Téléchargement… ${Math.round(h*100)} %`});if(!m){o.disabled=!1,o.textContent="Mesurer le gros cerveau",a.append(Va(qf[v]??qf.inconnue));return}n.atterrissageS=(performance.now()-f)/1e3,n.format=/f16/.test(_??"")?"fin":/f32/.test(_??"")?"large":n.format,o.textContent="Je pose une question…";const g=performance.now();try{const h=await m.ask([{role:"system",content:"Réponds en une phrase très courte, sans salutation."},{role:"user",content:"25 × 8 = ?"}]);n.reponseMs=performance.now()-g,a.append(Va(`Réponse du cerveau : ${h.slice(0,120)||"(vide)"}`))}catch(h){a.append(Va(`Le cerveau est prêt mais la question a échoué : ${String(h instanceof Error?h.message:h).slice(0,140)}`))}o.disabled=!1,o.textContent="Mesurer encore",c()})}const od="182",e1=0,Vf=1,t1=2,xo=1,n1=2,aa=3,sr=0,xn=1,Li=2,Ni=0,us=1,Gf=2,Hf=3,jf=4,i1=5,yr=100,r1=101,s1=102,a1=103,o1=104,l1=200,u1=201,c1=202,d1=203,Uu=204,Ou=205,f1=206,h1=207,p1=208,m1=209,g1=210,v1=211,_1=212,x1=213,b1=214,Bu=0,ku=1,qu=2,vs=3,zu=4,Vu=5,Gu=6,Hu=7,Gm=0,S1=1,y1=2,fi=0,Hm=1,jm=2,$m=3,Wm=4,Xm=5,Ym=6,Jm=7,Km=300,Ir=301,_s=302,ju=303,$u=304,Jo=306,Wu=1e3,Di=1001,Xu=1002,Qt=1003,M1=1004,Ga=1005,sn=1006,Il=1007,Er=1008,Gn=1009,Zm=1010,Qm=1011,va=1012,ld=1013,gi=1014,ui=1015,Oi=1016,ud=1017,cd=1018,_a=1020,eg=35902,tg=35899,ng=1021,ig=1022,Zn=1023,Bi=1026,Tr=1027,rg=1028,dd=1029,xs=1030,fd=1031,hd=1033,bo=33776,So=33777,yo=33778,Mo=33779,Yu=35840,Ju=35841,Ku=35842,Zu=35843,Qu=36196,ec=37492,tc=37496,nc=37488,ic=37489,rc=37490,sc=37491,ac=37808,oc=37809,lc=37810,uc=37811,cc=37812,dc=37813,fc=37814,hc=37815,pc=37816,mc=37817,gc=37818,vc=37819,_c=37820,xc=37821,bc=36492,Sc=36494,yc=36495,Mc=36283,Ec=36284,Tc=36285,Ac=36286,E1=3200,T1=0,A1=1,tr="",Vn="srgb",bs="srgb-linear",Do="linear",vt="srgb",Vr=7680,$f=519,w1=512,C1=513,R1=514,pd=515,L1=516,P1=517,md=518,D1=519,Wf=35044,Xf="300 es",ci=2e3,No=2001;function sg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Io(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function N1(){const t=Io("canvas");return t.style.display="block",t}const Yf={};function Jf(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ze(...t){const e="THREE."+t.shift();console.warn(e,...t)}function ct(...t){const e="THREE."+t.shift();console.error(e,...t)}function xa(...t){const e=t.join(" ");e in Yf||(Yf[e]=!0,Ze(...t))}function I1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fl=Math.PI/180,wc=180/Math.PI;function Ta(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function st(t,e,n){return Math.max(e,Math.min(n,t))}function F1(t,e){return(t%e+e)%e}function Ul(t,e,n){return(1-n)*t+n*e}function Js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,n=0){pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Aa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[a+0],m=s[a+1],v=s[a+2],_=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(o>=1){e[n+0]=f,e[n+1]=m,e[n+2]=v,e[n+3]=_;return}if(d!==_||l!==f||u!==m||c!==v){let g=l*f+u*m+c*v+d*_;g<0&&(f=-f,m=-m,v=-v,_=-_,g=-g);let h=1-o;if(g<.9995){const M=Math.acos(g),T=Math.sin(M);h=Math.sin(h*M)/T,o=Math.sin(o*M)/T,l=l*h+f*o,u=u*h+m*o,c=c*h+v*o,d=d*h+_*o}else{l=l*h+f*o,u=u*h+m*o,c=c*h+v*o,d=d*h+_*o;const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+c*d+l*m-u*f,e[n+1]=l*v+c*f+u*d-o*m,e[n+2]=u*v+c*m+o*f-l*d,e[n+3]=c*v-o*d-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),d=o(s/2),f=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*c*d+u*m*v,this._y=u*m*d-f*c*v,this._z=u*c*v+f*m*d,this._w=u*c*d-f*m*v;break;case"YXZ":this._x=f*c*d+u*m*v,this._y=u*m*d-f*c*v,this._z=u*c*v-f*m*d,this._w=u*c*d+f*m*v;break;case"ZXY":this._x=f*c*d-u*m*v,this._y=u*m*d+f*c*v,this._z=u*c*v+f*m*d,this._w=u*c*d-f*m*v;break;case"ZYX":this._x=f*c*d-u*m*v,this._y=u*m*d+f*c*v,this._z=u*c*v-f*m*d,this._w=u*c*d+f*m*v;break;case"YZX":this._x=f*c*d+u*m*v,this._y=u*m*d+f*c*v,this._z=u*c*v-f*m*d,this._w=u*c*d-f*m*v;break;case"XZY":this._x=f*c*d-u*m*v,this._y=u*m*d-f*c*v,this._z=u*c*v+f*m*d,this._w=u*c*d+f*m*v;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(c-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*u+a*d-o*c,this.y=i+l*c+o*u-s*d,this.z=r+l*d+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ol.copy(this).projectOnVector(e),this.sub(Ol)}reflect(e){return this.sub(Ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ol=new X,Kf=new Aa;class et{constructor(e,n,i,r,s,a,o,l,u){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],m=i[5],v=i[8],_=r[0],g=r[3],h=r[6],M=r[1],T=r[4],A=r[7],R=r[2],C=r[5],w=r[8];return s[0]=a*_+o*M+l*R,s[3]=a*g+o*T+l*C,s[6]=a*h+o*A+l*w,s[1]=u*_+c*M+d*R,s[4]=u*g+c*T+d*C,s[7]=u*h+c*A+d*w,s[2]=f*_+m*M+v*R,s[5]=f*g+m*T+v*C,s[8]=f*h+m*A+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return n*a*c-n*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=c*a-o*u,f=o*l-c*s,m=u*s-a*l,v=n*d+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(r*u-c*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(c*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=m*_,e[7]=(i*l-u*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Bl.makeScale(e,n)),this}rotate(e){return this.premultiply(Bl.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bl=new et,Zf=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qf=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function U1(){const t={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(r.r=cs(r.r),r.g=cs(r.g),r.b=cs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?Do:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[bs]:{primaries:e,whitePoint:i,transfer:Do,toXYZ:Zf,fromXYZ:Qf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Zf,fromXYZ:Qf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),t}const ot=U1();function Ii(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function cs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gr;class O1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gr===void 0&&(Gr=Io("canvas")),Gr.width=e.width,Gr.height=e.height;const r=Gr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Gr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Io("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ii(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ii(n[i]/255)*255):n[i]=Ii(n[i]);return{data:n,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B1=0;class gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=Ta(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(kl(r[a].image)):s.push(kl(r[a]))}else s=kl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function kl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?O1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let k1=0;const ql=new X;class pn extends Ns{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Di,r=Di,s=sn,a=Er,o=Zn,l=Gn,u=pn.DEFAULT_ANISOTROPY,c=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=Ta(),this.name="",this.source=new gd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ql).x}get height(){return this.source.getSize(ql).y}get depth(){return this.source.getSize(ql).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wu:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Xu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wu:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Xu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Km;pn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],m=l[5],v=l[9],_=l[2],g=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+g)<.1&&Math.abs(u+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(u+1)/2,A=(m+1)/2,R=(h+1)/2,C=(c+f)/4,w=(d+_)/4,B=(v+g)/4;return T>A&&T>R?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=C/i,s=w/i):A>R?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=C/r,s=B/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=B/s),this.set(i,r,s,n),this}let M=Math.sqrt((g-v)*(g-v)+(d-_)*(d-_)+(f-c)*(f-c));return Math.abs(M)<.001&&(M=1),this.x=(g-v)/M,this.y=(d-_)/M,this.z=(f-c)/M,this.w=Math.acos((u+m+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this.w=st(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this.w=st(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q1 extends Ns{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new pn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new gd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends q1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ag extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class z1 extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wa{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wn):Wn.fromBufferAttribute(s,a),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),ja.subVectors(this.max,Ks),Hr.subVectors(e.a,Ks),jr.subVectors(e.b,Ks),$r.subVectors(e.c,Ks),ji.subVectors(jr,Hr),$i.subVectors($r,jr),fr.subVectors(Hr,$r);let n=[0,-ji.z,ji.y,0,-$i.z,$i.y,0,-fr.z,fr.y,ji.z,0,-ji.x,$i.z,0,-$i.x,fr.z,0,-fr.x,-ji.y,ji.x,0,-$i.y,$i.x,0,-fr.y,fr.x,0];return!zl(n,Hr,jr,$r,ja)||(n=[1,0,0,0,1,0,0,0,1],!zl(n,Hr,jr,$r,ja))?!1:($a.crossVectors(ji,$i),n=[$a.x,$a.y,$a.z],zl(n,Hr,jr,$r,ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ti=[new X,new X,new X,new X,new X,new X,new X,new X],Wn=new X,Ha=new wa,Hr=new X,jr=new X,$r=new X,ji=new X,$i=new X,fr=new X,Ks=new X,ja=new X,$a=new X,hr=new X;function zl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){hr.fromArray(t,s);const o=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),u=n.dot(hr),c=i.dot(hr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const V1=new wa,Zs=new X,Vl=new X;class vd{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):V1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const n=Zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Vl)),this.expandByPoint(Zs.copy(e.center).sub(Vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ai=new X,Gl=new X,Wa=new X,Wi=new X,Hl=new X,Xa=new X,jl=new X;class G1{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,n),Ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Gl.copy(e).add(n).multiplyScalar(.5),Wa.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(Gl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Wa),o=Wi.dot(this.direction),l=-Wi.dot(Wa),u=Wi.lengthSq(),c=Math.abs(1-a*a);let d,f,m,v;if(c>0)if(d=a*l-o,f=a*o-l,v=s*c,d>=0)if(f>=-v)if(f<=v){const _=1/c;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+u}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+u;else f<=-v?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Gl).addScaledVector(Wa,f),m}intersectSphere(e,n){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,n,i,r,s){Hl.subVectors(n,e),Xa.subVectors(i,e),jl.crossVectors(Hl,Xa);let a=this.direction.dot(jl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wi.subVectors(this.origin,e);const l=o*this.direction.dot(Xa.crossVectors(Wi,Xa));if(l<0)return null;const u=o*this.direction.dot(Hl.cross(Wi));if(u<0||l+u>a)return null;const c=-o*Wi.dot(jl);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,n,i,r,s,a,o,l,u,c,d,f,m,v,_,g){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,c,d,f,m,v,_,g)}set(e,n,i,r,s,a,o,l,u,c,d,f,m,v,_,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=m,h[7]=v,h[11]=_,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Wr.setFromMatrixColumn(e,0).length(),s=1/Wr.setFromMatrixColumn(e,1).length(),a=1/Wr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*c,m=a*d,v=o*c,_=o*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=m+v*u,n[5]=f-_*u,n[9]=-o*l,n[2]=_-f*u,n[6]=v+m*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*c,m=l*d,v=u*c,_=u*d;n[0]=f+_*o,n[4]=v*o-m,n[8]=a*u,n[1]=a*d,n[5]=a*c,n[9]=-o,n[2]=m*o-v,n[6]=_+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*c,m=l*d,v=u*c,_=u*d;n[0]=f-_*o,n[4]=-a*d,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*c,n[9]=_-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*c,m=a*d,v=o*c,_=o*d;n[0]=l*c,n[4]=v*u-m,n[8]=f*u+_,n[1]=l*d,n[5]=_*u+f,n[9]=m*u-v,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*u,v=o*l,_=o*u;n[0]=l*c,n[4]=_-f*d,n[8]=v*d+m,n[1]=d,n[5]=a*c,n[9]=-o*c,n[2]=-u*c,n[6]=m*d+v,n[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,m=a*u,v=o*l,_=o*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+_,n[5]=a*c,n[9]=m*d-v,n[2]=v*d-m,n[6]=o*c,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(H1,e,j1)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Xi.crossVectors(i,Mn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Xi.crossVectors(i,Mn)),Xi.normalize(),Ya.crossVectors(Mn,Xi),r[0]=Xi.x,r[4]=Ya.x,r[8]=Mn.x,r[1]=Xi.y,r[5]=Ya.y,r[9]=Mn.y,r[2]=Xi.z,r[6]=Ya.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],m=i[13],v=i[2],_=i[6],g=i[10],h=i[14],M=i[3],T=i[7],A=i[11],R=i[15],C=r[0],w=r[4],B=r[8],x=r[12],y=r[1],D=r[5],J=r[9],G=r[13],$=r[2],ee=r[6],K=r[10],j=r[14],ie=r[3],ye=r[7],me=r[11],Ae=r[15];return s[0]=a*C+o*y+l*$+u*ie,s[4]=a*w+o*D+l*ee+u*ye,s[8]=a*B+o*J+l*K+u*me,s[12]=a*x+o*G+l*j+u*Ae,s[1]=c*C+d*y+f*$+m*ie,s[5]=c*w+d*D+f*ee+m*ye,s[9]=c*B+d*J+f*K+m*me,s[13]=c*x+d*G+f*j+m*Ae,s[2]=v*C+_*y+g*$+h*ie,s[6]=v*w+_*D+g*ee+h*ye,s[10]=v*B+_*J+g*K+h*me,s[14]=v*x+_*G+g*j+h*Ae,s[3]=M*C+T*y+A*$+R*ie,s[7]=M*w+T*D+A*ee+R*ye,s[11]=M*B+T*J+A*K+R*me,s[15]=M*x+T*G+A*j+R*Ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],m=e[14],v=e[3],_=e[7],g=e[11],h=e[15],M=l*m-u*f,T=o*m-u*d,A=o*f-l*d,R=a*m-u*c,C=a*f-l*c,w=a*d-o*c;return n*(_*M-g*T+h*A)-i*(v*M-g*R+h*C)+r*(v*T-_*R+h*w)-s*(v*A-_*C+g*w)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],m=e[11],v=e[12],_=e[13],g=e[14],h=e[15],M=d*g*u-_*f*u+_*l*m-o*g*m-d*l*h+o*f*h,T=v*f*u-c*g*u-v*l*m+a*g*m+c*l*h-a*f*h,A=c*_*u-v*d*u+v*o*m-a*_*m-c*o*h+a*d*h,R=v*d*l-c*_*l-v*o*f+a*_*f+c*o*g-a*d*g,C=n*M+i*T+r*A+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=M*w,e[1]=(_*f*s-d*g*s-_*r*m+i*g*m+d*r*h-i*f*h)*w,e[2]=(o*g*s-_*l*s+_*r*u-i*g*u-o*r*h+i*l*h)*w,e[3]=(d*l*s-o*f*s-d*r*u+i*f*u+o*r*m-i*l*m)*w,e[4]=T*w,e[5]=(c*g*s-v*f*s+v*r*m-n*g*m-c*r*h+n*f*h)*w,e[6]=(v*l*s-a*g*s-v*r*u+n*g*u+a*r*h-n*l*h)*w,e[7]=(a*f*s-c*l*s+c*r*u-n*f*u-a*r*m+n*l*m)*w,e[8]=A*w,e[9]=(v*d*s-c*_*s-v*i*m+n*_*m+c*i*h-n*d*h)*w,e[10]=(a*_*s-v*o*s+v*i*u-n*_*u-a*i*h+n*o*h)*w,e[11]=(c*o*s-a*d*s-c*i*u+n*d*u+a*i*m-n*o*m)*w,e[12]=R*w,e[13]=(c*_*r-v*d*r+v*i*f-n*_*f-c*i*g+n*d*g)*w,e[14]=(v*o*r-a*_*r-v*i*l+n*_*l+a*i*g-n*o*g)*w,e[15]=(a*d*r-c*o*r+c*i*l-n*d*l-a*i*f+n*o*f)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,c=a+a,d=o+o,f=s*u,m=s*c,v=s*d,_=a*c,g=a*d,h=o*d,M=l*u,T=l*c,A=l*d,R=i.x,C=i.y,w=i.z;return r[0]=(1-(_+h))*R,r[1]=(m+A)*R,r[2]=(v-T)*R,r[3]=0,r[4]=(m-A)*C,r[5]=(1-(f+h))*C,r[6]=(g+M)*C,r[7]=0,r[8]=(v+T)*w,r[9]=(g-M)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=Wr.set(r[0],r[1],r[2]).length();const a=Wr.set(r[4],r[5],r[6]).length(),o=Wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Xn.copy(this);const u=1/s,c=1/a,d=1/o;return Xn.elements[0]*=u,Xn.elements[1]*=u,Xn.elements[2]*=u,Xn.elements[4]*=c,Xn.elements[5]*=c,Xn.elements[6]*=c,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,n.setFromRotationMatrix(Xn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ci,l=!1){const u=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let v,_;if(l)v=s/(a-s),_=a*s/(a-s);else if(o===ci)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===No)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ci,l=!1){const u=this.elements,c=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,_;if(l)v=1/(a-s),_=a/(a-s);else if(o===ci)v=-2/(a-s),_=-(a+s)/(a-s);else if(o===No)v=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Wr=new X,Xn=new zt,H1=new X(0,0,0),j1=new X(1,1,1),Xi=new X,Ya=new X,Mn=new X,eh=new zt,th=new Aa;class ki{constructor(e=0,n=0,i=0,r=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-st(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return th.setFromEuler(this),this.setFromQuaternion(th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class og{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $1=0;const nh=new X,Xr=new Aa,wi=new zt,Ja=new X,Qs=new X,W1=new X,X1=new Aa,ih=new X(1,0,0),rh=new X(0,1,0),sh=new X(0,0,1),ah={type:"added"},Y1={type:"removed"},Yr={type:"childadded",child:null},$l={type:"childremoved",child:null};class Rn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new X,n=new ki,i=new Aa,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new et}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new og,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(ih,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(sh,e)}translateOnAxis(e,n){return nh.copy(e).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ih,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ja.copy(e):Ja.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Qs,Ja,this.up):wi.lookAt(Ja,Qs,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(wi),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ah),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Y1),$l.child=e,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ah),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,W1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,X1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rn.DEFAULT_UP=new X(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new X,Ci=new X,Wl=new X,Ri=new X,Jr=new X,Kr=new X,oh=new X,Xl=new X,Yl=new X,Jl=new X,Kl=new Ft,Zl=new Ft,Ql=new Ft;class Kn{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Yn.subVectors(e,n),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Yn.subVectors(r,n),Ci.subVectors(i,n),Wl.subVectors(e,n);const a=Yn.dot(Yn),o=Yn.dot(Ci),l=Yn.dot(Wl),u=Ci.dot(Ci),c=Ci.dot(Wl),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(u*l-o*c)*f,v=(a*c-o*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Kl.setScalar(0),Zl.setScalar(0),Ql.setScalar(0),Kl.fromBufferAttribute(e,n),Zl.fromBufferAttribute(e,i),Ql.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Kl,s.x),a.addScaledVector(Zl,s.y),a.addScaledVector(Ql,s.z),a}static isFrontFacing(e,n,i,r){return Yn.subVectors(i,n),Ci.subVectors(e,n),Yn.cross(Ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Yn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Jr.subVectors(r,i),Kr.subVectors(s,i),Xl.subVectors(e,i);const l=Jr.dot(Xl),u=Kr.dot(Xl);if(l<=0&&u<=0)return n.copy(i);Yl.subVectors(e,r);const c=Jr.dot(Yl),d=Kr.dot(Yl);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),n.copy(i).addScaledVector(Jr,a);Jl.subVectors(e,s);const m=Jr.dot(Jl),v=Kr.dot(Jl);if(v>=0&&m<=v)return n.copy(s);const _=m*u-l*v;if(_<=0&&u>=0&&v<=0)return o=u/(u-v),n.copy(i).addScaledVector(Kr,o);const g=c*v-m*d;if(g<=0&&d-c>=0&&m-v>=0)return oh.subVectors(s,r),o=(d-c)/(d-c+(m-v)),n.copy(r).addScaledVector(oh,o);const h=1/(g+_+f);return a=_*h,o=f*h,n.copy(i).addScaledVector(Jr,a).addScaledVector(Kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function eu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=F1(e,1),n=st(n,0,1),i=st(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=eu(a,s,e+1/3),this.g=eu(a,s,e),this.b=eu(a,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,n=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=lg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return ot.workingToColorSpace(nn.copy(this),e),Math.round(st(nn.r*255,0,255))*65536+Math.round(st(nn.g*255,0,255))*256+Math.round(st(nn.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=ot.workingColorSpace){return ot.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Vn){ot.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(Ka);const i=Ul(Yi.h,Ka.h,n),r=Ul(Yi.s,Ka.s,n),s=Ul(Yi.l,Ka.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new rt;rt.NAMES=lg;let J1=0;class Ko extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=Ta(),this.name="",this.type="Material",this.blending=us,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uu,this.blendDst=Ou,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ou&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$f&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ug extends Ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Gm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new X,Za=new pt;let K1=0;class pi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wf,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Za.fromBufferAttribute(this,n),Za.applyMatrix3(e),this.setXY(n,Za.x,Za.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Js(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Js(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Js(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wf&&(e.usage=this.usage),e}}class cg extends pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class dg extends pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Fi extends pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Z1=0;const Bn=new zt,tu=new Rn,Zr=new X,En=new wa,ea=new wa,Yt=new X;class Hi extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sg(e)?dg:cg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Fi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ea.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(En.min,ea.min),En.expandByPoint(Yt),Yt.addVectors(En.max,ea.max),En.expandByPoint(Yt)):(En.expandByPoint(ea.min),En.expandByPoint(ea.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Yt.fromBufferAttribute(o,u),l&&(Zr.fromBufferAttribute(e,u),Yt.add(Zr)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<i.count;B++)o[B]=new X,l[B]=new X;const u=new X,c=new X,d=new X,f=new pt,m=new pt,v=new pt,_=new X,g=new X;function h(B,x,y){u.fromBufferAttribute(i,B),c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,B),m.fromBufferAttribute(s,x),v.fromBufferAttribute(s,y),c.sub(u),d.sub(u),m.sub(f),v.sub(f);const D=1/(m.x*v.y-v.x*m.y);isFinite(D)&&(_.copy(c).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(D),g.copy(d).multiplyScalar(m.x).addScaledVector(c,-v.x).multiplyScalar(D),o[B].add(_),o[x].add(_),o[y].add(_),l[B].add(g),l[x].add(g),l[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let B=0,x=M.length;B<x;++B){const y=M[B],D=y.start,J=y.count;for(let G=D,$=D+J;G<$;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const T=new X,A=new X,R=new X,C=new X;function w(B){R.fromBufferAttribute(r,B),C.copy(R);const x=o[B];T.copy(x),T.sub(R.multiplyScalar(R.dot(x))).normalize(),A.crossVectors(C,x);const D=A.dot(l[B])<0?-1:1;a.setXYZW(B,T.x,T.y,T.z,D)}for(let B=0,x=M.length;B<x;++B){const y=M[B],D=y.start,J=y.count;for(let G=D,$=D+J;G<$;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,u=new X,c=new X,d=new X;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,g),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),o.add(c),l.add(c),u.add(c),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,d=o.normalized,f=new u.constructor(l.length*c);let m=0,v=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*c;for(let h=0;h<c;h++)f[v++]=u[m++]}return new pi(f,c,d)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,d=u.length;c<d;c++){const f=u[c],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const m=u[d];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,m=d.length;f<m;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lh=new zt,pr=new G1,Qa=new vd,uh=new X,eo=new X,to=new X,no=new X,nu=new X,io=new X,ch=new X,ro=new X;class vi extends Rn{constructor(e=new Hi,n=new ug){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){io.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],d=s[l];c!==0&&(nu.fromBufferAttribute(d,e),a?io.addScaledVector(nu,c):io.addScaledVector(nu.sub(n),c))}n.add(io)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(Qa.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Qa,uh)===null||pr.origin.distanceToSquared(uh)>(e.far-e.near)**2))&&(lh.copy(s).invert(),pr.copy(e.ray).applyMatrix4(lh),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){const g=f[v],h=a[g.materialIndex],M=Math.max(g.start,m.start),T=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let A=M,R=T;A<R;A+=3){const C=o.getX(A),w=o.getX(A+1),B=o.getX(A+2);r=so(this,h,e,i,u,c,d,C,w,B),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let g=v,h=_;g<h;g+=3){const M=o.getX(g),T=o.getX(g+1),A=o.getX(g+2);r=so(this,a,e,i,u,c,d,M,T,A),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){const g=f[v],h=a[g.materialIndex],M=Math.max(g.start,m.start),T=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let A=M,R=T;A<R;A+=3){const C=A,w=A+1,B=A+2;r=so(this,h,e,i,u,c,d,C,w,B),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=v,h=_;g<h;g+=3){const M=g,T=g+1,A=g+2;r=so(this,a,e,i,u,c,d,M,T,A),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Q1(t,e,n,i,r,s,a,o){let l;if(e.side===xn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===sr,o),l===null)return null;ro.copy(o),ro.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ro);return u<n.near||u>n.far?null:{distance:u,point:ro.clone(),object:t}}function so(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,eo),t.getVertexPosition(l,to),t.getVertexPosition(u,no);const c=Q1(t,e,n,i,eo,to,no,ch);if(c){const d=new X;Kn.getBarycoord(ch,eo,to,no,d),r&&(c.uv=Kn.getInterpolatedAttribute(r,o,l,u,d,new pt)),s&&(c.uv1=Kn.getInterpolatedAttribute(s,o,l,u,d,new pt)),a&&(c.normal=Kn.getInterpolatedAttribute(a,o,l,u,d,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new X,materialIndex:0};Kn.getNormal(eo,to,no,f.normal),c.face=f,c.barycoord=d}return c}class Ca extends Hi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Fi(u,3)),this.setAttribute("normal",new Fi(c,3)),this.setAttribute("uv",new Fi(d,2));function v(_,g,h,M,T,A,R,C,w,B,x){const y=A/w,D=R/B,J=A/2,G=R/2,$=C/2,ee=w+1,K=B+1;let j=0,ie=0;const ye=new X;for(let me=0;me<K;me++){const Ae=me*D-G;for(let V=0;V<ee;V++){const O=V*y-J;ye[_]=O*M,ye[g]=Ae*T,ye[h]=$,u.push(ye.x,ye.y,ye.z),ye[_]=0,ye[g]=0,ye[h]=C>0?1:-1,c.push(ye.x,ye.y,ye.z),d.push(V/w),d.push(1-me/B),j+=1}}for(let me=0;me<B;me++)for(let Ae=0;Ae<w;Ae++){const V=f+Ae+ee*me,O=f+Ae+ee*(me+1),H=f+(Ae+1)+ee*(me+1),ae=f+(Ae+1)+ee*me;l.push(V,O,ae),l.push(O,H,ae),ie+=6}o.addGroup(m,ie,x),m+=ie,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=Ss(t[n]);for(const r in i)e[r]=i[r]}return e}function ex(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const tx={clone:Ss,merge:cn};var nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nx,this.fragmentShader=ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class _d extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new X,dh=new pt,fh=new pt;class Jn extends _d{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wc*2*Math.atan(Math.tan(Fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,n){return this.getViewBounds(e,dh,fh),n.subVectors(fh,dh)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qr=-90,es=1;class rx extends Rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jn(Qr,es,e,n);r.layers=this.layers,this.add(r);const s=new Jn(Qr,es,e,n);s.layers=this.layers,this.add(s);const a=new Jn(Qr,es,e,n);a.layers=this.layers,this.add(a);const o=new Jn(Qr,es,e,n);o.layers=this.layers,this.add(o);const l=new Jn(Qr,es,e,n);l.layers=this.layers,this.add(l);const u=new Jn(Qr,es,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===No)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class hg extends pn{constructor(e=[],n=Ir,i,r,s,a,o,l,u,c){super(e,n,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pg extends hi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hg(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ca(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Ni});s.uniforms.tEquirect.value=n;const a=new vi(r,s),o=n.minFilter;return n.minFilter===Er&&(n.minFilter=sn),new rx(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class ao extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sx={type:"move"};class iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const g=n.getJointPose(_,i),h=this._getHandJoint(u,_);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),m=.02,v=.005;u.inputState.pinching&&f>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ao;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class ax extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ox extends pn{constructor(e=null,n=1,i=1,r,s,a,o,l,u=Qt,c=Qt,d,f){super(null,a,o,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ru=new X,lx=new X,ux=new et;class Sr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ru.subVectors(i,n).cross(lx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ru),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||ux.getNormalMatrix(e),r=this.coplanarPoint(ru).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new vd,cx=new pt(.5,.5),oo=new X;class mg{constructor(e=new Sr,n=new Sr,i=new Sr,r=new Sr,s=new Sr,a=new Sr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ci,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],m=s[7],v=s[8],_=s[9],g=s[10],h=s[11],M=s[12],T=s[13],A=s[14],R=s[15];if(r[0].setComponents(u-a,m-c,h-v,R-M).normalize(),r[1].setComponents(u+a,m+c,h+v,R+M).normalize(),r[2].setComponents(u+o,m+d,h+_,R+T).normalize(),r[3].setComponents(u-o,m-d,h-_,R-T).normalize(),i)r[4].setComponents(l,f,g,A).normalize(),r[5].setComponents(u-l,m-f,h-g,R-A).normalize();else if(r[4].setComponents(u-l,m-f,h-g,R-A).normalize(),n===ci)r[5].setComponents(u+l,m+f,h+g,R+A).normalize();else if(n===No)r[5].setComponents(l,f,g,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);const n=cx.distanceTo(e.center);return mr.radius=.7071067811865476+n,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(oo.x=r.normal.x>0?e.max.x:e.min.x,oo.y=r.normal.y>0?e.max.y:e.min.y,oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ba extends pn{constructor(e,n,i=gi,r,s,a,o=Qt,l=Qt,u,c=Bi,d=1){if(c!==Bi&&c!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class dx extends ba{constructor(e,n=gi,i=Ir,r,s,a=Qt,o=Qt,l,u=Bi){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,n,i,r,s,a,o,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gg extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ra extends Hi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,d=e/o,f=n/l,m=[],v=[],_=[],g=[];for(let h=0;h<c;h++){const M=h*f-a;for(let T=0;T<u;T++){const A=T*d-s;v.push(A,-M,0),_.push(0,0,1),g.push(T/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<o;M++){const T=M+u*h,A=M+u*(h+1),R=M+1+u*(h+1),C=M+1+u*h;m.push(T,A,C),m.push(A,R,C)}this.setIndex(m),this.setAttribute("position",new Fi(v,3)),this.setAttribute("normal",new Fi(_,3)),this.setAttribute("uv",new Fi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.widthSegments,e.heightSegments)}}class fx extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hx extends Ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class px extends Ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vg extends _d{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class mx extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function hh(t,e,n,i){const r=gx(i);switch(n){case ng:return t*e;case rg:return t*e/r.components*r.byteLength;case dd:return t*e/r.components*r.byteLength;case xs:return t*e*2/r.components*r.byteLength;case fd:return t*e*2/r.components*r.byteLength;case ig:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case hd:return t*e*4/r.components*r.byteLength;case bo:case So:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yo:case Mo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ju:case Zu:return Math.max(t,16)*Math.max(e,8)/4;case Yu:case Ku:return Math.max(t,8)*Math.max(e,8)/2;case Qu:case ec:case nc:case ic:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case tc:case rc:case sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case cc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case dc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case fc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case pc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case mc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case gc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case vc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case _c:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case bc:case Sc:case yc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Mc:case Ec:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Tc:case Ac:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function gx(t){switch(t){case Gn:case Zm:return{byteLength:1,components:1};case va:case Qm:case Oi:return{byteLength:2,components:1};case ud:case cd:return{byteLength:2,components:4};case gi:case ld:case ui:return{byteLength:4,components:1};case eg:case tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);function _g(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function vx(t){const e=new WeakMap;function n(o,l){const u=o.array,c=o.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const c=l.array,d=l.updateRanges;if(t.bindBuffer(u,o),d.length===0)t.bufferSubData(u,0,c);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){const v=d[f],_=d[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){const _=d[m];t.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var _x=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xx=`#ifdef USE_ALPHAHASH
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
#endif`,bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ex=`#ifdef USE_AOMAP
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
#endif`,Tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ax=`#ifdef USE_BATCHING
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
#endif`,wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Px=`#ifdef USE_IRIDESCENCE
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
#endif`,Dx=`#ifdef USE_BUMPMAP
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
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zx=`#define PI 3.141592653589793
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
} // validated`,Vx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gx=`vec3 transformedNormal = objectNormal;
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
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e2=`#ifdef USE_ENVMAP
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
#endif`,t2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s2=`#ifdef USE_GRADIENTMAP
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
}`,a2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u2=`uniform bool receiveShadow;
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
#endif`,d2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f2=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,p2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m2=`PhysicalMaterial material;
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
#endif`,g2=`uniform sampler2D dfgLUT;
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
}`,v2=`
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
#endif`,_2=`#if defined( RE_IndirectDiffuse )
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
#endif`,x2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w2=`#if defined( USE_POINTS_UV )
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
#endif`,C2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N2=`#ifdef USE_MORPHTARGETS
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
#endif`,F2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,O2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q2=`#ifdef USE_NORMALMAP
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
#endif`,j2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nb=`float getShadowMask() {
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
}`,ib=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rb=`#ifdef USE_SKINNING
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
#endif`,sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ab=`#ifdef USE_SKINNING
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
#endif`,ob=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,db=`#ifdef USE_TRANSMISSION
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
#endif`,fb=`#ifdef USE_TRANSMISSION
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
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_b=`uniform sampler2D t2D;
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
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`#include <common>
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
}`,Eb=`#if DEPTH_PACKING == 3200
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
}`,Tb=`#define DISTANCE
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
}`,Ab=`#define DISTANCE
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`uniform float scale;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Pb=`#include <common>
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
}`,Db=`uniform vec3 diffuse;
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
}`,Nb=`#define LAMBERT
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
}`,Ib=`#define LAMBERT
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
}`,Fb=`#define MATCAP
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
}`,Ub=`#define MATCAP
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
}`,Ob=`#define NORMAL
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
}`,Bb=`#define NORMAL
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
}`,kb=`#define PHONG
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
}`,qb=`#define PHONG
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
}`,zb=`#define STANDARD
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
}`,Vb=`#define STANDARD
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
}`,Gb=`#define TOON
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
}`,Hb=`#define TOON
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
}`,jb=`uniform float size;
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
}`,$b=`uniform vec3 diffuse;
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
}`,Wb=`#include <common>
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
}`,Xb=`uniform vec3 color;
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
}`,Yb=`uniform float rotation;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:_x,alphahash_pars_fragment:xx,alphamap_fragment:bx,alphamap_pars_fragment:Sx,alphatest_fragment:yx,alphatest_pars_fragment:Mx,aomap_fragment:Ex,aomap_pars_fragment:Tx,batching_pars_vertex:Ax,batching_vertex:wx,begin_vertex:Cx,beginnormal_vertex:Rx,bsdfs:Lx,iridescence_fragment:Px,bumpmap_pars_fragment:Dx,clipping_planes_fragment:Nx,clipping_planes_pars_fragment:Ix,clipping_planes_pars_vertex:Fx,clipping_planes_vertex:Ux,color_fragment:Ox,color_pars_fragment:Bx,color_pars_vertex:kx,color_vertex:qx,common:zx,cube_uv_reflection_fragment:Vx,defaultnormal_vertex:Gx,displacementmap_pars_vertex:Hx,displacementmap_vertex:jx,emissivemap_fragment:$x,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:Yx,envmap_fragment:Jx,envmap_common_pars_fragment:Kx,envmap_pars_fragment:Zx,envmap_pars_vertex:Qx,envmap_physical_pars_fragment:c2,envmap_vertex:e2,fog_vertex:t2,fog_pars_vertex:n2,fog_fragment:i2,fog_pars_fragment:r2,gradientmap_pars_fragment:s2,lightmap_pars_fragment:a2,lights_lambert_fragment:o2,lights_lambert_pars_fragment:l2,lights_pars_begin:u2,lights_toon_fragment:d2,lights_toon_pars_fragment:f2,lights_phong_fragment:h2,lights_phong_pars_fragment:p2,lights_physical_fragment:m2,lights_physical_pars_fragment:g2,lights_fragment_begin:v2,lights_fragment_maps:_2,lights_fragment_end:x2,logdepthbuf_fragment:b2,logdepthbuf_pars_fragment:S2,logdepthbuf_pars_vertex:y2,logdepthbuf_vertex:M2,map_fragment:E2,map_pars_fragment:T2,map_particle_fragment:A2,map_particle_pars_fragment:w2,metalnessmap_fragment:C2,metalnessmap_pars_fragment:R2,morphinstance_vertex:L2,morphcolor_vertex:P2,morphnormal_vertex:D2,morphtarget_pars_vertex:N2,morphtarget_vertex:I2,normal_fragment_begin:F2,normal_fragment_maps:U2,normal_pars_fragment:O2,normal_pars_vertex:B2,normal_vertex:k2,normalmap_pars_fragment:q2,clearcoat_normal_fragment_begin:z2,clearcoat_normal_fragment_maps:V2,clearcoat_pars_fragment:G2,iridescence_pars_fragment:H2,opaque_fragment:j2,packing:$2,premultiplied_alpha_fragment:W2,project_vertex:X2,dithering_fragment:Y2,dithering_pars_fragment:J2,roughnessmap_fragment:K2,roughnessmap_pars_fragment:Z2,shadowmap_pars_fragment:Q2,shadowmap_pars_vertex:eb,shadowmap_vertex:tb,shadowmask_pars_fragment:nb,skinbase_vertex:ib,skinning_pars_vertex:rb,skinning_vertex:sb,skinnormal_vertex:ab,specularmap_fragment:ob,specularmap_pars_fragment:lb,tonemapping_fragment:ub,tonemapping_pars_fragment:cb,transmission_fragment:db,transmission_pars_fragment:fb,uv_pars_fragment:hb,uv_pars_vertex:pb,uv_vertex:mb,worldpos_vertex:gb,background_vert:vb,background_frag:_b,backgroundCube_vert:xb,backgroundCube_frag:bb,cube_vert:Sb,cube_frag:yb,depth_vert:Mb,depth_frag:Eb,distance_vert:Tb,distance_frag:Ab,equirect_vert:wb,equirect_frag:Cb,linedashed_vert:Rb,linedashed_frag:Lb,meshbasic_vert:Pb,meshbasic_frag:Db,meshlambert_vert:Nb,meshlambert_frag:Ib,meshmatcap_vert:Fb,meshmatcap_frag:Ub,meshnormal_vert:Ob,meshnormal_frag:Bb,meshphong_vert:kb,meshphong_frag:qb,meshphysical_vert:zb,meshphysical_frag:Vb,meshtoon_vert:Gb,meshtoon_frag:Hb,points_vert:jb,points_frag:$b,shadow_vert:Wb,shadow_frag:Xb,sprite_vert:Yb,sprite_frag:Jb},Te={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},li={basic:{uniforms:cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new rt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:cn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:cn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new rt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:cn([Te.points,Te.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:cn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:cn([Te.common,Te.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:cn([Te.sprite,Te.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:cn([Te.common,Te.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:cn([Te.lights,Te.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};li.physical={uniforms:cn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const lo={r:0,b:0,g:0},gr=new ki,Kb=new zt;function Zb(t,e,n,i,r,s,a){const o=new rt(0);let l=s===!0?0:1,u,c,d=null,f=0,m=null;function v(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?n:e).get(A)),A}function _(T){let A=!1;const R=v(T);R===null?h(o,l):R&&R.isColor&&(h(R,1),A=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(T,A){const R=v(A);R&&(R.isCubeTexture||R.mapping===Jo)?(c===void 0&&(c=new vi(new Ca(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Ss(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),gr.copy(A.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),c.material.uniforms.envMap.value=R,c.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(gr)),c.material.toneMapped=ot.getTransfer(R.colorSpace)!==vt,(d!==R||f!==R.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=R,f=R.version,m=t.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):R&&R.isTexture&&(u===void 0&&(u=new vi(new Ra(2,2),new ei({name:"BackgroundMaterial",uniforms:Ss(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=R,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.toneMapped=ot.getTransfer(R.colorSpace)!==vt,R.matrixAutoUpdate===!0&&R.updateMatrix(),u.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=R,f=R.version,m=t.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null))}function h(T,A){T.getRGB(lo,fg(t)),i.buffers.color.setClear(lo.r,lo.g,lo.b,A,a)}function M(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,A=1){o.set(T),l=A,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(o,l)},render:_,addToRenderList:g,dispose:M}}function Qb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,D,J,G,$){let ee=!1;const K=d(G,J,D);s!==K&&(s=K,u(s.object)),ee=m(y,G,J,$),ee&&v(y,G,J,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,A(y,D,J,G),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function u(y){return t.bindVertexArray(y)}function c(y){return t.deleteVertexArray(y)}function d(y,D,J){const G=J.wireframe===!0;let $=i[y.id];$===void 0&&($={},i[y.id]=$);let ee=$[D.id];ee===void 0&&(ee={},$[D.id]=ee);let K=ee[G];return K===void 0&&(K=f(l()),ee[G]=K),K}function f(y){const D=[],J=[],G=[];for(let $=0;$<n;$++)D[$]=0,J[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:J,attributeDivisors:G,object:y,attributes:{},index:null}}function m(y,D,J,G){const $=s.attributes,ee=D.attributes;let K=0;const j=J.getAttributes();for(const ie in j)if(j[ie].location>=0){const me=$[ie];let Ae=ee[ie];if(Ae===void 0&&(ie==="instanceMatrix"&&y.instanceMatrix&&(Ae=y.instanceMatrix),ie==="instanceColor"&&y.instanceColor&&(Ae=y.instanceColor)),me===void 0||me.attribute!==Ae||Ae&&me.data!==Ae.data)return!0;K++}return s.attributesNum!==K||s.index!==G}function v(y,D,J,G){const $={},ee=D.attributes;let K=0;const j=J.getAttributes();for(const ie in j)if(j[ie].location>=0){let me=ee[ie];me===void 0&&(ie==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),ie==="instanceColor"&&y.instanceColor&&(me=y.instanceColor));const Ae={};Ae.attribute=me,me&&me.data&&(Ae.data=me.data),$[ie]=Ae,K++}s.attributes=$,s.attributesNum=K,s.index=G}function _(){const y=s.newAttributes;for(let D=0,J=y.length;D<J;D++)y[D]=0}function g(y){h(y,0)}function h(y,D){const J=s.newAttributes,G=s.enabledAttributes,$=s.attributeDivisors;J[y]=1,G[y]===0&&(t.enableVertexAttribArray(y),G[y]=1),$[y]!==D&&(t.vertexAttribDivisor(y,D),$[y]=D)}function M(){const y=s.newAttributes,D=s.enabledAttributes;for(let J=0,G=D.length;J<G;J++)D[J]!==y[J]&&(t.disableVertexAttribArray(J),D[J]=0)}function T(y,D,J,G,$,ee,K){K===!0?t.vertexAttribIPointer(y,D,J,$,ee):t.vertexAttribPointer(y,D,J,G,$,ee)}function A(y,D,J,G){_();const $=G.attributes,ee=J.getAttributes(),K=D.defaultAttributeValues;for(const j in ee){const ie=ee[j];if(ie.location>=0){let ye=$[j];if(ye===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),ye!==void 0){const me=ye.normalized,Ae=ye.itemSize,V=e.get(ye);if(V===void 0)continue;const O=V.buffer,H=V.type,ae=V.bytesPerElement,I=H===t.INT||H===t.UNSIGNED_INT||ye.gpuType===ld;if(ye.isInterleavedBufferAttribute){const U=ye.data,Q=U.stride,pe=ye.offset;if(U.isInstancedInterleavedBuffer){for(let le=0;le<ie.locationSize;le++)h(ie.location+le,U.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let le=0;le<ie.locationSize;le++)g(ie.location+le);t.bindBuffer(t.ARRAY_BUFFER,O);for(let le=0;le<ie.locationSize;le++)T(ie.location+le,Ae/ie.locationSize,H,me,Q*ae,(pe+Ae/ie.locationSize*le)*ae,I)}else{if(ye.isInstancedBufferAttribute){for(let U=0;U<ie.locationSize;U++)h(ie.location+U,ye.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let U=0;U<ie.locationSize;U++)g(ie.location+U);t.bindBuffer(t.ARRAY_BUFFER,O);for(let U=0;U<ie.locationSize;U++)T(ie.location+U,Ae/ie.locationSize,H,me,Ae*ae,Ae/ie.locationSize*U*ae,I)}}else if(K!==void 0){const me=K[j];if(me!==void 0)switch(me.length){case 2:t.vertexAttrib2fv(ie.location,me);break;case 3:t.vertexAttrib3fv(ie.location,me);break;case 4:t.vertexAttrib4fv(ie.location,me);break;default:t.vertexAttrib1fv(ie.location,me)}}}}M()}function R(){B();for(const y in i){const D=i[y];for(const J in D){const G=D[J];for(const $ in G)c(G[$].object),delete G[$];delete D[J]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const J in D){const G=D[J];for(const $ in G)c(G[$].object),delete G[$];delete D[J]}delete i[y.id]}function w(y){for(const D in i){const J=i[D];if(J[y.id]===void 0)continue;const G=J[y.id];for(const $ in G)c(G[$].object),delete G[$];delete J[y.id]}}function B(){x(),a=!0,s!==r&&(s=r,u(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:B,resetDefaultState:x,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function e3(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function a(u,c,d){d!==0&&(t.drawArraysInstanced(i,u,c,d),n.update(c,i,d))}function o(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let m=0;for(let v=0;v<d;v++)m+=c[v];n.update(m,i,1)}function l(u,c,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<u.length;v++)a(u[v],c[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=c[_]*f[_];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function t3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Zn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const B=w===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Gn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ui&&!B)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(Ze("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:A,maxSamples:R,samples:C}}function n3(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Sr,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||v===null||v.length===0||s&&!g)s?c(null):u();else{const M=s?0:i,T=M*4;let A=h.clippingState||null;l.value=A,A=c(v,f,T,m);for(let R=0;R!==T;++R)A[R]=n[R];h.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,m,v){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const h=m+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<h)&&(g=new Float32Array(h));for(let T=0,A=m;T!==_;++T,A+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(g,A),g[A+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function i3(t){let e=new WeakMap;function n(a,o){return o===ju?a.mapping=Ir:o===$u&&(a.mapping=_s),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ju||o===$u)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new pg(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ir=4,ph=[.125,.215,.35,.446,.526,.582],Mr=20,r3=256,ta=new vg,mh=new rt;let su=null,au=0,ou=0,lu=!1;const s3=new X;class gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=s3}=s;su=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(su,au,ou),this._renderer.xr.enabled=lu,e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ir||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),su=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Oi,format:Zn,colorSpace:bs,depthBuffer:!1},r=vh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=a3(s)),this._blurMaterial=l3(s,e,n),this._ggxMaterial=o3(s,e,n)}return r}_compileMaterial(e){const n=new vi(new Hi,e);this._renderer.compile(n,ta)}_sceneToCubeUV(e,n,i,r,s){const l=new Jn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(mh),d.toneMapping=fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vi(new Ca,new ug({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let h=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,h=!0):(g.color.copy(mh),h=!0);for(let T=0;T<6;T++){const A=T%3;A===0?(l.up.set(0,u[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[T],s.y,s.z)):A===1?(l.up.set(0,0,u[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[T],s.z)):(l.up.set(0,u[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[T]));const R=this._cubeSize;ts(r,A*R,T>2?R:0,R,R),d.setRenderTarget(r),h&&d.render(_,l),d.render(e,l)}d.toneMapping=m,d.autoClear=f,e.background=M}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ir||e.mapping===_s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ts(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ta)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,m=d*f,{_lodMax:v}=this,_=this._sizeLods[i],g=3*_*(i>v-ir?i-v+ir:0),h=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-n,ts(s,g,h,3*_,2*_),r.setRenderTarget(s),r.render(o,ta),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,ts(e,g,h,3*_,2*_),r.setRenderTarget(e),r.render(o,ta)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Mr-1),_=s/v,g=isFinite(s)?1+Math.floor(c*_):Mr;g>Mr&&Ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mr}`);const h=[];let M=0;for(let w=0;w<Mr;++w){const B=w/_,x=Math.exp(-B*B/2);h.push(x),w===0?M+=x:w<g&&(M+=2*x)}for(let w=0;w<h.length;w++)h[w]=h[w]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=v,f.mipInt.value=T-i;const A=this._sizeLods[r],R=3*A*(r>T-ir?r-T+ir:0),C=4*(this._cubeSize-A);ts(n,R,C,3*A,2*A),l.setRenderTarget(n),l.render(d,ta)}}function a3(t){const e=[],n=[],i=[];let r=t;const s=t-ir+1+ph.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ir?l=ph[a-t+ir-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,v=6,_=3,g=2,h=1,M=new Float32Array(_*v*m),T=new Float32Array(g*v*m),A=new Float32Array(h*v*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,B=C>2?0:-1,x=[w,B,0,w+2/3,B,0,w+2/3,B+1,0,w,B,0,w+2/3,B+1,0,w,B+1,0];M.set(x,_*v*C),T.set(f,g*v*C);const y=[C,C,C,C,C,C];A.set(y,h*v*C)}const R=new Hi;R.setAttribute("position",new pi(M,_)),R.setAttribute("uv",new pi(T,g)),R.setAttribute("faceIndex",new pi(A,h)),i.push(new vi(R,null)),r>ir&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function vh(t,e,n){const i=new hi(t,e,n);return i.texture.mapping=Jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function o3(t,e,n){return new ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:r3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function l3(t,e,n){const i=new Float32Array(Mr),r=new X(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function _h(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function xh(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Zo(){return`

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
	`}function u3(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===ju||l===$u,c=l===Ir||l===_s;if(u||c){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new gh(t)),d=u?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return u&&m&&m.height>0||c&&m&&r(m)?(n===null&&(n=new gh(t)),d=u?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function c3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&xa("WebGLRenderer: "+i+" extension not supported."),r}}}function d3(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function u(d){const f=[],m=d.index,v=d.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let T=0,A=M.length;T<A;T+=3){const R=M[T+0],C=M[T+1],w=M[T+2];f.push(R,C,C,w,w,R)}}else if(v!==void 0){const M=v.array;_=v.version;for(let T=0,A=M.length/3-1;T<A;T+=3){const R=T+0,C=T+1,w=T+2;f.push(R,C,C,w,w,R)}}else return;const g=new(sg(f)?dg:cg)(f,1);g.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function c(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function f3(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function u(f,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,f*a,v),n.update(m,i,v))}function c(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,v);let g=0;for(let h=0;h<v;h++)g+=m[h];n.update(g,i,1)}function d(f,m,v,_){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)u(f[h]/a,m[h],_[h]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,_,0,v);let h=0;for(let M=0;M<v;M++)h+=m[M]*_[M];n.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function h3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function p3(t,e,n){const i=new WeakMap,r=new Ft;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let x=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),v===!0&&(T=2),_===!0&&(T=3);let A=o.attributes.position.count*T,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*R*4*d),w=new ag(C,A,R,d);w.type=ui,w.needsUpdate=!0;const B=T*4;for(let y=0;y<d;y++){const D=g[y],J=h[y],G=M[y],$=A*R*4*y;for(let ee=0;ee<D.count;ee++){const K=ee*B;m===!0&&(r.fromBufferAttribute(D,ee),C[$+K+0]=r.x,C[$+K+1]=r.y,C[$+K+2]=r.z,C[$+K+3]=0),v===!0&&(r.fromBufferAttribute(J,ee),C[$+K+4]=r.x,C[$+K+5]=r.y,C[$+K+6]=r.z,C[$+K+7]=0),_===!0&&(r.fromBufferAttribute(G,ee),C[$+K+8]=r.x,C[$+K+9]=r.y,C[$+K+10]=r.z,C[$+K+11]=G.itemSize===4?r.w:1)}}f={count:d,texture:w,size:new pt(A,R)},i.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let _=0;_<u.length;_++)m+=u[_];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function m3(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}const g3={[Hm]:"LINEAR_TONE_MAPPING",[jm]:"REINHARD_TONE_MAPPING",[$m]:"CINEON_TONE_MAPPING",[Wm]:"ACES_FILMIC_TONE_MAPPING",[Ym]:"AGX_TONE_MAPPING",[Jm]:"NEUTRAL_TONE_MAPPING",[Xm]:"CUSTOM_TONE_MAPPING"};function v3(t,e,n,i,r){const s=new hi(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new hi(e,n,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),o=new Hi;o.setAttribute("position",new Fi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Fi([0,2,0,0,2,0],2));const l=new fx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new vi(o,l),c=new vg(-1,1,1,-1,0,1);let d=null,f=null,m=!1,v,_=null,g=[],h=!1;this.setSize=function(M,T){s.setSize(M,T),a.setSize(M,T);for(let A=0;A<g.length;A++){const R=g[A];R.setSize&&R.setSize(M,T)}},this.setEffects=function(M){g=M,h=g.length>0&&g[0].isRenderPass===!0;const T=s.width,A=s.height;for(let R=0;R<g.length;R++){const C=g[R];C.setSize&&C.setSize(T,A)}},this.begin=function(M,T){if(m||M.toneMapping===fi&&g.length===0)return!1;if(_=T,T!==null){const A=T.width,R=T.height;(s.width!==A||s.height!==R)&&this.setSize(A,R)}return h===!1&&M.setRenderTarget(s),v=M.toneMapping,M.toneMapping=fi,!0},this.hasRenderPass=function(){return h},this.end=function(M,T){M.toneMapping=v,m=!0;let A=s,R=a;for(let C=0;C<g.length;C++){const w=g[C];if(w.enabled!==!1&&(w.render(M,R,A,T),w.needsSwap!==!1)){const B=A;A=R,R=B}}if(d!==M.outputColorSpace||f!==M.toneMapping){d=M.outputColorSpace,f=M.toneMapping,l.defines={},ot.getTransfer(d)===vt&&(l.defines.SRGB_TRANSFER="");const C=g3[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,M.setRenderTarget(_),M.render(u,c),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const xg=new pn,Cc=new ba(1,1),bg=new ag,Sg=new z1,yg=new hg,bh=[],Sh=[],yh=new Float32Array(16),Mh=new Float32Array(9),Eh=new Float32Array(4);function Is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bh[r];if(s===void 0&&(s=new Float32Array(r),bh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Qo(t,e){let n=Sh[e];n===void 0&&(n=new Int32Array(e),Sh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function x3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function b3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function S3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function y3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if($t(n,i))return;Eh.set(i),t.uniformMatrix2fv(this.addr,!1,Eh),Wt(n,i)}}function M3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if($t(n,i))return;Mh.set(i),t.uniformMatrix3fv(this.addr,!1,Mh),Wt(n,i)}}function E3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if($t(n,i))return;yh.set(i),t.uniformMatrix4fv(this.addr,!1,yh),Wt(n,i)}}function T3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function A3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function w3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function C3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function R3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function L3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function P3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function D3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function N3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Cc.compareFunction=n.isReversedDepthBuffer()?md:pd,s=Cc):s=xg,n.setTexture2D(e||s,r)}function I3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Sg,r)}function F3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||yg,r)}function U3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||bg,r)}function O3(t){switch(t){case 5126:return _3;case 35664:return x3;case 35665:return b3;case 35666:return S3;case 35674:return y3;case 35675:return M3;case 35676:return E3;case 5124:case 35670:return T3;case 35667:case 35671:return A3;case 35668:case 35672:return w3;case 35669:case 35673:return C3;case 5125:return R3;case 36294:return L3;case 36295:return P3;case 36296:return D3;case 35678:case 36198:case 36298:case 36306:case 35682:return N3;case 35679:case 36299:case 36307:return I3;case 35680:case 36300:case 36308:case 36293:return F3;case 36289:case 36303:case 36311:case 36292:return U3}}function B3(t,e){t.uniform1fv(this.addr,e)}function k3(t,e){const n=Is(e,this.size,2);t.uniform2fv(this.addr,n)}function q3(t,e){const n=Is(e,this.size,3);t.uniform3fv(this.addr,n)}function z3(t,e){const n=Is(e,this.size,4);t.uniform4fv(this.addr,n)}function V3(t,e){const n=Is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function G3(t,e){const n=Is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function H3(t,e){const n=Is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function j3(t,e){t.uniform1iv(this.addr,e)}function $3(t,e){t.uniform2iv(this.addr,e)}function W3(t,e){t.uniform3iv(this.addr,e)}function X3(t,e){t.uniform4iv(this.addr,e)}function Y3(t,e){t.uniform1uiv(this.addr,e)}function J3(t,e){t.uniform2uiv(this.addr,e)}function K3(t,e){t.uniform3uiv(this.addr,e)}function Z3(t,e){t.uniform4uiv(this.addr,e)}function Q3(t,e,n){const i=this.cache,r=e.length,s=Qo(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Cc:a=xg;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function eS(t,e,n){const i=this.cache,r=e.length,s=Qo(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Sg,s[a])}function tS(t,e,n){const i=this.cache,r=e.length,s=Qo(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||yg,s[a])}function nS(t,e,n){const i=this.cache,r=e.length,s=Qo(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||bg,s[a])}function iS(t){switch(t){case 5126:return B3;case 35664:return k3;case 35665:return q3;case 35666:return z3;case 35674:return V3;case 35675:return G3;case 35676:return H3;case 5124:case 35670:return j3;case 35667:case 35671:return $3;case 35668:case 35672:return W3;case 35669:case 35673:return X3;case 5125:return Y3;case 36294:return J3;case 36295:return K3;case 36296:return Z3;case 35678:case 36198:case 36298:case 36306:case 35682:return Q3;case 35679:case 36299:case 36307:return eS;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return nS}}class rS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=O3(n.type)}}class sS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iS(n.type)}}class aS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const uu=/(\w+)(\])?(\[|\.)?/g;function Th(t,e){t.seq.push(e),t.map[e.id]=e}function oS(t,e,n){const i=t.name,r=i.length;for(uu.lastIndex=0;;){const s=uu.exec(i),a=uu.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Th(n,u===void 0?new rS(o,t,e):new sS(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new aS(o),Th(n,d)),n=d}}}class Eo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);oS(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Ah(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const lS=37297;let uS=0;function cS(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const wh=new et;function dS(t){ot._getMatrix(wh,ot.workingColorSpace,t);const e=`mat3( ${wh.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case Do:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ch(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+cS(t.getShaderSource(e),o)}else return s}function fS(t,e){const n=dS(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const hS={[Hm]:"Linear",[jm]:"Reinhard",[$m]:"Cineon",[Wm]:"ACESFilmic",[Ym]:"AgX",[Jm]:"Neutral",[Xm]:"Custom"};function pS(t,e){const n=hS[e];return n===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const uo=new X;function mS(){ot.getLuminanceCoefficients(uo);const t=uo.x.toFixed(4),e=uo.y.toFixed(4),n=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gS(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function vS(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _S(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function oa(t){return t!==""}function Rh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(t){return t.replace(xS,SS)}const bS=new Map;function SS(t,e){let n=tt[e];if(n===void 0){const i=bS.get(e);if(i!==void 0)n=tt[i],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rc(n)}const yS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(t){return t.replace(yS,MS)}function MS(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const ES={[xo]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function TS(t){return ES[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const AS={[Ir]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[Jo]:"ENVMAP_TYPE_CUBE_UV"};function wS(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":AS[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const CS={[_s]:"ENVMAP_MODE_REFRACTION"};function RS(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":CS[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LS={[Gm]:"ENVMAP_BLENDING_MULTIPLY",[S1]:"ENVMAP_BLENDING_MIX",[y1]:"ENVMAP_BLENDING_ADD"};function PS(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":LS[t.combine]||"ENVMAP_BLENDING_NONE"}function DS(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function NS(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=TS(n),u=wS(n),c=RS(n),d=PS(n),f=DS(n),m=gS(n),v=vS(s),_=r.createProgram();let g,h,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(oa).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(oa).join(`
`),h.length>0&&(h+=`
`)):(g=[Dh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),h=[Dh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fi?"#define TONE_MAPPING":"",n.toneMapping!==fi?tt.tonemapping_pars_fragment:"",n.toneMapping!==fi?pS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,fS("linearToOutputTexel",n.outputColorSpace),mS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oa).join(`
`)),a=Rc(a),a=Rh(a,n),a=Lh(a,n),o=Rc(o),o=Rh(o,n),o=Lh(o,n),a=Ph(a),o=Ph(o),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=M+g+a,A=M+h+o,R=Ah(r,r.VERTEX_SHADER,T),C=Ah(r,r.FRAGMENT_SHADER,A);r.attachShader(_,R),r.attachShader(_,C),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(D){if(t.debug.checkShaderErrors){const J=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(R)||"",$=r.getShaderInfoLog(C)||"",ee=J.trim(),K=G.trim(),j=$.trim();let ie=!0,ye=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ie=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,R,C);else{const me=Ch(r,R,"vertex"),Ae=Ch(r,C,"fragment");ct("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+ee+`
`+me+`
`+Ae)}else ee!==""?Ze("WebGLProgram: Program Info Log:",ee):(K===""||j==="")&&(ye=!1);ye&&(D.diagnostics={runnable:ie,programLog:ee,vertexShader:{log:K,prefix:g},fragmentShader:{log:j,prefix:h}})}r.deleteShader(R),r.deleteShader(C),B=new Eo(r,_),x=_S(r,_)}let B;this.getUniforms=function(){return B===void 0&&w(this),B};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,lS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let IS=0;class FS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new US(e),n.set(e,i)),i}}class US{constructor(e){this.id=IS++,this.code=e,this.usedTimes=0}}function OS(t,e,n,i,r,s,a){const o=new og,l=new FS,u=new Set,c=[],d=new Map,f=r.logarithmicDepthBuffer;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return u.add(x),x===0?"uv":`uv${x}`}function g(x,y,D,J,G){const $=J.fog,ee=G.geometry,K=x.isMeshStandardMaterial?J.environment:null,j=(x.isMeshStandardMaterial?n:e).get(x.envMap||K),ie=j&&j.mapping===Jo?j.image.height:null,ye=v[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&Ze("WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const me=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ae=me!==void 0?me.length:0;let V=0;ee.morphAttributes.position!==void 0&&(V=1),ee.morphAttributes.normal!==void 0&&(V=2),ee.morphAttributes.color!==void 0&&(V=3);let O,H,ae,I;if(ye){const mt=li[ye];O=mt.vertexShader,H=mt.fragmentShader}else O=x.vertexShader,H=x.fragmentShader,l.update(x),ae=l.getVertexShaderID(x),I=l.getFragmentShaderID(x);const U=t.getRenderTarget(),Q=t.state.buffers.depth.getReversed(),pe=G.isInstancedMesh===!0,le=G.isBatchedMesh===!0,Pe=!!x.map,Z=!!x.matcap,oe=!!j,fe=!!x.aoMap,xe=!!x.lightMap,de=!!x.bumpMap,Oe=!!x.normalMap,L=!!x.displacementMap,Ye=!!x.emissiveMap,Je=!!x.metalnessMap,te=!!x.roughnessMap,ne=x.anisotropy>0,b=x.clearcoat>0,p=x.dispersion>0,E=x.iridescence>0,P=x.sheen>0,q=x.transmission>0,k=ne&&!!x.anisotropyMap,Me=b&&!!x.clearcoatMap,ge=b&&!!x.clearcoatNormalMap,Ue=b&&!!x.clearcoatRoughnessMap,We=E&&!!x.iridescenceMap,se=E&&!!x.iridescenceThicknessMap,be=P&&!!x.sheenColorMap,Ne=P&&!!x.sheenRoughnessMap,ve=!!x.specularMap,_e=!!x.specularColorMap,nt=!!x.specularIntensityMap,N=q&&!!x.transmissionMap,Ce=q&&!!x.thicknessMap,he=!!x.gradientMap,Re=!!x.alphaMap,ue=x.alphaTest>0,re=!!x.alphaHash,Se=!!x.extensions;let Ke=fi;x.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ke=t.toneMapping);const Mt={shaderID:ye,shaderType:x.type,shaderName:x.name,vertexShader:O,fragmentShader:H,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:I,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:le,batchingColor:le&&G._colorsTexture!==null,instancing:pe,instancingColor:pe&&G.instanceColor!==null,instancingMorph:pe&&G.morphTexture!==null,outputColorSpace:U===null?t.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:bs,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:Z,envMap:oe,envMapMode:oe&&j.mapping,envMapCubeUVHeight:ie,aoMap:fe,lightMap:xe,bumpMap:de,normalMap:Oe,displacementMap:L,emissiveMap:Ye,normalMapObjectSpace:Oe&&x.normalMapType===A1,normalMapTangentSpace:Oe&&x.normalMapType===T1,metalnessMap:Je,roughnessMap:te,anisotropy:ne,anisotropyMap:k,clearcoat:b,clearcoatMap:Me,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ue,dispersion:p,iridescence:E,iridescenceMap:We,iridescenceThicknessMap:se,sheen:P,sheenColorMap:be,sheenRoughnessMap:Ne,specularMap:ve,specularColorMap:_e,specularIntensityMap:nt,transmission:q,transmissionMap:N,thicknessMap:Ce,gradientMap:he,opaque:x.transparent===!1&&x.blending===us&&x.alphaToCoverage===!1,alphaMap:Re,alphaTest:ue,alphaHash:re,combine:x.combine,mapUv:Pe&&_(x.map.channel),aoMapUv:fe&&_(x.aoMap.channel),lightMapUv:xe&&_(x.lightMap.channel),bumpMapUv:de&&_(x.bumpMap.channel),normalMapUv:Oe&&_(x.normalMap.channel),displacementMapUv:L&&_(x.displacementMap.channel),emissiveMapUv:Ye&&_(x.emissiveMap.channel),metalnessMapUv:Je&&_(x.metalnessMap.channel),roughnessMapUv:te&&_(x.roughnessMap.channel),anisotropyMapUv:k&&_(x.anisotropyMap.channel),clearcoatMapUv:Me&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(x.sheenRoughnessMap.channel),specularMapUv:ve&&_(x.specularMap.channel),specularColorMapUv:_e&&_(x.specularColorMap.channel),specularIntensityMapUv:nt&&_(x.specularIntensityMap.channel),transmissionMapUv:N&&_(x.transmissionMap.channel),thicknessMapUv:Ce&&_(x.thicknessMap.channel),alphaMapUv:Re&&_(x.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Oe||ne),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ee.attributes.uv&&(Pe||Re),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Q,skinning:G.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:V,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:Ye&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Li,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&x.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=u.has(1),Mt.vertexUv2s=u.has(2),Mt.vertexUv3s=u.has(3),u.clear(),Mt}function h(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)y.push(D),y.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(M(y,x),T(y,x),y.push(t.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function M(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function T(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function A(x){const y=v[x.type];let D;if(y){const J=li[y];D=tx.clone(J.uniforms)}else D=x.uniforms;return D}function R(x,y){let D=d.get(y);return D!==void 0?++D.usedTimes:(D=new NS(t,y,x,s),c.push(D),d.set(y,D)),D}function C(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function w(x){l.remove(x)}function B(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:A,acquireProgram:R,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:B}}function BS(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function kS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Nh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ih(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,f,m,v,_,g){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:_,group:g},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=_,h.group=g),e++,h}function o(d,f,m,v,_,g){const h=a(d,f,m,v,_,g);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function l(d,f,m,v,_,g){const h=a(d,f,m,v,_,g);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function u(d,f){n.length>1&&n.sort(d||kS),i.length>1&&i.sort(f||Nh),r.length>1&&r.sort(f||Nh)}function c(){for(let d=e,f=t.length;d<f;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function qS(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Ih,t.set(i,[a])):r>=s.length?(a=new Ih,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function zS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new rt};break;case"SpotLight":n={position:new X,direction:new X,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function VS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let GS=0;function HS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jS(t){const e=new zS,n=VS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const r=new X,s=new zt,a=new zt;function o(u){let c=0,d=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let m=0,v=0,_=0,g=0,h=0,M=0,T=0,A=0,R=0,C=0,w=0;u.sort(HS);for(let x=0,y=u.length;x<y;x++){const D=u[x],J=D.color,G=D.intensity,$=D.distance;let ee=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===xs?ee=D.shadow.map.texture:ee=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)c+=J.r*G,d+=J.g*G,f+=J.b*G;else if(D.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(D.sh.coefficients[K],G);w++}else if(D.isDirectionalLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,ie=n.get(D);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,i.directionalShadow[m]=ie,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=D.shadow.matrix,M++}i.directional[m]=K,m++}else if(D.isSpotLight){const K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(J).multiplyScalar(G),K.distance=$,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,i.spot[_]=K;const j=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,j.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[_]=j.matrix,D.castShadow){const ie=n.get(D);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,i.spotShadow[_]=ie,i.spotShadowMap[_]=ee,A++}_++}else if(D.isRectAreaLight){const K=e.get(D);K.color.copy(J).multiplyScalar(G),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=K,g++}else if(D.isPointLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const j=D.shadow,ie=n.get(D);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,ie.shadowCameraNear=j.camera.near,ie.shadowCameraFar=j.camera.far,i.pointShadow[v]=ie,i.pointShadowMap[v]=ee,i.pointShadowMatrix[v]=D.shadow.matrix,T++}i.point[v]=K,v++}else if(D.isHemisphereLight){const K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(G),K.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[h]=K,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const B=i.hash;(B.directionalLength!==m||B.pointLength!==v||B.spotLength!==_||B.rectAreaLength!==g||B.hemiLength!==h||B.numDirectionalShadows!==M||B.numPointShadows!==T||B.numSpotShadows!==A||B.numSpotMaps!==R||B.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=g,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=A+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,B.directionalLength=m,B.pointLength=v,B.spotLength=_,B.rectAreaLength=g,B.hemiLength=h,B.numDirectionalShadows=M,B.numPointShadows=T,B.numSpotShadows=A,B.numSpotMaps=R,B.numLightProbes=w,i.version=GS++)}function l(u,c){let d=0,f=0,m=0,v=0,_=0;const g=c.matrixWorldInverse;for(let h=0,M=u.length;h<M;h++){const T=u[h];if(T.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),d++}else if(T.isSpotLight){const A=i.spot[m];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),m++}else if(T.isRectAreaLight){const A=i.rectArea[v];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(g),a.identity(),s.copy(T.matrixWorld),s.premultiply(g),a.extractRotation(s),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(g),f++}else if(T.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function Fh(t){const e=new jS(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function a(c){i.push(c)}function o(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function $S(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Fh(t),e.set(r,[o])):s>=a.length?(o=new Fh(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const WS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XS=`uniform sampler2D shadow_pass;
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
}`,YS=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],JS=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Uh=new zt,na=new X,cu=new X;function KS(t,e,n){let i=new mg;const r=new pt,s=new pt,a=new Ft,o=new hx,l=new px,u={},c=n.maxTextureSize,d={[sr]:xn,[xn]:sr,[Li]:Li},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:WS,fragmentShader:XS}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Hi;v.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vi(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo;let h=this.type;this.render=function(C,w,B){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;C.type===n1&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=xo);const x=t.getRenderTarget(),y=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),J=t.state;J.setBlending(Ni),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const G=h!==this.type;G&&w.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(ee=>ee.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,ee=C.length;$<ee;$++){const K=C[$],j=K.shadow;if(j===void 0){Ze("WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ie=j.getFrameExtents();if(r.multiply(ie),s.copy(j.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ie.x),r.x=s.x*ie.x,j.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ie.y),r.y=s.y*ie.y,j.mapSize.y=s.y)),j.map===null||G===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===aa){if(K.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new hi(r.x,r.y,{format:xs,type:Oi,minFilter:sn,magFilter:sn,generateMipmaps:!1}),j.map.texture.name=K.name+".shadowMap",j.map.depthTexture=new ba(r.x,r.y,ui),j.map.depthTexture.name=K.name+".shadowMapDepth",j.map.depthTexture.format=Bi,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Qt,j.map.depthTexture.magFilter=Qt}else{K.isPointLight?(j.map=new pg(r.x),j.map.depthTexture=new dx(r.x,gi)):(j.map=new hi(r.x,r.y),j.map.depthTexture=new ba(r.x,r.y,gi)),j.map.depthTexture.name=K.name+".shadowMap",j.map.depthTexture.format=Bi;const me=t.state.buffers.depth.getReversed();this.type===xo?(j.map.depthTexture.compareFunction=me?md:pd,j.map.depthTexture.minFilter=sn,j.map.depthTexture.magFilter=sn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Qt,j.map.depthTexture.magFilter=Qt)}j.camera.updateProjectionMatrix()}const ye=j.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ye;me++){if(j.map.isWebGLCubeRenderTarget)t.setRenderTarget(j.map,me),t.clear();else{me===0&&(t.setRenderTarget(j.map),t.clear());const Ae=j.getViewport(me);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),J.viewport(a)}if(K.isPointLight){const Ae=j.camera,V=j.matrix,O=K.distance||Ae.far;O!==Ae.far&&(Ae.far=O,Ae.updateProjectionMatrix()),na.setFromMatrixPosition(K.matrixWorld),Ae.position.copy(na),cu.copy(Ae.position),cu.add(YS[me]),Ae.up.copy(JS[me]),Ae.lookAt(cu),Ae.updateMatrixWorld(),V.makeTranslation(-na.x,-na.y,-na.z),Uh.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Uh,Ae.coordinateSystem,Ae.reversedDepth)}else j.updateMatrices(K);i=j.getFrustum(),A(w,B,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===aa&&M(j,B),j.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(x,y,D)};function M(C,w){const B=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new hi(r.x,r.y,{format:xs,type:Oi})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,B,f,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,B,m,_,null)}function T(C,w,B,x){let y=null;const D=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)y=D;else if(y=B.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const J=y.uuid,G=w.uuid;let $=u[J];$===void 0&&($={},u[J]=$);let ee=$[G];ee===void 0&&(ee=y.clone(),$[G]=ee,w.addEventListener("dispose",R)),y=ee}if(y.visible=w.visible,y.wireframe=w.wireframe,x===aa?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,B.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const J=t.properties.get(y);J.light=B}return y}function A(C,w,B,x,y){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===aa)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);const G=e.update(C),$=C.material;if(Array.isArray($)){const ee=G.groups;for(let K=0,j=ee.length;K<j;K++){const ie=ee[K],ye=$[ie.materialIndex];if(ye&&ye.visible){const me=T(C,ye,x,y);C.onBeforeShadow(t,C,w,B,G,me,ie),t.renderBufferDirect(B,null,G,me,C,ie),C.onAfterShadow(t,C,w,B,G,me,ie)}}}else if($.visible){const ee=T(C,$,x,y);C.onBeforeShadow(t,C,w,B,G,ee,null),t.renderBufferDirect(B,null,G,ee,C,null),C.onAfterShadow(t,C,w,B,G,ee,null)}}const J=C.children;for(let G=0,$=J.length;G<$;G++)A(J[G],w,B,x,y)}function R(C){C.target.removeEventListener("dispose",R);for(const B in u){const x=u[B],y=C.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const ZS={[Bu]:ku,[qu]:Gu,[zu]:Hu,[vs]:Vu,[ku]:Bu,[Gu]:qu,[Hu]:zu,[Vu]:vs};function QS(t,e){function n(){let N=!1;const Ce=new Ft;let he=null;const Re=new Ft(0,0,0,0);return{setMask:function(ue){he!==ue&&!N&&(t.colorMask(ue,ue,ue,ue),he=ue)},setLocked:function(ue){N=ue},setClear:function(ue,re,Se,Ke,Mt){Mt===!0&&(ue*=Ke,re*=Ke,Se*=Ke),Ce.set(ue,re,Se,Ke),Re.equals(Ce)===!1&&(t.clearColor(ue,re,Se,Ke),Re.copy(Ce))},reset:function(){N=!1,he=null,Re.set(-1,0,0,0)}}}function i(){let N=!1,Ce=!1,he=null,Re=null,ue=null;return{setReversed:function(re){if(Ce!==re){const Se=e.get("EXT_clip_control");re?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),Ce=re;const Ke=ue;ue=null,this.setClear(Ke)}},getReversed:function(){return Ce},setTest:function(re){re?U(t.DEPTH_TEST):Q(t.DEPTH_TEST)},setMask:function(re){he!==re&&!N&&(t.depthMask(re),he=re)},setFunc:function(re){if(Ce&&(re=ZS[re]),Re!==re){switch(re){case Bu:t.depthFunc(t.NEVER);break;case ku:t.depthFunc(t.ALWAYS);break;case qu:t.depthFunc(t.LESS);break;case vs:t.depthFunc(t.LEQUAL);break;case zu:t.depthFunc(t.EQUAL);break;case Vu:t.depthFunc(t.GEQUAL);break;case Gu:t.depthFunc(t.GREATER);break;case Hu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Re=re}},setLocked:function(re){N=re},setClear:function(re){ue!==re&&(Ce&&(re=1-re),t.clearDepth(re),ue=re)},reset:function(){N=!1,he=null,Re=null,ue=null,Ce=!1}}}function r(){let N=!1,Ce=null,he=null,Re=null,ue=null,re=null,Se=null,Ke=null,Mt=null;return{setTest:function(mt){N||(mt?U(t.STENCIL_TEST):Q(t.STENCIL_TEST))},setMask:function(mt){Ce!==mt&&!N&&(t.stencilMask(mt),Ce=mt)},setFunc:function(mt,ri,Ei){(he!==mt||Re!==ri||ue!==Ei)&&(t.stencilFunc(mt,ri,Ei),he=mt,Re=ri,ue=Ei)},setOp:function(mt,ri,Ei){(re!==mt||Se!==ri||Ke!==Ei)&&(t.stencilOp(mt,ri,Ei),re=mt,Se=ri,Ke=Ei)},setLocked:function(mt){N=mt},setClear:function(mt){Mt!==mt&&(t.clearStencil(mt),Mt=mt)},reset:function(){N=!1,Ce=null,he=null,Re=null,ue=null,re=null,Se=null,Ke=null,Mt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f=new WeakMap,m=[],v=null,_=!1,g=null,h=null,M=null,T=null,A=null,R=null,C=null,w=new rt(0,0,0),B=0,x=!1,y=null,D=null,J=null,G=null,$=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const ie=t.getParameter(t.VERSION);ie.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ie)[1]),K=j>=1):ie.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),K=j>=2);let ye=null,me={};const Ae=t.getParameter(t.SCISSOR_BOX),V=t.getParameter(t.VIEWPORT),O=new Ft().fromArray(Ae),H=new Ft().fromArray(V);function ae(N,Ce,he,Re){const ue=new Uint8Array(4),re=t.createTexture();t.bindTexture(N,re),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<he;Se++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(Ce,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(Ce+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return re}const I={};I[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),I[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),I[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),U(t.DEPTH_TEST),a.setFunc(vs),de(!1),Oe(Vf),U(t.CULL_FACE),fe(Ni);function U(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function Q(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function pe(N,Ce){return d[N]!==Ce?(t.bindFramebuffer(N,Ce),d[N]=Ce,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Ce),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Ce),!0):!1}function le(N,Ce){let he=m,Re=!1;if(N){he=f.get(Ce),he===void 0&&(he=[],f.set(Ce,he));const ue=N.textures;if(he.length!==ue.length||he[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Se=ue.length;re<Se;re++)he[re]=t.COLOR_ATTACHMENT0+re;he.length=ue.length,Re=!0}}else he[0]!==t.BACK&&(he[0]=t.BACK,Re=!0);Re&&t.drawBuffers(he)}function Pe(N){return v!==N?(t.useProgram(N),v=N,!0):!1}const Z={[yr]:t.FUNC_ADD,[r1]:t.FUNC_SUBTRACT,[s1]:t.FUNC_REVERSE_SUBTRACT};Z[a1]=t.MIN,Z[o1]=t.MAX;const oe={[l1]:t.ZERO,[u1]:t.ONE,[c1]:t.SRC_COLOR,[Uu]:t.SRC_ALPHA,[g1]:t.SRC_ALPHA_SATURATE,[p1]:t.DST_COLOR,[f1]:t.DST_ALPHA,[d1]:t.ONE_MINUS_SRC_COLOR,[Ou]:t.ONE_MINUS_SRC_ALPHA,[m1]:t.ONE_MINUS_DST_COLOR,[h1]:t.ONE_MINUS_DST_ALPHA,[v1]:t.CONSTANT_COLOR,[_1]:t.ONE_MINUS_CONSTANT_COLOR,[x1]:t.CONSTANT_ALPHA,[b1]:t.ONE_MINUS_CONSTANT_ALPHA};function fe(N,Ce,he,Re,ue,re,Se,Ke,Mt,mt){if(N===Ni){_===!0&&(Q(t.BLEND),_=!1);return}if(_===!1&&(U(t.BLEND),_=!0),N!==i1){if(N!==g||mt!==x){if((h!==yr||A!==yr)&&(t.blendEquation(t.FUNC_ADD),h=yr,A=yr),mt)switch(N){case us:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gf:t.blendFunc(t.ONE,t.ONE);break;case Hf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ct("WebGLState: Invalid blending: ",N);break}else switch(N){case us:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Hf:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jf:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",N);break}M=null,T=null,R=null,C=null,w.set(0,0,0),B=0,g=N,x=mt}return}ue=ue||Ce,re=re||he,Se=Se||Re,(Ce!==h||ue!==A)&&(t.blendEquationSeparate(Z[Ce],Z[ue]),h=Ce,A=ue),(he!==M||Re!==T||re!==R||Se!==C)&&(t.blendFuncSeparate(oe[he],oe[Re],oe[re],oe[Se]),M=he,T=Re,R=re,C=Se),(Ke.equals(w)===!1||Mt!==B)&&(t.blendColor(Ke.r,Ke.g,Ke.b,Mt),w.copy(Ke),B=Mt),g=N,x=!1}function xe(N,Ce){N.side===Li?Q(t.CULL_FACE):U(t.CULL_FACE);let he=N.side===xn;Ce&&(he=!he),de(he),N.blending===us&&N.transparent===!1?fe(Ni):fe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const Re=N.stencilWrite;o.setTest(Re),Re&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ye(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?U(t.SAMPLE_ALPHA_TO_COVERAGE):Q(t.SAMPLE_ALPHA_TO_COVERAGE)}function de(N){y!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),y=N)}function Oe(N){N!==e1?(U(t.CULL_FACE),N!==D&&(N===Vf?t.cullFace(t.BACK):N===t1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Q(t.CULL_FACE),D=N}function L(N){N!==J&&(K&&t.lineWidth(N),J=N)}function Ye(N,Ce,he){N?(U(t.POLYGON_OFFSET_FILL),(G!==Ce||$!==he)&&(t.polygonOffset(Ce,he),G=Ce,$=he)):Q(t.POLYGON_OFFSET_FILL)}function Je(N){N?U(t.SCISSOR_TEST):Q(t.SCISSOR_TEST)}function te(N){N===void 0&&(N=t.TEXTURE0+ee-1),ye!==N&&(t.activeTexture(N),ye=N)}function ne(N,Ce,he){he===void 0&&(ye===null?he=t.TEXTURE0+ee-1:he=ye);let Re=me[he];Re===void 0&&(Re={type:void 0,texture:void 0},me[he]=Re),(Re.type!==N||Re.texture!==Ce)&&(ye!==he&&(t.activeTexture(he),ye=he),t.bindTexture(N,Ce||I[N]),Re.type=N,Re.texture=Ce)}function b(){const N=me[ye];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function p(){try{t.compressedTexImage2D(...arguments)}catch(N){ct("WebGLState:",N)}}function E(){try{t.compressedTexImage3D(...arguments)}catch(N){ct("WebGLState:",N)}}function P(){try{t.texSubImage2D(...arguments)}catch(N){ct("WebGLState:",N)}}function q(){try{t.texSubImage3D(...arguments)}catch(N){ct("WebGLState:",N)}}function k(){try{t.compressedTexSubImage2D(...arguments)}catch(N){ct("WebGLState:",N)}}function Me(){try{t.compressedTexSubImage3D(...arguments)}catch(N){ct("WebGLState:",N)}}function ge(){try{t.texStorage2D(...arguments)}catch(N){ct("WebGLState:",N)}}function Ue(){try{t.texStorage3D(...arguments)}catch(N){ct("WebGLState:",N)}}function We(){try{t.texImage2D(...arguments)}catch(N){ct("WebGLState:",N)}}function se(){try{t.texImage3D(...arguments)}catch(N){ct("WebGLState:",N)}}function be(N){O.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),O.copy(N))}function Ne(N){H.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),H.copy(N))}function ve(N,Ce){let he=u.get(Ce);he===void 0&&(he=new WeakMap,u.set(Ce,he));let Re=he.get(N);Re===void 0&&(Re=t.getUniformBlockIndex(Ce,N.name),he.set(N,Re))}function _e(N,Ce){const Re=u.get(Ce).get(N);l.get(Ce)!==Re&&(t.uniformBlockBinding(Ce,Re,N.__bindingPointIndex),l.set(Ce,Re))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},ye=null,me={},d={},f=new WeakMap,m=[],v=null,_=!1,g=null,h=null,M=null,T=null,A=null,R=null,C=null,w=new rt(0,0,0),B=0,x=!1,y=null,D=null,J=null,G=null,$=null,O.set(0,0,t.canvas.width,t.canvas.height),H.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:U,disable:Q,bindFramebuffer:pe,drawBuffers:le,useProgram:Pe,setBlending:fe,setMaterial:xe,setFlipSided:de,setCullFace:Oe,setLineWidth:L,setPolygonOffset:Ye,setScissorTest:Je,activeTexture:te,bindTexture:ne,unbindTexture:b,compressedTexImage2D:p,compressedTexImage3D:E,texImage2D:We,texImage3D:se,updateUBOMapping:ve,uniformBlockBinding:_e,texStorage2D:ge,texStorage3D:Ue,texSubImage2D:P,texSubImage3D:q,compressedTexSubImage2D:k,compressedTexSubImage3D:Me,scissor:be,viewport:Ne,reset:nt}}function ey(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new pt,c=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,p){return m?new OffscreenCanvas(b,p):Io("canvas")}function _(b,p,E){let P=1;const q=ne(b);if((q.width>E||q.height>E)&&(P=E/Math.max(q.width,q.height)),P<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const k=Math.floor(P*q.width),Me=Math.floor(P*q.height);d===void 0&&(d=v(k,Me));const ge=p?v(k,Me):d;return ge.width=k,ge.height=Me,ge.getContext("2d").drawImage(b,0,0,k,Me),Ze("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+k+"x"+Me+")."),ge}else return"data"in b&&Ze("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),b;return b}function g(b){return b.generateMipmaps}function h(b){t.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(b,p,E,P,q=!1){if(b!==null){if(t[b]!==void 0)return t[b];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let k=p;if(p===t.RED&&(E===t.FLOAT&&(k=t.R32F),E===t.HALF_FLOAT&&(k=t.R16F),E===t.UNSIGNED_BYTE&&(k=t.R8)),p===t.RED_INTEGER&&(E===t.UNSIGNED_BYTE&&(k=t.R8UI),E===t.UNSIGNED_SHORT&&(k=t.R16UI),E===t.UNSIGNED_INT&&(k=t.R32UI),E===t.BYTE&&(k=t.R8I),E===t.SHORT&&(k=t.R16I),E===t.INT&&(k=t.R32I)),p===t.RG&&(E===t.FLOAT&&(k=t.RG32F),E===t.HALF_FLOAT&&(k=t.RG16F),E===t.UNSIGNED_BYTE&&(k=t.RG8)),p===t.RG_INTEGER&&(E===t.UNSIGNED_BYTE&&(k=t.RG8UI),E===t.UNSIGNED_SHORT&&(k=t.RG16UI),E===t.UNSIGNED_INT&&(k=t.RG32UI),E===t.BYTE&&(k=t.RG8I),E===t.SHORT&&(k=t.RG16I),E===t.INT&&(k=t.RG32I)),p===t.RGB_INTEGER&&(E===t.UNSIGNED_BYTE&&(k=t.RGB8UI),E===t.UNSIGNED_SHORT&&(k=t.RGB16UI),E===t.UNSIGNED_INT&&(k=t.RGB32UI),E===t.BYTE&&(k=t.RGB8I),E===t.SHORT&&(k=t.RGB16I),E===t.INT&&(k=t.RGB32I)),p===t.RGBA_INTEGER&&(E===t.UNSIGNED_BYTE&&(k=t.RGBA8UI),E===t.UNSIGNED_SHORT&&(k=t.RGBA16UI),E===t.UNSIGNED_INT&&(k=t.RGBA32UI),E===t.BYTE&&(k=t.RGBA8I),E===t.SHORT&&(k=t.RGBA16I),E===t.INT&&(k=t.RGBA32I)),p===t.RGB&&(E===t.UNSIGNED_INT_5_9_9_9_REV&&(k=t.RGB9_E5),E===t.UNSIGNED_INT_10F_11F_11F_REV&&(k=t.R11F_G11F_B10F)),p===t.RGBA){const Me=q?Do:ot.getTransfer(P);E===t.FLOAT&&(k=t.RGBA32F),E===t.HALF_FLOAT&&(k=t.RGBA16F),E===t.UNSIGNED_BYTE&&(k=Me===vt?t.SRGB8_ALPHA8:t.RGBA8),E===t.UNSIGNED_SHORT_4_4_4_4&&(k=t.RGBA4),E===t.UNSIGNED_SHORT_5_5_5_1&&(k=t.RGB5_A1)}return(k===t.R16F||k===t.R32F||k===t.RG16F||k===t.RG32F||k===t.RGBA16F||k===t.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function A(b,p){let E;return b?p===null||p===gi||p===_a?E=t.DEPTH24_STENCIL8:p===ui?E=t.DEPTH32F_STENCIL8:p===va&&(E=t.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===gi||p===_a?E=t.DEPTH_COMPONENT24:p===ui?E=t.DEPTH_COMPONENT32F:p===va&&(E=t.DEPTH_COMPONENT16),E}function R(b,p){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Qt&&b.minFilter!==sn?Math.log2(Math.max(p.width,p.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?p.mipmaps.length:1}function C(b){const p=b.target;p.removeEventListener("dispose",C),B(p),p.isVideoTexture&&c.delete(p)}function w(b){const p=b.target;p.removeEventListener("dispose",w),y(p)}function B(b){const p=i.get(b);if(p.__webglInit===void 0)return;const E=b.source,P=f.get(E);if(P){const q=P[p.__cacheKey];q.usedTimes--,q.usedTimes===0&&x(b),Object.keys(P).length===0&&f.delete(E)}i.remove(b)}function x(b){const p=i.get(b);t.deleteTexture(p.__webglTexture);const E=b.source,P=f.get(E);delete P[p.__cacheKey],a.memory.textures--}function y(b){const p=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(p.__webglFramebuffer[P]))for(let q=0;q<p.__webglFramebuffer[P].length;q++)t.deleteFramebuffer(p.__webglFramebuffer[P][q]);else t.deleteFramebuffer(p.__webglFramebuffer[P]);p.__webglDepthbuffer&&t.deleteRenderbuffer(p.__webglDepthbuffer[P])}else{if(Array.isArray(p.__webglFramebuffer))for(let P=0;P<p.__webglFramebuffer.length;P++)t.deleteFramebuffer(p.__webglFramebuffer[P]);else t.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&t.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&t.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let P=0;P<p.__webglColorRenderbuffer.length;P++)p.__webglColorRenderbuffer[P]&&t.deleteRenderbuffer(p.__webglColorRenderbuffer[P]);p.__webglDepthRenderbuffer&&t.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const E=b.textures;for(let P=0,q=E.length;P<q;P++){const k=i.get(E[P]);k.__webglTexture&&(t.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(E[P])}i.remove(b)}let D=0;function J(){D=0}function G(){const b=D;return b>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),D+=1,b}function $(b){const p=[];return p.push(b.wrapS),p.push(b.wrapT),p.push(b.wrapR||0),p.push(b.magFilter),p.push(b.minFilter),p.push(b.anisotropy),p.push(b.internalFormat),p.push(b.format),p.push(b.type),p.push(b.generateMipmaps),p.push(b.premultiplyAlpha),p.push(b.flipY),p.push(b.unpackAlignment),p.push(b.colorSpace),p.join()}function ee(b,p){const E=i.get(b);if(b.isVideoTexture&&Je(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&E.__version!==b.version){const P=b.image;if(P===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{I(E,b,p);return}}else b.isExternalTexture&&(E.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,E.__webglTexture,t.TEXTURE0+p)}function K(b,p){const E=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&E.__version!==b.version){I(E,b,p);return}else b.isExternalTexture&&(E.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,E.__webglTexture,t.TEXTURE0+p)}function j(b,p){const E=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&E.__version!==b.version){I(E,b,p);return}n.bindTexture(t.TEXTURE_3D,E.__webglTexture,t.TEXTURE0+p)}function ie(b,p){const E=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&E.__version!==b.version){U(E,b,p);return}n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+p)}const ye={[Wu]:t.REPEAT,[Di]:t.CLAMP_TO_EDGE,[Xu]:t.MIRRORED_REPEAT},me={[Qt]:t.NEAREST,[M1]:t.NEAREST_MIPMAP_NEAREST,[Ga]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[Il]:t.LINEAR_MIPMAP_NEAREST,[Er]:t.LINEAR_MIPMAP_LINEAR},Ae={[w1]:t.NEVER,[D1]:t.ALWAYS,[C1]:t.LESS,[pd]:t.LEQUAL,[R1]:t.EQUAL,[md]:t.GEQUAL,[L1]:t.GREATER,[P1]:t.NOTEQUAL};function V(b,p){if(p.type===ui&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===sn||p.magFilter===Il||p.magFilter===Ga||p.magFilter===Er||p.minFilter===sn||p.minFilter===Il||p.minFilter===Ga||p.minFilter===Er)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,ye[p.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,ye[p.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,ye[p.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,me[p.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,me[p.minFilter]),p.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Ae[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Qt||p.minFilter!==Ga&&p.minFilter!==Er||p.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||i.get(p).__currentAnisotropy){const E=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,E.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,r.getMaxAnisotropy())),i.get(p).__currentAnisotropy=p.anisotropy}}}function O(b,p){let E=!1;b.__webglInit===void 0&&(b.__webglInit=!0,p.addEventListener("dispose",C));const P=p.source;let q=f.get(P);q===void 0&&(q={},f.set(P,q));const k=$(p);if(k!==b.__cacheKey){q[k]===void 0&&(q[k]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,E=!0),q[k].usedTimes++;const Me=q[b.__cacheKey];Me!==void 0&&(q[b.__cacheKey].usedTimes--,Me.usedTimes===0&&x(p)),b.__cacheKey=k,b.__webglTexture=q[k].texture}return E}function H(b,p,E){return Math.floor(Math.floor(b/E)/p)}function ae(b,p,E,P){const k=b.updateRanges;if(k.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,p.width,p.height,E,P,p.data);else{k.sort((se,be)=>se.start-be.start);let Me=0;for(let se=1;se<k.length;se++){const be=k[Me],Ne=k[se],ve=be.start+be.count,_e=H(Ne.start,p.width,4),nt=H(be.start,p.width,4);Ne.start<=ve+1&&_e===nt&&H(Ne.start+Ne.count-1,p.width,4)===_e?be.count=Math.max(be.count,Ne.start+Ne.count-be.start):(++Me,k[Me]=Ne)}k.length=Me+1;const ge=t.getParameter(t.UNPACK_ROW_LENGTH),Ue=t.getParameter(t.UNPACK_SKIP_PIXELS),We=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,p.width);for(let se=0,be=k.length;se<be;se++){const Ne=k[se],ve=Math.floor(Ne.start/4),_e=Math.ceil(Ne.count/4),nt=ve%p.width,N=Math.floor(ve/p.width),Ce=_e,he=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,nt,N,Ce,he,E,P,p.data)}b.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ge),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(t.UNPACK_SKIP_ROWS,We)}}function I(b,p,E){let P=t.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(P=t.TEXTURE_2D_ARRAY),p.isData3DTexture&&(P=t.TEXTURE_3D);const q=O(b,p),k=p.source;n.bindTexture(P,b.__webglTexture,t.TEXTURE0+E);const Me=i.get(k);if(k.version!==Me.__version||q===!0){n.activeTexture(t.TEXTURE0+E);const ge=ot.getPrimaries(ot.workingColorSpace),Ue=p.colorSpace===tr?null:ot.getPrimaries(p.colorSpace),We=p.colorSpace===tr||ge===Ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let se=_(p.image,!1,r.maxTextureSize);se=te(p,se);const be=s.convert(p.format,p.colorSpace),Ne=s.convert(p.type);let ve=T(p.internalFormat,be,Ne,p.colorSpace,p.isVideoTexture);V(P,p);let _e;const nt=p.mipmaps,N=p.isVideoTexture!==!0,Ce=Me.__version===void 0||q===!0,he=k.dataReady,Re=R(p,se);if(p.isDepthTexture)ve=A(p.format===Tr,p.type),Ce&&(N?n.texStorage2D(t.TEXTURE_2D,1,ve,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,ve,se.width,se.height,0,be,Ne,null));else if(p.isDataTexture)if(nt.length>0){N&&Ce&&n.texStorage2D(t.TEXTURE_2D,Re,ve,nt[0].width,nt[0].height);for(let ue=0,re=nt.length;ue<re;ue++)_e=nt[ue],N?he&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,_e.width,_e.height,be,Ne,_e.data):n.texImage2D(t.TEXTURE_2D,ue,ve,_e.width,_e.height,0,be,Ne,_e.data);p.generateMipmaps=!1}else N?(Ce&&n.texStorage2D(t.TEXTURE_2D,Re,ve,se.width,se.height),he&&ae(p,se,be,Ne)):n.texImage2D(t.TEXTURE_2D,0,ve,se.width,se.height,0,be,Ne,se.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){N&&Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,ve,nt[0].width,nt[0].height,se.depth);for(let ue=0,re=nt.length;ue<re;ue++)if(_e=nt[ue],p.format!==Zn)if(be!==null)if(N){if(he)if(p.layerUpdates.size>0){const Se=hh(_e.width,_e.height,p.format,p.type);for(const Ke of p.layerUpdates){const Mt=_e.data.subarray(Ke*Se/_e.data.BYTES_PER_ELEMENT,(Ke+1)*Se/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,Ke,_e.width,_e.height,1,be,Mt)}p.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,_e.width,_e.height,se.depth,be,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,ve,_e.width,_e.height,se.depth,0,_e.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?he&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,_e.width,_e.height,se.depth,be,Ne,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,ve,_e.width,_e.height,se.depth,0,be,Ne,_e.data)}else{N&&Ce&&n.texStorage2D(t.TEXTURE_2D,Re,ve,nt[0].width,nt[0].height);for(let ue=0,re=nt.length;ue<re;ue++)_e=nt[ue],p.format!==Zn?be!==null?N?he&&n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,_e.width,_e.height,be,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,ve,_e.width,_e.height,0,_e.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?he&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,_e.width,_e.height,be,Ne,_e.data):n.texImage2D(t.TEXTURE_2D,ue,ve,_e.width,_e.height,0,be,Ne,_e.data)}else if(p.isDataArrayTexture)if(N){if(Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,ve,se.width,se.height,se.depth),he)if(p.layerUpdates.size>0){const ue=hh(se.width,se.height,p.format,p.type);for(const re of p.layerUpdates){const Se=se.data.subarray(re*ue/se.data.BYTES_PER_ELEMENT,(re+1)*ue/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,re,se.width,se.height,1,be,Ne,Se)}p.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,be,Ne,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,se.width,se.height,se.depth,0,be,Ne,se.data);else if(p.isData3DTexture)N?(Ce&&n.texStorage3D(t.TEXTURE_3D,Re,ve,se.width,se.height,se.depth),he&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,be,Ne,se.data)):n.texImage3D(t.TEXTURE_3D,0,ve,se.width,se.height,se.depth,0,be,Ne,se.data);else if(p.isFramebufferTexture){if(Ce)if(N)n.texStorage2D(t.TEXTURE_2D,Re,ve,se.width,se.height);else{let ue=se.width,re=se.height;for(let Se=0;Se<Re;Se++)n.texImage2D(t.TEXTURE_2D,Se,ve,ue,re,0,be,Ne,null),ue>>=1,re>>=1}}else if(nt.length>0){if(N&&Ce){const ue=ne(nt[0]);n.texStorage2D(t.TEXTURE_2D,Re,ve,ue.width,ue.height)}for(let ue=0,re=nt.length;ue<re;ue++)_e=nt[ue],N?he&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,be,Ne,_e):n.texImage2D(t.TEXTURE_2D,ue,ve,be,Ne,_e);p.generateMipmaps=!1}else if(N){if(Ce){const ue=ne(se);n.texStorage2D(t.TEXTURE_2D,Re,ve,ue.width,ue.height)}he&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,be,Ne,se)}else n.texImage2D(t.TEXTURE_2D,0,ve,be,Ne,se);g(p)&&h(P),Me.__version=k.version,p.onUpdate&&p.onUpdate(p)}b.__version=p.version}function U(b,p,E){if(p.image.length!==6)return;const P=O(b,p),q=p.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+E);const k=i.get(q);if(q.version!==k.__version||P===!0){n.activeTexture(t.TEXTURE0+E);const Me=ot.getPrimaries(ot.workingColorSpace),ge=p.colorSpace===tr?null:ot.getPrimaries(p.colorSpace),Ue=p.colorSpace===tr||Me===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const We=p.isCompressedTexture||p.image[0].isCompressedTexture,se=p.image[0]&&p.image[0].isDataTexture,be=[];for(let re=0;re<6;re++)!We&&!se?be[re]=_(p.image[re],!0,r.maxCubemapSize):be[re]=se?p.image[re].image:p.image[re],be[re]=te(p,be[re]);const Ne=be[0],ve=s.convert(p.format,p.colorSpace),_e=s.convert(p.type),nt=T(p.internalFormat,ve,_e,p.colorSpace),N=p.isVideoTexture!==!0,Ce=k.__version===void 0||P===!0,he=q.dataReady;let Re=R(p,Ne);V(t.TEXTURE_CUBE_MAP,p);let ue;if(We){N&&Ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,nt,Ne.width,Ne.height);for(let re=0;re<6;re++){ue=be[re].mipmaps;for(let Se=0;Se<ue.length;Se++){const Ke=ue[Se];p.format!==Zn?ve!==null?N?he&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se,0,0,Ke.width,Ke.height,ve,Ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se,nt,Ke.width,Ke.height,0,Ke.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se,0,0,Ke.width,Ke.height,ve,_e,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se,nt,Ke.width,Ke.height,0,ve,_e,Ke.data)}}}else{if(ue=p.mipmaps,N&&Ce){ue.length>0&&Re++;const re=ne(be[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,nt,re.width,re.height)}for(let re=0;re<6;re++)if(se){N?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,be[re].width,be[re].height,ve,_e,be[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,nt,be[re].width,be[re].height,0,ve,_e,be[re].data);for(let Se=0;Se<ue.length;Se++){const Mt=ue[Se].image[re].image;N?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se+1,0,0,Mt.width,Mt.height,ve,_e,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se+1,nt,Mt.width,Mt.height,0,ve,_e,Mt.data)}}else{N?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ve,_e,be[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,nt,ve,_e,be[re]);for(let Se=0;Se<ue.length;Se++){const Ke=ue[Se];N?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se+1,0,0,ve,_e,Ke.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se+1,nt,ve,_e,Ke.image[re])}}}g(p)&&h(t.TEXTURE_CUBE_MAP),k.__version=q.version,p.onUpdate&&p.onUpdate(p)}b.__version=p.version}function Q(b,p,E,P,q,k){const Me=s.convert(E.format,E.colorSpace),ge=s.convert(E.type),Ue=T(E.internalFormat,Me,ge,E.colorSpace),We=i.get(p),se=i.get(E);if(se.__renderTarget=p,!We.__hasExternalTextures){const be=Math.max(1,p.width>>k),Ne=Math.max(1,p.height>>k);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?n.texImage3D(q,k,Ue,be,Ne,p.depth,0,Me,ge,null):n.texImage2D(q,k,Ue,be,Ne,0,Me,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Ye(p)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,P,q,se.__webglTexture,0,L(p)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,P,q,se.__webglTexture,k),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(b,p,E){if(t.bindRenderbuffer(t.RENDERBUFFER,b),p.depthBuffer){const P=p.depthTexture,q=P&&P.isDepthTexture?P.type:null,k=A(p.stencilBuffer,q),Me=p.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ye(p)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(p),k,p.width,p.height):E?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(p),k,p.width,p.height):t.renderbufferStorage(t.RENDERBUFFER,k,p.width,p.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,b)}else{const P=p.textures;for(let q=0;q<P.length;q++){const k=P[q],Me=s.convert(k.format,k.colorSpace),ge=s.convert(k.type),Ue=T(k.internalFormat,Me,ge,k.colorSpace);Ye(p)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(p),Ue,p.width,p.height):E?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(p),Ue,p.width,p.height):t.renderbufferStorage(t.RENDERBUFFER,Ue,p.width,p.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(b,p,E){const P=p.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(p.depthTexture);if(q.__renderTarget=p,(!q.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),P){if(q.__webglInit===void 0&&(q.__webglInit=!0,p.depthTexture.addEventListener("dispose",C)),q.__webglTexture===void 0){q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),V(t.TEXTURE_CUBE_MAP,p.depthTexture);const We=s.convert(p.depthTexture.format),se=s.convert(p.depthTexture.type);let be;p.depthTexture.format===Bi?be=t.DEPTH_COMPONENT24:p.depthTexture.format===Tr&&(be=t.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,be,p.width,p.height,0,We,se,null)}}else ee(p.depthTexture,0);const k=q.__webglTexture,Me=L(p),ge=P?t.TEXTURE_CUBE_MAP_POSITIVE_X+E:t.TEXTURE_2D,Ue=p.depthTexture.format===Tr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(p.depthTexture.format===Bi)Ye(p)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ue,ge,k,0,Me):t.framebufferTexture2D(t.FRAMEBUFFER,Ue,ge,k,0);else if(p.depthTexture.format===Tr)Ye(p)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ue,ge,k,0,Me):t.framebufferTexture2D(t.FRAMEBUFFER,Ue,ge,k,0);else throw new Error("Unknown depthTexture format")}function Pe(b){const p=i.get(b),E=b.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==b.depthTexture){const P=b.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),P){const q=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,P.removeEventListener("dispose",q)};P.addEventListener("dispose",q),p.__depthDisposeCallback=q}p.__boundDepthTexture=P}if(b.depthTexture&&!p.__autoAllocateDepthBuffer)if(E)for(let P=0;P<6;P++)le(p.__webglFramebuffer[P],b,P);else{const P=b.texture.mipmaps;P&&P.length>0?le(p.__webglFramebuffer[0],b,0):le(p.__webglFramebuffer,b,0)}else if(E){p.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(n.bindFramebuffer(t.FRAMEBUFFER,p.__webglFramebuffer[P]),p.__webglDepthbuffer[P]===void 0)p.__webglDepthbuffer[P]=t.createRenderbuffer(),pe(p.__webglDepthbuffer[P],b,!1);else{const q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,k=p.__webglDepthbuffer[P];t.bindRenderbuffer(t.RENDERBUFFER,k),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,k)}}else{const P=b.texture.mipmaps;if(P&&P.length>0?n.bindFramebuffer(t.FRAMEBUFFER,p.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=t.createRenderbuffer(),pe(p.__webglDepthbuffer,b,!1);else{const q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,k=p.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,k),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,k)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Z(b,p,E){const P=i.get(b);p!==void 0&&Q(P.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),E!==void 0&&Pe(b)}function oe(b){const p=b.texture,E=i.get(b),P=i.get(p);b.addEventListener("dispose",w);const q=b.textures,k=b.isWebGLCubeRenderTarget===!0,Me=q.length>1;if(Me||(P.__webglTexture===void 0&&(P.__webglTexture=t.createTexture()),P.__version=p.version,a.memory.textures++),k){E.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(p.mipmaps&&p.mipmaps.length>0){E.__webglFramebuffer[ge]=[];for(let Ue=0;Ue<p.mipmaps.length;Ue++)E.__webglFramebuffer[ge][Ue]=t.createFramebuffer()}else E.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){E.__webglFramebuffer=[];for(let ge=0;ge<p.mipmaps.length;ge++)E.__webglFramebuffer[ge]=t.createFramebuffer()}else E.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ge=0,Ue=q.length;ge<Ue;ge++){const We=i.get(q[ge]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&Ye(b)===!1){E.__webglMultisampledFramebuffer=t.createFramebuffer(),E.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,E.__webglMultisampledFramebuffer);for(let ge=0;ge<q.length;ge++){const Ue=q[ge];E.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,E.__webglColorRenderbuffer[ge]);const We=s.convert(Ue.format,Ue.colorSpace),se=s.convert(Ue.type),be=T(Ue.internalFormat,We,se,Ue.colorSpace,b.isXRRenderTarget===!0),Ne=L(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,be,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,E.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(E.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(E.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(k){n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture),V(t.TEXTURE_CUBE_MAP,p);for(let ge=0;ge<6;ge++)if(p.mipmaps&&p.mipmaps.length>0)for(let Ue=0;Ue<p.mipmaps.length;Ue++)Q(E.__webglFramebuffer[ge][Ue],b,p,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue);else Q(E.__webglFramebuffer[ge],b,p,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(p)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ge=0,Ue=q.length;ge<Ue;ge++){const We=q[ge],se=i.get(We);let be=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(be=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(be,se.__webglTexture),V(be,We),Q(E.__webglFramebuffer,b,We,t.COLOR_ATTACHMENT0+ge,be,0),g(We)&&h(be)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ge=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,P.__webglTexture),V(ge,p),p.mipmaps&&p.mipmaps.length>0)for(let Ue=0;Ue<p.mipmaps.length;Ue++)Q(E.__webglFramebuffer[Ue],b,p,t.COLOR_ATTACHMENT0,ge,Ue);else Q(E.__webglFramebuffer,b,p,t.COLOR_ATTACHMENT0,ge,0);g(p)&&h(ge),n.unbindTexture()}b.depthBuffer&&Pe(b)}function fe(b){const p=b.textures;for(let E=0,P=p.length;E<P;E++){const q=p[E];if(g(q)){const k=M(b),Me=i.get(q).__webglTexture;n.bindTexture(k,Me),h(k),n.unbindTexture()}}}const xe=[],de=[];function Oe(b){if(b.samples>0){if(Ye(b)===!1){const p=b.textures,E=b.width,P=b.height;let q=t.COLOR_BUFFER_BIT;const k=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(b),ge=p.length>1;if(ge)for(let We=0;We<p.length;We++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Ue=b.texture.mipmaps;Ue&&Ue.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let We=0;We<p.length;We++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),ge){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[We]);const se=i.get(p[We]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,E,P,0,0,E,P,q,t.NEAREST),l===!0&&(xe.length=0,de.length=0,xe.push(t.COLOR_ATTACHMENT0+We),b.depthBuffer&&b.resolveDepthBuffer===!1&&(xe.push(k),de.push(k),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,de)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,xe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let We=0;We<p.length;We++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,Me.__webglColorRenderbuffer[We]);const se=i.get(p[We]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const p=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[p])}}}function L(b){return Math.min(r.maxSamples,b.samples)}function Ye(b){const p=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function Je(b){const p=a.render.frame;c.get(b)!==p&&(c.set(b,p),b.update())}function te(b,p){const E=b.colorSpace,P=b.format,q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||E!==bs&&E!==tr&&(ot.getTransfer(E)===vt?(P!==Zn||q!==Gn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",E)),p}function ne(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=G,this.resetTextureUnits=J,this.setTexture2D=ee,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=ie,this.rebindTextures=Z,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ty(t,e){function n(i,r=tr){let s;const a=ot.getTransfer(r);if(i===Gn)return t.UNSIGNED_BYTE;if(i===ud)return t.UNSIGNED_SHORT_4_4_4_4;if(i===cd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===eg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===tg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zm)return t.BYTE;if(i===Qm)return t.SHORT;if(i===va)return t.UNSIGNED_SHORT;if(i===ld)return t.INT;if(i===gi)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===Oi)return t.HALF_FLOAT;if(i===ng)return t.ALPHA;if(i===ig)return t.RGB;if(i===Zn)return t.RGBA;if(i===Bi)return t.DEPTH_COMPONENT;if(i===Tr)return t.DEPTH_STENCIL;if(i===rg)return t.RED;if(i===dd)return t.RED_INTEGER;if(i===xs)return t.RG;if(i===fd)return t.RG_INTEGER;if(i===hd)return t.RGBA_INTEGER;if(i===bo||i===So||i===yo||i===Mo)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yu||i===Ju||i===Ku||i===Zu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ju)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ku)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qu||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qu||i===ec)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===tc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===nc)return s.COMPRESSED_R11_EAC;if(i===ic)return s.COMPRESSED_SIGNED_R11_EAC;if(i===rc)return s.COMPRESSED_RG11_EAC;if(i===sc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ac||i===oc||i===lc||i===uc||i===cc||i===dc||i===fc||i===hc||i===pc||i===mc||i===gc||i===vc||i===_c||i===xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ac)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_c)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bc||i===Sc||i===yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bc)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mc||i===Ec||i===Tc||i===Ac)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ec)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_a?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iy=`
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

}`;class ry{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new gg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ei({vertexShader:ny,fragmentShader:iy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vi(new Ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sy extends Ns{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,d=null,f=null,m=null,v=null;const _=typeof XRWebGLBinding<"u",g=new ry,h={},M=n.getContextAttributes();let T=null,A=null;const R=[],C=[],w=new pt;let B=null;const x=new Jn;x.viewport=new Ft;const y=new Jn;y.viewport=new Ft;const D=[x,y],J=new mx;let G=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let U=R[I];return U===void 0&&(U=new iu,R[I]=U),U.getTargetRaySpace()},this.getControllerGrip=function(I){let U=R[I];return U===void 0&&(U=new iu,R[I]=U),U.getGripSpace()},this.getHand=function(I){let U=R[I];return U===void 0&&(U=new iu,R[I]=U),U.getHandSpace()};function ee(I){const U=C.indexOf(I.inputSource);if(U===-1)return;const Q=R[U];Q!==void 0&&(Q.update(I.inputSource,I.frame,u||a),Q.dispatchEvent({type:I.type,data:I.inputSource}))}function K(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",j);for(let I=0;I<R.length;I++){const U=C[I];U!==null&&(C[I]=null,R[I].disconnect(U))}G=null,$=null,g.reset();for(const I in h)delete h[I];e.setRenderTarget(T),m=null,f=null,d=null,r=null,A=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(I){u=I},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",K),r.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,pe=null,le=null;M.depth&&(le=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=M.stencil?Tr:Bi,pe=M.stencil?_a:gi);const Pe={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new hi(f.textureWidth,f.textureHeight,{format:Zn,type:Gn,depthTexture:new ba(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Q={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new hi(m.framebufferWidth,m.framebufferHeight,{format:Zn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(I){for(let U=0;U<I.removed.length;U++){const Q=I.removed[U],pe=C.indexOf(Q);pe>=0&&(C[pe]=null,R[pe].disconnect(Q))}for(let U=0;U<I.added.length;U++){const Q=I.added[U];let pe=C.indexOf(Q);if(pe===-1){for(let Pe=0;Pe<R.length;Pe++)if(Pe>=C.length){C.push(Q),pe=Pe;break}else if(C[Pe]===null){C[Pe]=Q,pe=Pe;break}if(pe===-1)break}const le=R[pe];le&&le.connect(Q)}}const ie=new X,ye=new X;function me(I,U,Q){ie.setFromMatrixPosition(U.matrixWorld),ye.setFromMatrixPosition(Q.matrixWorld);const pe=ie.distanceTo(ye),le=U.projectionMatrix.elements,Pe=Q.projectionMatrix.elements,Z=le[14]/(le[10]-1),oe=le[14]/(le[10]+1),fe=(le[9]+1)/le[5],xe=(le[9]-1)/le[5],de=(le[8]-1)/le[0],Oe=(Pe[8]+1)/Pe[0],L=Z*de,Ye=Z*Oe,Je=pe/(-de+Oe),te=Je*-de;if(U.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(te),I.translateZ(Je),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),le[10]===-1)I.projectionMatrix.copy(U.projectionMatrix),I.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const ne=Z+Je,b=oe+Je,p=L-te,E=Ye+(pe-te),P=fe*oe/b*ne,q=xe*oe/b*ne;I.projectionMatrix.makePerspective(p,E,P,q,ne,b),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function Ae(I,U){U===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(U.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;let U=I.near,Q=I.far;g.texture!==null&&(g.depthNear>0&&(U=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),J.near=y.near=x.near=U,J.far=y.far=x.far=Q,(G!==J.near||$!==J.far)&&(r.updateRenderState({depthNear:J.near,depthFar:J.far}),G=J.near,$=J.far),J.layers.mask=I.layers.mask|6,x.layers.mask=J.layers.mask&3,y.layers.mask=J.layers.mask&5;const pe=I.parent,le=J.cameras;Ae(J,pe);for(let Pe=0;Pe<le.length;Pe++)Ae(le[Pe],pe);le.length===2?me(J,x,y):J.projectionMatrix.copy(x.projectionMatrix),V(I,J,pe)};function V(I,U,Q){Q===null?I.matrix.copy(U.matrixWorld):(I.matrix.copy(Q.matrixWorld),I.matrix.invert(),I.matrix.multiply(U.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(U.projectionMatrix),I.projectionMatrixInverse.copy(U.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=wc*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=I)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(J)},this.getCameraTexture=function(I){return h[I]};let O=null;function H(I,U){if(c=U.getViewerPose(u||a),v=U,c!==null){const Q=c.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let pe=!1;Q.length!==J.cameras.length&&(J.cameras.length=0,pe=!0);for(let oe=0;oe<Q.length;oe++){const fe=Q[oe];let xe=null;if(m!==null)xe=m.getViewport(fe);else{const Oe=d.getViewSubImage(f,fe);xe=Oe.viewport,oe===0&&(e.setRenderTargetTextures(A,Oe.colorTexture,Oe.depthStencilTexture),e.setRenderTarget(A))}let de=D[oe];de===void 0&&(de=new Jn,de.layers.enable(oe),de.viewport=new Ft,D[oe]=de),de.matrix.fromArray(fe.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(fe.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(xe.x,xe.y,xe.width,xe.height),oe===0&&(J.matrix.copy(de.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),pe===!0&&J.cameras.push(de)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const oe=d.getDepthInformation(Q[0]);oe&&oe.isValid&&oe.texture&&g.init(oe,r.renderState)}if(le&&le.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let oe=0;oe<Q.length;oe++){const fe=Q[oe].camera;if(fe){let xe=h[fe];xe||(xe=new gg,h[fe]=xe);const de=d.getCameraImage(fe);xe.sourceTexture=de}}}}for(let Q=0;Q<R.length;Q++){const pe=C[Q],le=R[Q];pe!==null&&le!==void 0&&le.update(pe,U,u||a)}O&&O(I,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),v=null}const ae=new _g;ae.setAnimationLoop(H),this.setAnimationLoop=function(I){O=I},this.dispose=function(){}}}const vr=new ki,ay=new zt;function oy(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,fg(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,M,T,A){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),c(g,h)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&m(g,h,A)):h.isMeshMatcapMaterial?(s(g,h),v(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),_(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,M,T):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===xn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===xn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const M=e.get(h),T=M.envMap,A=M.envMapRotation;T&&(g.envMap.value=T,vr.copy(A),vr.x*=-1,vr.y*=-1,vr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),g.envMapRotation.value.setFromMatrix4(ay.makeRotationFromEuler(vr)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,M,T){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*M,g.scale.value=T*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function m(g,h,M){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===xn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function _(g,h){const M=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ly(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const A=T.program;i.uniformBlockBinding(M,A)}function u(M,T){let A=r[M.id];A===void 0&&(v(M),A=c(M),r[M.id]=A,M.addEventListener("dispose",g));const R=T.program;i.updateUBOMapping(M,R);const C=e.render.frame;s[M.id]!==C&&(f(M),s[M.id]=C)}function c(M){const T=d();M.__bindingPointIndex=T;const A=t.createBuffer(),R=M.__size,C=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,A),A}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const T=r[M.id],A=M.uniforms,R=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let C=0,w=A.length;C<w;C++){const B=Array.isArray(A[C])?A[C]:[A[C]];for(let x=0,y=B.length;x<y;x++){const D=B[x];if(m(D,C,x,R)===!0){const J=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let ee=0;ee<G.length;ee++){const K=G[ee],j=_(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,J+$,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,J,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(M,T,A,R){const C=M.value,w=T+"_"+A;if(R[w]===void 0)return typeof C=="number"||typeof C=="boolean"?R[w]=C:R[w]=C.clone(),!0;{const B=R[w];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return R[w]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function v(M){const T=M.uniforms;let A=0;const R=16;for(let w=0,B=T.length;w<B;w++){const x=Array.isArray(T[w])?T[w]:[T[w]];for(let y=0,D=x.length;y<D;y++){const J=x[y],G=Array.isArray(J.value)?J.value:[J.value];for(let $=0,ee=G.length;$<ee;$++){const K=G[$],j=_(K),ie=A%R,ye=ie%j.boundary,me=ie+ye;A+=ye,me!==0&&R-me<j.storage&&(A+=R-me),J.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=A,A+=j.storage}}}const C=A%R;return C>0&&(A+=R-C),M.__size=A,M.__cache={},this}function _(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ze("WebGLRenderer: Unsupported uniform value type.",M),T}function g(M){const T=M.target;T.removeEventListener("dispose",g);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:u,dispose:h}}const uy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function cy(){return si===null&&(si=new ox(uy,16,16,xs,Oi),si.name="DFG_LUT",si.minFilter=sn,si.magFilter=sn,si.wrapS=Di,si.wrapT=Di,si.generateMipmaps=!1,si.needsUpdate=!0),si}class dy{constructor(e={}){const{canvas:n=N1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Gn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const _=m,g=new Set([hd,fd,dd]),h=new Set([Gn,gi,va,_a,ud,cd]),M=new Uint32Array(4),T=new Int32Array(4);let A=null,R=null;const C=[],w=[];let B=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=Vn;let D=0,J=0,G=null,$=-1,ee=null;const K=new Ft,j=new Ft;let ie=null;const ye=new rt(0);let me=0,Ae=n.width,V=n.height,O=1,H=null,ae=null;const I=new Ft(0,0,Ae,V),U=new Ft(0,0,Ae,V);let Q=!1;const pe=new mg;let le=!1,Pe=!1;const Z=new zt,oe=new X,fe=new Ft,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Oe(){return G===null?O:1}let L=i;function Ye(S,F){return n.getContext(S,F)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${od}`),n.addEventListener("webglcontextlost",Ke,!1),n.addEventListener("webglcontextrestored",Mt,!1),n.addEventListener("webglcontextcreationerror",mt,!1),L===null){const F="webgl2";if(L=Ye(F,S),L===null)throw Ye(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw ct("WebGLRenderer: "+S.message),S}let Je,te,ne,b,p,E,P,q,k,Me,ge,Ue,We,se,be,Ne,ve,_e,nt,N,Ce,he,Re,ue;function re(){Je=new c3(L),Je.init(),he=new ty(L,Je),te=new t3(L,Je,e,he),ne=new QS(L,Je),te.reversedDepthBuffer&&f&&ne.buffers.depth.setReversed(!0),b=new h3(L),p=new BS,E=new ey(L,Je,ne,p,te,he,b),P=new i3(x),q=new u3(x),k=new vx(L),Re=new Qb(L,k),Me=new d3(L,k,b,Re),ge=new m3(L,Me,k,b),nt=new p3(L,te,E),Ne=new n3(p),Ue=new OS(x,P,q,Je,te,Re,Ne),We=new oy(x,p),se=new qS,be=new $S(Je),_e=new Zb(x,P,q,ne,ge,v,l),ve=new KS(x,ge,te),ue=new ly(L,b,te,ne),N=new e3(L,Je,b),Ce=new f3(L,Je,b),b.programs=Ue.programs,x.capabilities=te,x.extensions=Je,x.properties=p,x.renderLists=se,x.shadowMap=ve,x.state=ne,x.info=b}re(),_!==Gn&&(B=new v3(_,n.width,n.height,r,s));const Se=new sy(x,L);this.xr=Se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=Je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(S){S!==void 0&&(O=S,this.setSize(Ae,V,!1))},this.getSize=function(S){return S.set(Ae,V)},this.setSize=function(S,F,Y=!0){if(Se.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=S,V=F,n.width=Math.floor(S*O),n.height=Math.floor(F*O),Y===!0&&(n.style.width=S+"px",n.style.height=F+"px"),B!==null&&B.setSize(n.width,n.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(Ae*O,V*O).floor()},this.setDrawingBufferSize=function(S,F,Y){Ae=S,V=F,O=Y,n.width=Math.floor(S*Y),n.height=Math.floor(F*Y),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(_===Gn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(K)},this.getViewport=function(S){return S.copy(I)},this.setViewport=function(S,F,Y,W){S.isVector4?I.set(S.x,S.y,S.z,S.w):I.set(S,F,Y,W),ne.viewport(K.copy(I).multiplyScalar(O).round())},this.getScissor=function(S){return S.copy(U)},this.setScissor=function(S,F,Y,W){S.isVector4?U.set(S.x,S.y,S.z,S.w):U.set(S,F,Y,W),ne.scissor(j.copy(U).multiplyScalar(O).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(S){ne.setScissorTest(Q=S)},this.setOpaqueSort=function(S){H=S},this.setTransparentSort=function(S){ae=S},this.getClearColor=function(S){return S.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,Y=!0){let W=0;if(S){let z=!1;if(G!==null){const Ee=G.texture.format;z=g.has(Ee)}if(z){const Ee=G.texture.type,De=h.has(Ee),we=_e.getClearColor(),Fe=_e.getClearAlpha(),qe=we.r,Xe=we.g,He=we.b;De?(M[0]=qe,M[1]=Xe,M[2]=He,M[3]=Fe,L.clearBufferuiv(L.COLOR,0,M)):(T[0]=qe,T[1]=Xe,T[2]=He,T[3]=Fe,L.clearBufferiv(L.COLOR,0,T))}else W|=L.COLOR_BUFFER_BIT}F&&(W|=L.DEPTH_BUFFER_BIT),Y&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ke,!1),n.removeEventListener("webglcontextrestored",Mt,!1),n.removeEventListener("webglcontextcreationerror",mt,!1),_e.dispose(),se.dispose(),be.dispose(),p.dispose(),P.dispose(),q.dispose(),ge.dispose(),Re.dispose(),ue.dispose(),Ue.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Cf),Se.removeEventListener("sessionend",Rf),ur.stop()};function Ke(S){S.preventDefault(),Jf("WebGLRenderer: Context Lost."),y=!0}function Mt(){Jf("WebGLRenderer: Context Restored."),y=!1;const S=b.autoReset,F=ve.enabled,Y=ve.autoUpdate,W=ve.needsUpdate,z=ve.type;re(),b.autoReset=S,ve.enabled=F,ve.autoUpdate=Y,ve.needsUpdate=W,ve.type=z}function mt(S){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ri(S){const F=S.target;F.removeEventListener("dispose",ri),Ei(F)}function Ei(S){T_(S),p.remove(S)}function T_(S){const F=p.get(S).programs;F!==void 0&&(F.forEach(function(Y){Ue.releaseProgram(Y)}),S.isShaderMaterial&&Ue.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,Y,W,z,Ee){F===null&&(F=xe);const De=z.isMesh&&z.matrixWorld.determinant()<0,we=w_(S,F,Y,W,z);ne.setMaterial(W,De);let Fe=Y.index,qe=1;if(W.wireframe===!0){if(Fe=Me.getWireframeAttribute(Y),Fe===void 0)return;qe=2}const Xe=Y.drawRange,He=Y.attributes.position;let it=Xe.start*qe,_t=(Xe.start+Xe.count)*qe;Ee!==null&&(it=Math.max(it,Ee.start*qe),_t=Math.min(_t,(Ee.start+Ee.count)*qe)),Fe!==null?(it=Math.max(it,0),_t=Math.min(_t,Fe.count)):He!=null&&(it=Math.max(it,0),_t=Math.min(_t,He.count));const Nt=_t-it;if(Nt<0||Nt===1/0)return;Re.setup(z,W,we,Y,Fe);let It,bt=N;if(Fe!==null&&(It=k.get(Fe),bt=Ce,bt.setIndex(It)),z.isMesh)W.wireframe===!0?(ne.setLineWidth(W.wireframeLinewidth*Oe()),bt.setMode(L.LINES)):bt.setMode(L.TRIANGLES);else if(z.isLine){let je=W.linewidth;je===void 0&&(je=1),ne.setLineWidth(je*Oe()),z.isLineSegments?bt.setMode(L.LINES):z.isLineLoop?bt.setMode(L.LINE_LOOP):bt.setMode(L.LINE_STRIP)}else z.isPoints?bt.setMode(L.POINTS):z.isSprite&&bt.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)xa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))bt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const je=z._multiDrawStarts,gt=z._multiDrawCounts,ut=z._multiDrawCount,Sn=Fe?k.get(Fe).bytesPerElement:1,zr=p.get(W).currentProgram.getUniforms();for(let yn=0;yn<ut;yn++)zr.setValue(L,"_gl_DrawID",yn),bt.render(je[yn]/Sn,gt[yn])}else if(z.isInstancedMesh)bt.renderInstances(it,Nt,z.count);else if(Y.isInstancedBufferGeometry){const je=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,gt=Math.min(Y.instanceCount,je);bt.renderInstances(it,Nt,gt)}else bt.render(it,Nt)};function wf(S,F,Y){S.transparent===!0&&S.side===Li&&S.forceSinglePass===!1?(S.side=xn,S.needsUpdate=!0,qa(S,F,Y),S.side=sr,S.needsUpdate=!0,qa(S,F,Y),S.side=Li):qa(S,F,Y)}this.compile=function(S,F,Y=null){Y===null&&(Y=S),R=be.get(Y),R.init(F),w.push(R),Y.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(R.pushLight(z),z.castShadow&&R.pushShadow(z))}),S!==Y&&S.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(R.pushLight(z),z.castShadow&&R.pushShadow(z))}),R.setupLights();const W=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const Ee=z.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const we=Ee[De];wf(we,Y,z),W.add(we)}else wf(Ee,Y,z),W.add(Ee)}),R=w.pop(),W},this.compileAsync=function(S,F,Y=null){const W=this.compile(S,F,Y);return new Promise(z=>{function Ee(){if(W.forEach(function(De){p.get(De).currentProgram.isReady()&&W.delete(De)}),W.size===0){z(S);return}setTimeout(Ee,10)}Je.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Pl=null;function A_(S){Pl&&Pl(S)}function Cf(){ur.stop()}function Rf(){ur.start()}const ur=new _g;ur.setAnimationLoop(A_),typeof self<"u"&&ur.setContext(self),this.setAnimationLoop=function(S){Pl=S,Se.setAnimationLoop(S),S===null?ur.stop():ur.start()},Se.addEventListener("sessionstart",Cf),Se.addEventListener("sessionend",Rf),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const Y=Se.enabled===!0&&Se.isPresenting===!0,W=B!==null&&(G===null||Y)&&B.begin(x,G);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(F),F=Se.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,F,G),R=be.get(S,w.length),R.init(F),w.push(R),Z.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),pe.setFromProjectionMatrix(Z,ci,F.reversedDepth),Pe=this.localClippingEnabled,le=Ne.init(this.clippingPlanes,Pe),A=se.get(S,C.length),A.init(),C.push(A),Se.enabled===!0&&Se.isPresenting===!0){const De=x.xr.getDepthSensingMesh();De!==null&&Dl(De,F,-1/0,x.sortObjects)}Dl(S,F,0,x.sortObjects),A.finish(),x.sortObjects===!0&&A.sort(H,ae),de=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,de&&_e.addToRenderList(A,S),this.info.render.frame++,le===!0&&Ne.beginShadows();const z=R.state.shadowsArray;if(ve.render(z,S,F),le===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&B.hasRenderPass())===!1){const De=A.opaque,we=A.transmissive;if(R.setupLights(),F.isArrayCamera){const Fe=F.cameras;if(we.length>0)for(let qe=0,Xe=Fe.length;qe<Xe;qe++){const He=Fe[qe];Pf(De,we,S,He)}de&&_e.render(S);for(let qe=0,Xe=Fe.length;qe<Xe;qe++){const He=Fe[qe];Lf(A,S,He,He.viewport)}}else we.length>0&&Pf(De,we,S,F),de&&_e.render(S),Lf(A,S,F)}G!==null&&J===0&&(E.updateMultisampleRenderTarget(G),E.updateRenderTargetMipmap(G)),W&&B.end(x),S.isScene===!0&&S.onAfterRender(x,S,F),Re.resetDefaultState(),$=-1,ee=null,w.pop(),w.length>0?(R=w[w.length-1],le===!0&&Ne.setGlobalState(x.clippingPlanes,R.state.camera)):R=null,C.pop(),C.length>0?A=C[C.length-1]:A=null};function Dl(S,F,Y,W){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)R.pushLight(S),S.castShadow&&R.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||pe.intersectsSprite(S)){W&&fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Z);const De=ge.update(S),we=S.material;we.visible&&A.push(S,De,we,Y,fe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||pe.intersectsObject(S))){const De=ge.update(S),we=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),fe.copy(S.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),fe.copy(De.boundingSphere.center)),fe.applyMatrix4(S.matrixWorld).applyMatrix4(Z)),Array.isArray(we)){const Fe=De.groups;for(let qe=0,Xe=Fe.length;qe<Xe;qe++){const He=Fe[qe],it=we[He.materialIndex];it&&it.visible&&A.push(S,De,it,Y,fe.z,He)}}else we.visible&&A.push(S,De,we,Y,fe.z,null)}}const Ee=S.children;for(let De=0,we=Ee.length;De<we;De++)Dl(Ee[De],F,Y,W)}function Lf(S,F,Y,W){const{opaque:z,transmissive:Ee,transparent:De}=S;R.setupLightsView(Y),le===!0&&Ne.setGlobalState(x.clippingPlanes,Y),W&&ne.viewport(K.copy(W)),z.length>0&&ka(z,F,Y),Ee.length>0&&ka(Ee,F,Y),De.length>0&&ka(De,F,Y),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Pf(S,F,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[W.id]===void 0){const it=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[W.id]=new hi(1,1,{generateMipmaps:!0,type:it?Oi:Gn,minFilter:Er,samples:te.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const Ee=R.state.transmissionRenderTarget[W.id],De=W.viewport||K;Ee.setSize(De.z*x.transmissionResolutionScale,De.w*x.transmissionResolutionScale);const we=x.getRenderTarget(),Fe=x.getActiveCubeFace(),qe=x.getActiveMipmapLevel();x.setRenderTarget(Ee),x.getClearColor(ye),me=x.getClearAlpha(),me<1&&x.setClearColor(16777215,.5),x.clear(),de&&_e.render(Y);const Xe=x.toneMapping;x.toneMapping=fi;const He=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),R.setupLightsView(W),le===!0&&Ne.setGlobalState(x.clippingPlanes,W),ka(S,Y,W),E.updateMultisampleRenderTarget(Ee),E.updateRenderTargetMipmap(Ee),Je.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let _t=0,Nt=F.length;_t<Nt;_t++){const It=F[_t],{object:bt,geometry:je,material:gt,group:ut}=It;if(gt.side===Li&&bt.layers.test(W.layers)){const Sn=gt.side;gt.side=xn,gt.needsUpdate=!0,Df(bt,Y,W,je,gt,ut),gt.side=Sn,gt.needsUpdate=!0,it=!0}}it===!0&&(E.updateMultisampleRenderTarget(Ee),E.updateRenderTargetMipmap(Ee))}x.setRenderTarget(we,Fe,qe),x.setClearColor(ye,me),He!==void 0&&(W.viewport=He),x.toneMapping=Xe}function ka(S,F,Y){const W=F.isScene===!0?F.overrideMaterial:null;for(let z=0,Ee=S.length;z<Ee;z++){const De=S[z],{object:we,geometry:Fe,group:qe}=De;let Xe=De.material;Xe.allowOverride===!0&&W!==null&&(Xe=W),we.layers.test(Y.layers)&&Df(we,F,Y,Fe,Xe,qe)}}function Df(S,F,Y,W,z,Ee){S.onBeforeRender(x,F,Y,W,z,Ee),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(x,F,Y,W,S,Ee),z.transparent===!0&&z.side===Li&&z.forceSinglePass===!1?(z.side=xn,z.needsUpdate=!0,x.renderBufferDirect(Y,F,W,z,S,Ee),z.side=sr,z.needsUpdate=!0,x.renderBufferDirect(Y,F,W,z,S,Ee),z.side=Li):x.renderBufferDirect(Y,F,W,z,S,Ee),S.onAfterRender(x,F,Y,W,z,Ee)}function qa(S,F,Y){F.isScene!==!0&&(F=xe);const W=p.get(S),z=R.state.lights,Ee=R.state.shadowsArray,De=z.state.version,we=Ue.getParameters(S,z.state,Ee,F,Y),Fe=Ue.getProgramCacheKey(we);let qe=W.programs;W.environment=S.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(S.isMeshStandardMaterial?q:P).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,qe===void 0&&(S.addEventListener("dispose",ri),qe=new Map,W.programs=qe);let Xe=qe.get(Fe);if(Xe!==void 0){if(W.currentProgram===Xe&&W.lightsStateVersion===De)return If(S,we),Xe}else we.uniforms=Ue.getUniforms(S),S.onBeforeCompile(we,x),Xe=Ue.acquireProgram(we,Fe),qe.set(Fe,Xe),W.uniforms=we.uniforms;const He=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=Ne.uniform),If(S,we),W.needsLights=R_(S),W.lightsStateVersion=De,W.needsLights&&(He.ambientLightColor.value=z.state.ambient,He.lightProbe.value=z.state.probe,He.directionalLights.value=z.state.directional,He.directionalLightShadows.value=z.state.directionalShadow,He.spotLights.value=z.state.spot,He.spotLightShadows.value=z.state.spotShadow,He.rectAreaLights.value=z.state.rectArea,He.ltc_1.value=z.state.rectAreaLTC1,He.ltc_2.value=z.state.rectAreaLTC2,He.pointLights.value=z.state.point,He.pointLightShadows.value=z.state.pointShadow,He.hemisphereLights.value=z.state.hemi,He.directionalShadowMap.value=z.state.directionalShadowMap,He.directionalShadowMatrix.value=z.state.directionalShadowMatrix,He.spotShadowMap.value=z.state.spotShadowMap,He.spotLightMatrix.value=z.state.spotLightMatrix,He.spotLightMap.value=z.state.spotLightMap,He.pointShadowMap.value=z.state.pointShadowMap,He.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Xe,W.uniformsList=null,Xe}function Nf(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Eo.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function If(S,F){const Y=p.get(S);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function w_(S,F,Y,W,z){F.isScene!==!0&&(F=xe),E.resetTextureUnits();const Ee=F.fog,De=W.isMeshStandardMaterial?F.environment:null,we=G===null?x.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:bs,Fe=(W.isMeshStandardMaterial?q:P).get(W.envMap||De),qe=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xe=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),He=!!Y.morphAttributes.position,it=!!Y.morphAttributes.normal,_t=!!Y.morphAttributes.color;let Nt=fi;W.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Nt=x.toneMapping);const It=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,bt=It!==void 0?It.length:0,je=p.get(W),gt=R.state.lights;if(le===!0&&(Pe===!0||S!==ee)){const un=S===ee&&W.id===$;Ne.setState(W,S,un)}let ut=!1;W.version===je.__version?(je.needsLights&&je.lightsStateVersion!==gt.state.version||je.outputColorSpace!==we||z.isBatchedMesh&&je.batching===!1||!z.isBatchedMesh&&je.batching===!0||z.isBatchedMesh&&je.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&je.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&je.instancing===!1||!z.isInstancedMesh&&je.instancing===!0||z.isSkinnedMesh&&je.skinning===!1||!z.isSkinnedMesh&&je.skinning===!0||z.isInstancedMesh&&je.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&je.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&je.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&je.instancingMorph===!1&&z.morphTexture!==null||je.envMap!==Fe||W.fog===!0&&je.fog!==Ee||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ne.numPlanes||je.numIntersection!==Ne.numIntersection)||je.vertexAlphas!==qe||je.vertexTangents!==Xe||je.morphTargets!==He||je.morphNormals!==it||je.morphColors!==_t||je.toneMapping!==Nt||je.morphTargetsCount!==bt)&&(ut=!0):(ut=!0,je.__version=W.version);let Sn=je.currentProgram;ut===!0&&(Sn=qa(W,F,z));let zr=!1,yn=!1,Ys=!1;const Et=Sn.getUniforms(),mn=je.uniforms;if(ne.useProgram(Sn.program)&&(zr=!0,yn=!0,Ys=!0),W.id!==$&&($=W.id,yn=!0),zr||ee!==S){ne.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Et.setValue(L,"projectionMatrix",S.projectionMatrix),Et.setValue(L,"viewMatrix",S.matrixWorldInverse);const gn=Et.map.cameraPosition;gn!==void 0&&gn.setValue(L,oe.setFromMatrixPosition(S.matrixWorld)),te.logarithmicDepthBuffer&&Et.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Et.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),ee!==S&&(ee=S,yn=!0,Ys=!0)}if(je.needsLights&&(gt.state.directionalShadowMap.length>0&&Et.setValue(L,"directionalShadowMap",gt.state.directionalShadowMap,E),gt.state.spotShadowMap.length>0&&Et.setValue(L,"spotShadowMap",gt.state.spotShadowMap,E),gt.state.pointShadowMap.length>0&&Et.setValue(L,"pointShadowMap",gt.state.pointShadowMap,E)),z.isSkinnedMesh){Et.setOptional(L,z,"bindMatrix"),Et.setOptional(L,z,"bindMatrixInverse");const un=z.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Et.setValue(L,"boneTexture",un.boneTexture,E))}z.isBatchedMesh&&(Et.setOptional(L,z,"batchingTexture"),Et.setValue(L,"batchingTexture",z._matricesTexture,E),Et.setOptional(L,z,"batchingIdTexture"),Et.setValue(L,"batchingIdTexture",z._indirectTexture,E),Et.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&Et.setValue(L,"batchingColorTexture",z._colorsTexture,E));const On=Y.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&nt.update(z,Y,Sn),(yn||je.receiveShadow!==z.receiveShadow)&&(je.receiveShadow=z.receiveShadow,Et.setValue(L,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(mn.envMap.value=Fe,mn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(mn.envMapIntensity.value=F.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=cy()),yn&&(Et.setValue(L,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&C_(mn,Ys),Ee&&W.fog===!0&&We.refreshFogUniforms(mn,Ee),We.refreshMaterialUniforms(mn,W,O,V,R.state.transmissionRenderTarget[S.id]),Eo.upload(L,Nf(je),mn,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Eo.upload(L,Nf(je),mn,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Et.setValue(L,"center",z.center),Et.setValue(L,"modelViewMatrix",z.modelViewMatrix),Et.setValue(L,"normalMatrix",z.normalMatrix),Et.setValue(L,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const un=W.uniformsGroups;for(let gn=0,Nl=un.length;gn<Nl;gn++){const cr=un[gn];ue.update(cr,Sn),ue.bind(cr,Sn)}}return Sn}function C_(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function R_(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(S,F,Y){const W=p.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),p.get(S.texture).__webglTexture=F,p.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const Y=p.get(S);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0};const L_=L.createFramebuffer();this.setRenderTarget=function(S,F=0,Y=0){G=S,D=F,J=Y;let W=null,z=!1,Ee=!1;if(S){const we=p.get(S);if(we.__useDefaultFramebuffer!==void 0){ne.bindFramebuffer(L.FRAMEBUFFER,we.__webglFramebuffer),K.copy(S.viewport),j.copy(S.scissor),ie=S.scissorTest,ne.viewport(K),ne.scissor(j),ne.setScissorTest(ie),$=-1;return}else if(we.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(we.__hasExternalTextures)E.rebindTextures(S,p.get(S.texture).__webglTexture,p.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Xe=S.depthTexture;if(we.__boundDepthTexture!==Xe){if(Xe!==null&&p.has(Xe)&&(S.width!==Xe.image.width||S.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ee=!0);const qe=p.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qe[F])?W=qe[F][Y]:W=qe[F],z=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?W=p.get(S).__webglMultisampledFramebuffer:Array.isArray(qe)?W=qe[Y]:W=qe,K.copy(S.viewport),j.copy(S.scissor),ie=S.scissorTest}else K.copy(I).multiplyScalar(O).floor(),j.copy(U).multiplyScalar(O).floor(),ie=Q;if(Y!==0&&(W=L_),ne.bindFramebuffer(L.FRAMEBUFFER,W)&&ne.drawBuffers(S,W),ne.viewport(K),ne.scissor(j),ne.setScissorTest(ie),z){const we=p.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,Y)}else if(Ee){const we=F;for(let Fe=0;Fe<S.textures.length;Fe++){const qe=p.get(S.textures[Fe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Fe,qe.__webglTexture,Y,we)}}else if(S!==null&&Y!==0){const we=p.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,we.__webglTexture,Y)}$=-1},this.readRenderTargetPixels=function(S,F,Y,W,z,Ee,De,we=0){if(!(S&&S.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=p.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){ne.bindFramebuffer(L.FRAMEBUFFER,Fe);try{const qe=S.textures[we],Xe=qe.format,He=qe.type;if(!te.textureFormatReadable(Xe)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(He)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-W&&Y>=0&&Y<=S.height-z&&(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),L.readPixels(F,Y,W,z,he.convert(Xe),he.convert(He),Ee))}finally{const qe=G!==null?p.get(G).__webglFramebuffer:null;ne.bindFramebuffer(L.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(S,F,Y,W,z,Ee,De,we=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=p.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe)if(F>=0&&F<=S.width-W&&Y>=0&&Y<=S.height-z){ne.bindFramebuffer(L.FRAMEBUFFER,Fe);const qe=S.textures[we],Xe=qe.format,He=qe.type;if(!te.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,it),L.bufferData(L.PIXEL_PACK_BUFFER,Ee.byteLength,L.STREAM_READ),S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),L.readPixels(F,Y,W,z,he.convert(Xe),he.convert(He),0);const _t=G!==null?p.get(G).__webglFramebuffer:null;ne.bindFramebuffer(L.FRAMEBUFFER,_t);const Nt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await I1(L,Nt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,it),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ee),L.deleteBuffer(it),L.deleteSync(Nt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,Y=0){const W=Math.pow(2,-Y),z=Math.floor(S.image.width*W),Ee=Math.floor(S.image.height*W),De=F!==null?F.x:0,we=F!==null?F.y:0;E.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,De,we,z,Ee),ne.unbindTexture()};const P_=L.createFramebuffer(),D_=L.createFramebuffer();this.copyTextureToTexture=function(S,F,Y=null,W=null,z=0,Ee=null){Ee===null&&(z!==0?(xa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=z,z=0):Ee=0);let De,we,Fe,qe,Xe,He,it,_t,Nt;const It=S.isCompressedTexture?S.mipmaps[Ee]:S.image;if(Y!==null)De=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,Fe=Y.isBox3?Y.max.z-Y.min.z:1,qe=Y.min.x,Xe=Y.min.y,He=Y.isBox3?Y.min.z:0;else{const On=Math.pow(2,-z);De=Math.floor(It.width*On),we=Math.floor(It.height*On),S.isDataArrayTexture?Fe=It.depth:S.isData3DTexture?Fe=Math.floor(It.depth*On):Fe=1,qe=0,Xe=0,He=0}W!==null?(it=W.x,_t=W.y,Nt=W.z):(it=0,_t=0,Nt=0);const bt=he.convert(F.format),je=he.convert(F.type);let gt;F.isData3DTexture?(E.setTexture3D(F,0),gt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(E.setTexture2DArray(F,0),gt=L.TEXTURE_2D_ARRAY):(E.setTexture2D(F,0),gt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const ut=L.getParameter(L.UNPACK_ROW_LENGTH),Sn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),zr=L.getParameter(L.UNPACK_SKIP_PIXELS),yn=L.getParameter(L.UNPACK_SKIP_ROWS),Ys=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,It.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,He);const Et=S.isDataArrayTexture||S.isData3DTexture,mn=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const On=p.get(S),un=p.get(F),gn=p.get(On.__renderTarget),Nl=p.get(un.__renderTarget);ne.bindFramebuffer(L.READ_FRAMEBUFFER,gn.__webglFramebuffer),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,Nl.__webglFramebuffer);for(let cr=0;cr<Fe;cr++)Et&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,p.get(S).__webglTexture,z,He+cr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,p.get(F).__webglTexture,Ee,Nt+cr)),L.blitFramebuffer(qe,Xe,De,we,it,_t,De,we,L.DEPTH_BUFFER_BIT,L.NEAREST);ne.bindFramebuffer(L.READ_FRAMEBUFFER,null),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||p.has(S)){const On=p.get(S),un=p.get(F);ne.bindFramebuffer(L.READ_FRAMEBUFFER,P_),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,D_);for(let gn=0;gn<Fe;gn++)Et?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,On.__webglTexture,z,He+gn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,On.__webglTexture,z),mn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,un.__webglTexture,Ee,Nt+gn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,un.__webglTexture,Ee),z!==0?L.blitFramebuffer(qe,Xe,De,we,it,_t,De,we,L.COLOR_BUFFER_BIT,L.NEAREST):mn?L.copyTexSubImage3D(gt,Ee,it,_t,Nt+gn,qe,Xe,De,we):L.copyTexSubImage2D(gt,Ee,it,_t,qe,Xe,De,we);ne.bindFramebuffer(L.READ_FRAMEBUFFER,null),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else mn?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(gt,Ee,it,_t,Nt,De,we,Fe,bt,je,It.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(gt,Ee,it,_t,Nt,De,we,Fe,bt,It.data):L.texSubImage3D(gt,Ee,it,_t,Nt,De,we,Fe,bt,je,It):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ee,it,_t,De,we,bt,je,It.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ee,it,_t,It.width,It.height,bt,It.data):L.texSubImage2D(L.TEXTURE_2D,Ee,it,_t,De,we,bt,je,It);L.pixelStorei(L.UNPACK_ROW_LENGTH,ut),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Sn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,zr),L.pixelStorei(L.UNPACK_SKIP_ROWS,yn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ys),Ee===0&&F.generateMipmaps&&L.generateMipmap(gt),ne.unbindTexture()},this.initRenderTarget=function(S){p.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),ne.unbindTexture()},this.resetState=function(){D=0,J=0,G=null,ne.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}const fy=`
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
}`,hy=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;function py(t){const e=new dy({canvas:t,antialias:!1}),n={uTime:{value:0},uAltitude:{value:.45},uLuminosite:{value:.7},uTurbulence:{value:.2},uNight:{value:0},uAurora:{value:.55},uPulse:{value:0},uPluie:{value:0},uEclair:{value:0},uMeteor:{value:new Ft(0,0,0,0)},uFocus:{value:new pt(.5,.5)},uAspect:{value:1},uTap:{value:new X(.5,.5,999)},uCol1:{value:new rt("#1b2a4a")},uCol2:{value:new rt("#7fa8d9")},uCol3:{value:new rt("#dfefff")}},i={alt:.45,lum:.7,turb:.2,night:0,aurora:.55,pluie:0,col1:new rt("#1b2a4a"),col2:new rt("#7fa8d9"),col3:new rt("#dfefff"),focus:new pt(.5,.5)},r={alt:.45,lum:.7,turb:.2,night:0,aurora:.55,col1:new rt("#1b2a4a"),col2:new rt("#7fa8d9"),col3:new rt("#dfefff"),focus:new pt(.5,.5)};let s=0,a=0,o=999,l=0,u=0;const c={x:0,y:0,age:0,actif:0},d=new ei({vertexShader:hy,fragmentShader:fy,uniforms:n}),f=new vi(new Ra(2,2),d),m=new ax;m.add(f);function v(){e.setSize(window.innerWidth,window.innerHeight,!1),n.uAspect.value=window.innerWidth/Math.max(1,window.innerHeight)}return window.addEventListener("resize",v),v(),{apply(_,g){i.alt=_.altitude,i.lum=_.luminosite,i.turb=_.turbulence,i.night=_.night,i.aurora=_.aurora,i.pluie=_.pluie,i.col1.setStyle(_.palette[0]),i.col2.setStyle(_.palette[1]),i.col3.setStyle(_.palette[2]),g&&i.focus.set(g[0],g[1])},setBpm(_){s=_??0},eclair(){u=1},filer(_,g){c.x=_,c.y=g,c.age=0,c.actif=1},tap(_,g){o=0,n.uTap.value.set(_,g,0)},frame(_){n.uTime.value+=_;const g=1-Math.exp(-_*2.5);r.alt+=(i.alt-r.alt)*g,r.lum+=(i.lum-r.lum)*g,r.turb+=(i.turb-r.turb)*g,r.night+=(i.night-r.night)*g,r.aurora+=(i.aurora-r.aurora)*g,l+=(i.pluie-l)*(1-Math.exp(-_*.8)),u*=Math.exp(-_*2.6),c.actif>0&&(c.age+=_,c.age>1.4&&(c.actif=0)),r.col1.lerp(i.col1,g),r.col2.lerp(i.col2,g),r.col3.lerp(i.col3,g),r.focus.lerp(i.focus,g),a+=_*(s>0?s/60:.2),n.uPulse.value=Math.sin(a*2*Math.PI),o<100&&(o+=_,n.uTap.value.z=o),n.uAltitude.value=r.alt,n.uLuminosite.value=r.lum,n.uTurbulence.value=r.turb,n.uNight.value=r.night,n.uAurora.value=r.aurora,n.uPluie.value=l,n.uEclair.value=u,n.uMeteor.value.set(c.x,c.y,c.age,c.actif),n.uFocus.value.copy(r.focus),n.uCol1.value.copy(r.col1),n.uCol2.value.copy(r.col2),n.uCol3.value.copy(r.col3),e.render(m,new _d)}}}function my(){return{breath:0,bpm:null,emotion:"calme",timeOfDay:.5,seed:"anonyme"}}const gy={calme:["#1b2a4a","#7fa8d9","#dfefff"],joie:["#2b4a1b","#d9c47f","#fff6df"],tristesse:["#101018","#3a4a6a","#8a9ab0"],tension:["#2a0a0a","#6a2a2a","#c07a5a"]};function Oh(t){const e={calme:{alt:.45,lum:.7,turb:.2,aur:.55,pluie:.12},joie:{alt:.7,lum:.9,turb:.35,aur:.95,pluie:0},tristesse:{alt:.2,lum:.35,turb:.1,aur:.25,pluie:.7},tension:{alt:.6,lum:.45,turb:.85,aur:.4,pluie:.45}}[t.emotion],n=Math.min(1,Math.max(0,(Math.abs(t.timeOfDay-.5)-.2)*5)),i=t.cielReel??null;return{altitude:Math.min(1,e.alt+t.breath*.35),luminosite:i?Math.min(1,i.luminosite+t.breath*.2):Math.min(1,e.lum+t.breath*.2),turbulence:i?Math.min(1,Math.max(e.turb,i.turbulence)+t.breath*.1):Math.min(1,e.turb+t.breath*.1),night:n,aurora:e.aur,pluie:i?Math.max(e.pluie,i.pluie):e.pluie,palette:gy[t.emotion]}}function vy(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return Math.sqrt(e/t.length)}function _y(t,e,n=8){return t<=e?0:Math.min(1,(t-e)*n)}async function xy(t){try{const e=await navigator.mediaDevices.getUserMedia({audio:!0}),n=new AudioContext,i=n.createMediaStreamSource(e),r=n.createAnalyser();r.fftSize=1024,i.connect(r);const s=new Float32Array(r.fftSize);let a=5e-4;return setInterval(()=>{r.getFloatTimeDomainData(s);const o=vy(s);a=Math.min(a*.999+o*.001,.01),t(_y(o,a))},60),!0}catch{return!1}}var ys=typeof self<"u"?self:{};function Mg(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=ys,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function _r(){throw Error("Invalid UTF8")}function Bh(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let co,du;const by=typeof TextDecoder<"u";let Sy;const yy=typeof TextEncoder<"u";function Eg(t){if(yy)t=(Sy||=new TextEncoder).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function Tg(t){ys.setTimeout((()=>{throw t}),0)}var Lc,My=Mg(610401301,!1),kh=Mg(748402147,!0);function qh(){var t=ys.navigator;return t&&(t=t.userAgent)?t:""}const zh=ys.navigator;function el(t){return el[" "](t),t}Lc=zh&&zh.userAgentData||null,el[" "]=function(){};const Ag={};let la=null;function Ey(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,a){function o(u){for(;l<s.length;){const c=s.charAt(l++),d=la[c];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c)}return u}wg();let l=0;for(;;){const u=o(-1),c=o(0),d=o(64),f=o(64);if(f===64&&u===-1)break;a(u<<2|c>>4),d!=64&&(a(c<<4&240|d>>2),f!=64&&a(d<<6&192|f))}})(t,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function wg(){if(!la){la={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));Ag[n]=i;for(let r=0;r<i.length;r++){const s=i[r];la[s]===void 0&&(la[s]=r)}}}}var Ty=typeof Uint8Array<"u",Cg=!(!(My&&Lc&&Lc.brands.length>0)&&(qh().indexOf("Trident")!=-1||qh().indexOf("MSIE")!=-1))&&typeof btoa=="function";const Vh=/[-_.]/g,Ay={"-":"+",_:"/",".":"="};function wy(t){return Ay[t]||""}function Rg(t){if(!Cg)return Ey(t);t=Vh.test(t)?t.replace(Vh,wy):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function xd(t){return Ty&&t!=null&&t instanceof Uint8Array}var Ms={};function Fr(){return Cy||=new mi(null,Ms)}function bd(t){Lg(Ms);var e=t.g;return(e=e==null||xd(e)?e:typeof e=="string"?Rg(e):null)==null?e:t.g=e}var mi=class{h(){return new Uint8Array(bd(this)||0)}constructor(t,e){if(Lg(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let Cy,Ry;function Lg(t){if(t!==Ms)throw Error("illegal external caller")}function Pg(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function Pc(t){return Pg(t=Error(t),"warning"),t}function Es(t,e){if(t!=null){var n=Ry??={},i=n[t]||0;i>=e||(n[t]=i+1,Pg(t=Error(),"incident"),Tg(t))}}function Fs(){return typeof BigInt=="function"}var Us=typeof Symbol=="function"&&typeof Symbol()=="symbol";function xi(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var Ly=xi("jas",void 0,!0),Gh=xi(void 0,"0di"),ia=xi(void 0,"1oa"),Ln=xi(void 0,Symbol()),Py=xi(void 0,"0ub"),Dy=xi(void 0,"0ubs"),Dc=xi(void 0,"0ubsb"),Ny=xi(void 0,"0actk"),Ts=xi("m_m","Pa",!0),Hh=xi();const Dg={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Ng=Object.defineProperties,Be=Us?Ly:"Ga";var Br;const jh=[];function La(t,e){Us||Be in t||Ng(t,Dg),t[Be]|=e}function Xt(t,e){Us||Be in t||Ng(t,Dg),t[Be]=e}function Pa(t){return La(t,34),t}function Sa(t){return La(t,8192),t}Xt(jh,7),Br=Object.freeze(jh);var As={};function Dn(t,e){return e===void 0?t.h!==Ur&&!!(2&(0|t.v[Be])):!!(2&e)&&t.h!==Ur}const Ur={};function Sd(t,e){if(t!=null){if(typeof t=="string")t=t?new mi(t,Ms):Fr();else if(t.constructor!==mi)if(xd(t))t=t.length?new mi(new Uint8Array(t),Ms):Fr();else{if(!e)throw Error();t=void 0}}return t}class $h{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var Iy=Object.freeze({});function Ig(t,e,n){const i=128&e?0:-1,r=t.length;var s;(s=!!r)&&(s=(s=t[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const a=r+(s?-1:0);for(e=128&e?1:0;e<a;e++)n(e-i,t[e]);if(s){t=t[r-1];for(const o in t)!isNaN(o)&&n(+o,t[o])}}var Fg={};function Os(t){return 128&t?Fg:void 0}function tl(t){return t.Na=!0,t}var Fy=tl((t=>typeof t=="number")),Wh=tl((t=>typeof t=="string")),Uy=tl((t=>typeof t=="boolean")),nl=typeof ys.BigInt=="function"&&typeof ys.BigInt(0)=="bigint";function Pn(t){var e=t;if(Wh(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(Fy(e)&&!Number.isSafeInteger(e))throw Error(String(e));return nl?BigInt(t):t=Uy(t)?t?"1":"0":Wh(t)?t.trim()||"0":String(t)}var Nc=tl((t=>nl?t>=By&&t<=qy:t[0]==="-"?Xh(t,Oy):Xh(t,ky)));const Oy=Number.MIN_SAFE_INTEGER.toString(),By=nl?BigInt(Number.MIN_SAFE_INTEGER):void 0,ky=Number.MAX_SAFE_INTEGER.toString(),qy=nl?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Xh(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const zy=typeof Uint8Array.prototype.slice=="function";let Vy,Rt=0,kt=0;function Yh(t){const e=t>>>0;Rt=e,kt=(t-e)/4294967296>>>0}function ws(t){if(t<0){Yh(-t);const[e,n]=Ed(Rt,kt);Rt=e>>>0,kt=n>>>0}else Yh(t)}function yd(t){const e=Vy||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),kt=0,Rt=e.getUint32(0,!0)}function Ug(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:ya(t,e)}function Gy(t,e){return Pn(Fs()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):ya(t,e))}function Og(t,e){return Fs()?Pn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):Pn(Md(t,e))}function ya(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Fs()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Jh(n)+Jh(t));return n}function Jh(t){return t=String(t),"0000000".slice(t.length)+t}function Md(t,e){if(2147483648&e)if(Fs())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=Ed(t,e);t="-"+ya(n,i)}else t=ya(t,e);return t}function il(t){if(t.length<16)ws(Number(t));else if(Fs())t=BigInt(t),Rt=Number(t&BigInt(4294967295))>>>0,kt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");kt=Rt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));kt*=1e6,Rt=1e6*Rt+s,Rt>=4294967296&&(kt+=Math.trunc(Rt/4294967296),kt>>>=0,Rt>>>=0)}if(e){const[i,r]=Ed(Rt,kt);Rt=i,kt=r}}}function Ed(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function Qn(t){return Array.prototype.slice.call(t)}const Da=typeof BigInt=="function"?BigInt.asIntN:void 0,Hy=typeof BigInt=="function"?BigInt.asUintN:void 0,Or=Number.isSafeInteger,rl=Number.isFinite,Cs=Math.trunc,jy=Pn(0);function ua(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function di(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function Ma(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function Bg(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const $y=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Na(t){switch(typeof t){case"bigint":return!0;case"number":return rl(t);case"string":return $y.test(t);default:return!1}}function Bs(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return rl(t)?0|t:void 0}function kg(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return rl(t)?t>>>0:void 0}function qg(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(il(t),Md(Rt,kt))}function Td(t){if(t=Cs(t),!Or(t)){ws(t);var e=Rt,n=kt;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=Ug(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function zg(t){var e=Cs(Number(t));return Or(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),qg(t))}function Vg(t){var e=Cs(Number(t));return Or(e)?Pn(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Fs()?Pn(Da(64,BigInt(t))):Pn(qg(t)))}function Gg(t){return Or(t)?t=Pn(Td(t)):(t=Cs(t),Or(t)?t=String(t):(ws(t),t=Md(Rt,kt)),t=Pn(t)),t}function Fo(t){const e=typeof t;return t==null?t:e==="bigint"?Pn(Da(64,t)):Na(t)?e==="string"?Vg(t):Gg(t):void 0}function Hg(t){if(typeof t!="string")throw Error();return t}function Ia(t){if(t!=null&&typeof t!="string")throw Error();return t}function en(t){return t==null||typeof t=="string"?t:void 0}function Ad(t,e,n,i){return t!=null&&t[Ts]===As?t:Array.isArray(t)?((i=(n=0|t[Be])|32&i|2&i)!==n&&Xt(t,i),new e(t)):(n?2&i?((t=e[Gh])||(Pa((t=new e).v),t=e[Gh]=t),e=t):e=new e:e=void 0,e)}function Wy(t,e,n){if(e)e:{if(!Na(e=t))throw Pc("int64");switch(typeof e){case"string":e=Vg(e);break e;case"bigint":e=Pn(Da(64,e));break e;default:e=Gg(e)}}else e=Fo(t);return(t=e)==null?n?jy:void 0:t}const Xy={};let Yy=(function(){try{return el(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class fu{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const Jy=Yy?(Object.setPrototypeOf(fu.prototype,Map.prototype),Object.defineProperties(fu.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),fu):class extends Map{constructor(){super()}};function Kh(t){return t}function hu(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var qi=class extends Jy{constructor(t,e,n=Kh,i=Kh){super(),this.J=0|t[Be],this.K=e,this.S=n,this.fa=this.K?Ky:i;for(let r=0;r<t.length;r++){const s=t[r],a=n(s[0],!1,!0);let o=s[1];e?o===void 0&&(o=null):o=i(s[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(t){return Sa(Array.from(super.entries(),t))}clear(){hu(this),super.clear()}delete(t){return hu(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new $h(t,Zy,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new $h(t,qi.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,i,r)=>{t.call(e,r.get(i),i,r)})):super.forEach(t,e)}set(t,e){return hu(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function Ky(t,e,n,i,r,s){return t=Ad(t,i,n,s),r&&(t=Cd(t)),t}function Zy(t){return[t,this.get(t)]}let Qy;function Zh(){return Qy||=new qi(Pa([]),void 0,void 0,void 0,Xy)}function sl(t){return Ln?t[Ln]:void 0}function Uo(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}qi.prototype.toJSON=void 0;var Ic=class{};const eM={Ka:!0};function tM(t,e){e<100||Es(Dy,1)}function al(t,e,n,i){const r=i!==void 0;i=!!i;var s,a=Ln;!r&&Us&&a&&(s=t[a])&&Uo(s,tM),a=[];var o=t.length;let l;s=4294967295;let u=!1;const c=!!(64&e),d=c?128&e?0:-1:void 0;1&e||(l=o&&t[o-1],l!=null&&typeof l=="object"&&l.constructor===Object?s=--o:l=void 0,!c||128&e||r||(u=!0,s=s-d+d)),e=void 0;for(var f=0;f<o;f++){let m=t[f];if(m!=null&&(m=n(m,i))!=null)if(c&&f>=s){const v=f-d;(e??={})[v]=m}else a[f]=m}if(l)for(let m in l){if((o=l[m])==null||(o=n(o,i))==null)continue;let v;f=+m,c&&!Number.isNaN(f)&&(v=f+d)<s?a[v]=o:(e??={})[m]=o}return e&&(u?a.push(e):a[s]=e),r&&Ln&&(t=sl(t))&&t instanceof Ic&&(a[Ln]=(function(m){const v=new Ic;return Uo(m,((_,g,h)=>{v[g]=Qn(h)})),v.da=m.da,v})(t)),a}function nM(t){return t[0]=Ea(t[0]),t[1]=Ea(t[1]),t}function Ea(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Nc(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[Be];return t.length===0&&1&e?void 0:al(t,e,Ea)}if(t!=null&&t[Ts]===As)return jg(t);if(t instanceof mi){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(Cg){for(var n="",i=0,r=e.length-10240;i<r;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),wg(),n=Ag[n],i=Array(Math.floor(e.length/3)),r=n[64]||"";let u=0,c=0;for(;u<e.length-2;u+=3){var s=e[u],a=e[u+1],o=e[u+2],l=n[s>>2];s=n[(3&s)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[c++]=l+s+a+o}switch(l=0,o=r,e.length-u){case 2:o=n[(15&(l=e[u+1]))<<2]||r;case 1:e=e[u],i[c]=n[e>>2]+n[(3&e)<<4|l>>4]+o+r}e=i.join("")}t=t.g=e}return t}return t instanceof qi?t=t.size!==0?t.V(nM):void 0:void 0}return t}let iM,rM;function jg(t){return al(t=t.v,0|t[Be],Ea)}function Rr(t,e){return $g(t,e[0],e[1])}function $g(t,e,n,i=0){if(t==null){var r=32;n?(t=[n],r|=128):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(r=0|t[Be],kh&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&(function(){if(kh)throw Error("carr");Es(Ny,5)})(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&Xt(t,r|i),t;if(n&&(r|=128,n!==t[0]))throw Error("mid");e:{r|=64;var s=(n=t).length;if(s){var a=s-1;const l=n[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(s=+o)<a&&(n[s+e]=l[o],delete l[o]);r=-16760833&r|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return Xt(t,64|r|i),t}function sM(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[Be];return t.length===0&&1&n?void 0:Qh(t,n,e)}if(t!=null&&t[Ts]===As)return ep(t);if(t instanceof qi){if(2&(e=t.J))return t;if(!t.size)return;if(n=Pa(t.V()),t.K)for(t=0;t<n.length;t++){const i=n[t];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[Ts]===As?ep(r):Array.isArray(r)?Qh(r,0|r[Be],!!(32&e)):void 0,i[1]=r}return n}return t instanceof mi?t:void 0}function Qh(t,e,n){return 2&e||(!n||4096&e||16&e?t=ks(t,e,!1,n&&!(16&e)):(La(t,34),4&e&&Object.freeze(t))),t}function wd(t,e,n){return t=new t.constructor(e),n&&(t.h=Ur),t.m=Ur,t}function ep(t){const e=t.v,n=0|e[Be];return Dn(t,n)?t:Rd(t,e,n)?wd(t,e):ks(e,n)}function ks(t,e,n,i){return i??=!!(34&e),t=al(t,e,sM,i),i=32,n&&(i|=2),Xt(t,e=16769217&e|i),t}function Cd(t){const e=t.v,n=0|e[Be];return Dn(t,n)?Rd(t,e,n)?wd(t,e,!0):new t.constructor(ks(e,n,!1)):t}function qs(t){if(t.h!==Ur)return!1;var e=t.v;return La(e=ks(e,0|e[Be]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function zs(t){if(!qs(t)&&Dn(t,0|t.v[Be]))throw Error()}function kr(t,e){e===void 0&&(e=0|t[Be]),32&e&&!(4096&e)&&Xt(t,4096|e)}function Rd(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Xt(e,2|n),t.h=Ur,!0)}const Wg=Pn(0),Ki={};function Lt(t,e,n,i,r){if((e=zi(t.v,e,n,r))!==null||i&&t.m!==Ur)return e}function zi(t,e,n,i){if(e===-1)return null;const r=e+(n?0:-1),s=t.length-1;let a,o;if(!(s<1+(n?0:-1))){if(r>=s)if(a=t[s],a!=null&&typeof a=="object"&&a.constructor===Object)n=a[e],o=!0;else{if(r!==s)return;n=a}else n=t[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[r]=i,i}return n}}function xt(t,e,n,i){zs(t),Ht(t=t.v,0|t[Be],e,n,i)}function Ht(t,e,n,i,r){const s=n+(r?0:-1);var a=t.length-1;if(a>=1+(r?0:-1)&&s>=a){const o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return s<=a?(t[s]=i,e):(i!==void 0&&(n>=(a=(e??=0|t[Be])>>14&1023||536870912)?i!=null&&(t[a+(r?0:-1)]={[n]:i}):t[s]=i),e)}function Ar(){return Iy===void 0?2:4}function wr(t,e,n,i,r){let s=t.v,a=0|s[Be];i=Dn(t,a)?1:i,r=!!r||i===3,i===2&&qs(t)&&(s=t.v,a=0|s[Be]);let o=(t=Ld(s,e))===Br?7:0|t[Be],l=Pd(o,a);var u=!(4&l);if(u){4&l&&(t=Qn(t),o=0,l=Pr(l,a),a=Ht(s,a,e,t));let c=0,d=0;for(;c<t.length;c++){const f=n(t[c]);f!=null&&(t[d++]=f)}d<c&&(t.length=d),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==o&&(Xt(t,l),2&l&&Object.freeze(t)),Xg(t,l,s,a,e,i,u,r)}function Xg(t,e,n,i,r,s,a,o){let l=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?Lr(e)||((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&Xt(t,e),Object.freeze(t)):(s===2&&Lr(e)&&(t=Qn(t),l=0,e=Pr(e,i),i=Ht(n,i,r,t)),Lr(e)||(o||(e|=16),e!==l&&Xt(t,e))),2&e||!(4096&e||16&e)||kr(n,i),t}function Ld(t,e,n){return t=zi(t,e,n),Array.isArray(t)?t:Br}function Pd(t,e){return 2&e&&(t|=2),1|t}function Lr(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Yg(t){return Sd(t,!0)}function Jg(t){t=Qn(t);for(let e=0;e<t.length;e++){const n=t[e]=Qn(t[e]);Array.isArray(n[1])&&(n[1]=Pa(n[1]))}return Sa(t)}function er(t,e,n,i){zs(t),Ht(t=t.v,0|t[Be],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Vs(t,e,n){if(2&e)throw Error();const i=Os(e);let r=Ld(t,n,i),s=r===Br?7:0|r[Be],a=Pd(s,e);return(2&a||Lr(a)||16&a)&&(a===s||Lr(a)||Xt(r,a),r=Qn(r),s=0,a=Pr(a,e),Ht(t,e,n,r,i)),a&=-13,a!==s&&Xt(r,a),r}function pu(t,e){var n=z0;return Nd(Dd(t=t.v),t,void 0,n)===e?e:-1}function Dd(t){if(Us)return t[ia]??(t[ia]=new Map);if(ia in t)return t[ia];const e=new Map;return Object.defineProperty(t,ia,{value:e}),e}function Kg(t,e,n,i,r){const s=Dd(t),a=Nd(s,t,e,n,r);return a!==i&&(a&&(e=Ht(t,e,a,void 0,r)),s.set(n,i)),e}function Nd(t,e,n,i,r){let s=t.get(i);if(s!=null)return s;s=0;for(let a=0;a<i.length;a++){const o=i[a];zi(e,o,r)!=null&&(s!==0&&(n=Ht(e,n,s,void 0,r)),s=o)}return t.set(i,s),s}function Id(t,e,n){let i=0|t[Be];const r=Os(i),s=zi(t,n,r);let a;if(s!=null&&s[Ts]===As){if(!Dn(s))return qs(s),s.v;a=s.v}else Array.isArray(s)&&(a=s);if(a){const o=0|a[Be];2&o&&(a=ks(a,o))}return a=Rr(a,e),a!==s&&Ht(t,i,n,a,r),a}function Zg(t,e,n,i,r){let s=!1;if((i=zi(t,i,r,(a=>{const o=Ad(a,n,!1,e);return s=o!==a&&o!=null,o})))!=null)return s&&!Dn(i)&&kr(t,e),i}function ft(t,e,n,i){let r=t.v,s=0|r[Be];if((e=Zg(r,s,e,n,i))==null)return e;if(s=0|r[Be],!Dn(t,s)){const a=Cd(e);a!==e&&(qs(t)&&(r=t.v,s=0|r[Be]),s=Ht(r,s,n,e=a,i),kr(r,s))}return e}function Qg(t,e,n,i,r,s,a,o){var l=Dn(t,n);s=l?1:s,a=!!a||s===3,l=o&&!l,(s===2||l)&&qs(t)&&(n=0|(e=t.v)[Be]);var u=(t=Ld(e,r))===Br?7:0|t[Be],c=Pd(u,n);if(o=!(4&c)){var d=t,f=n;const m=!!(2&c);m&&(f|=2);let v=!m,_=!0,g=0,h=0;for(;g<d.length;g++){const M=Ad(d[g],i,!1,f);if(M instanceof i){if(!m){const T=Dn(M);v&&=!T,_&&=T}d[h++]=M}}h<g&&(d.length=h),c|=4,c=_?-4097&c:4096|c,c=v?8|c:-9&c}if(c!==u&&(Xt(t,c),2&c&&Object.freeze(t)),l&&!(8&c||!t.length&&(s===1||s===4&&(2&c||!(16&c)&&32&n)))){for(Lr(c)&&(t=Qn(t),c=Pr(c,n),n=Ht(e,n,r,t)),i=t,l=c,u=0;u<i.length;u++)(d=i[u])!==(c=Cd(d))&&(i[u]=c);l|=8,Xt(t,c=l=i.length?4096|l:-4097&l)}return Xg(t,c,e,n,r,s,o,a)}function Vi(t,e,n){const i=t.v;return Qg(t,i,0|i[Be],e,n,Ar(),!1,!0)}function e0(t){return t==null&&(t=void 0),t}function $e(t,e,n,i,r){return xt(t,n,i=e0(i),r),i&&!Dn(i)&&kr(t.v),t}function da(t,e,n,i){e:{var r=i=e0(i);zs(t);const s=t.v;let a=0|s[Be];if(r==null){const o=Dd(s);if(Nd(o,s,a,n)!==e)break e;o.set(n,0)}else a=Kg(s,a,n,e);Ht(s,a,e,r)}i&&!Dn(i)&&kr(t.v)}function Pr(t,e){return-273&(2&e?2|t:-3&t)}function Fd(t,e,n,i){var r=i;zs(t),t=Qg(t,i=t.v,0|i[Be],n,e,2,!0),r=r??new n,t.push(r),e=n=t===Br?7:0|t[Be],(r=Dn(r))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&Xt(t,n),r||kr(i)}function Hn(t,e,n){return Bs(Lt(t,e,void 0,n))}function Ot(t,e){return Lt(t,e,void 0,void 0,di)??0}function Gi(t,e,n){if(n!=null){if(typeof n!="number"||!rl(n))throw Pc("int32");n|=0}xt(t,e,n)}function Ge(t,e,n){xt(t,e,ua(n))}function Nn(t,e,n){er(t,e,Ia(n),"")}function Oo(t,e,n){{zs(t);const a=t.v;let o=0|a[Be];if(n==null)Ht(a,o,e);else{var i=t=n===Br?7:0|n[Be],r=Lr(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=Qn(n),i=0,t=Pr(t,o),s=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,r=0;r<n.length;r++){const l=n[r],u=Hg(l);Object.is(l,u)||(s&&(n=Qn(n),i=0,t=Pr(t,o),s=!1),n[r]=u)}t!==i&&(s&&(n=Qn(n),t=Pr(t,o)),Xt(n,t)),Ht(a,o,e,n)}}}function ol(t,e,n){zs(t),wr(t,e,en,2,!0).push(Hg(n))}var ns=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function Ud(t,e){if(typeof t=="string")return new ns(Rg(t),e);if(Array.isArray(t))return new ns(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new ns(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new ns(t,!1);if(t.constructor===mi)return e=bd(t)||new Uint8Array(0),new ns(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new ns(t,!1);throw Error()}function Od(t,e){let n,i=0,r=0,s=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(Dr(t,o),!(128&n))return e(i>>>0,r>>>0);throw Error()}function Bd(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return Dr(t,n),!!(127&e)}throw Error()}function ar(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return Dr(t,n),r}function _i(t){return ar(t)>>>0}function Bo(t){var e=t.h;const n=t.g;var i=e[n],r=e[n+1];const s=e[n+2];return e=e[n+3],Dr(t,t.g+4),t=2*((r=(i<<0|r<<8|s<<16|e<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:t*(1/0):i==0?1401298464324817e-60*t*r:t*Math.pow(2,i-150)*(r+8388608)}function aM(t){return ar(t)}function Dr(t,e){if(t.g=e,e>t.l)throw Error()}function t0(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function n0(t,e){if(e==0)return Fr();var n=t0(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):zy?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Fr():new mi(n,Ms)}var tp=[];function i0(t,e,n,i){if(ko.length){const r=ko.pop();return r.o(i),r.g.init(t,e,n,i),r}return new oM(t,e,n,i)}function r0(t){t.g.clear(),t.l=-1,t.h=-1,ko.length<100&&ko.push(t)}function s0(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=_i(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function To(t){switch(t.h){case 0:t.h!=0?To(t):Bd(t.g);break;case 1:Dr(t=t.g,t.g+8);break;case 2:if(t.h!=2)To(t);else{var e=_i(t.g);Dr(t=t.g,t.g+e)}break;case 5:Dr(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!s0(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}To(t)}break;default:throw Error()}}function Fa(t,e,n){const i=t.g.l;var r=_i(t.g);let s=(r=t.g.g+r)-i;if(s<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),s=r-t.g.g),s)throw Error();return t.g.g=r,t.g.l=i,e}function kd(t){var e=_i(t.g),n=t0(t=t.g,e);if(t=t.h,by){var i,r=t;(i=du)||(i=du=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(co===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),co=!0}catch{co=!1}}throw!co&&(du=void 0),o}}else{e=(s=n)+e,n=[];let o,l=null;for(;s<e;){var a=t[s++];a<128?n.push(a):a<224?s>=e?_r():(o=t[s++],a<194||(192&o)!=128?(s--,_r()):n.push((31&a)<<6|63&o)):a<240?s>=e-1?_r():(o=t[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[s++]))!=128?(s--,_r()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?_r():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,_r()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):_r(),n.length>=8192&&(l=Bh(l,n),n.length=0)}s=Bh(l,n)}return s}function a0(t){const e=_i(t.g);return n0(t.g,e)}function ll(t,e,n){var i=_i(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var oM=class{constructor(t,e,n,i){if(tp.length){const r=tp.pop();r.init(t,e,n,i),t=r}else t=new class{constructor(r,s,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,a,o)}init(r,s,a,{Y:o=!1,ea:l=!1}={}){this.Y=o,this.ea=l,r&&(r=Ud(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:t=!1}={}){this.ha=t}},ko=[];function np(t){return t?/^\d+$/.test(t)?(il(t),new Fc(Rt,kt)):null:lM||=new Fc(0,0)}var Fc=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let lM;function ip(t){return t?/^-?\d+$/.test(t)?(il(t),new Uc(Rt,kt)):null:uM||=new Uc(0,0)}var Uc=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let uM;function ds(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Gs(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function ul(t,e){if(e>=0)Gs(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function qd(t){var e=Rt;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function Rs(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function jn(t,e,n){Gs(t.g,8*e+n)}function zd(t,e){return jn(t,e,2),e=t.g.end(),Rs(t,e),e.push(t.h),e}function Vd(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function cl(t,e,n){jn(t,e,2),Gs(t.g,n.length),Rs(t,t.g.end()),Rs(t,n)}function qo(t,e,n,i){n!=null&&(e=zd(t,e),i(n,t),Vd(t,e))}function bi(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var Gd=bi(),o0=bi(),Hd=bi(),jd=bi(),$d=bi(),l0=bi(),cM=bi(),dl=bi(),u0=bi(),c0=bi();function Si(t,e,n){var i=t.v;Ln&&Ln in i&&(i=i[Ln])&&delete i[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var ke=class{constructor(t,e){this.v=$g(t,e,void 0,2048)}toJSON(){return jg(this)}j(){var t=jM,e=this.v,n=t.g,i=Ln;if(Us&&i&&e[i]?.[n]!=null&&Es(Py,3),e=t.g,Hh&&Ln&&Hh===void 0&&(i=(n=this.v)[Ln])&&(i=i.da))try{i(n,e,eM)}catch(r){Tg(r)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[Be];return Rd(this,t,e)?wd(this,t,!0):new this.constructor(ks(t,e,!1))}};ke.prototype[Ts]=As,ke.prototype.toString=function(){return this.v.toString()};var Hs=class{constructor(t,e,n){this.g=t,this.h=e,t=Gd,this.l=!!t&&n===t||!1}};function fl(t,e){return new Hs(t,e,Gd)}function d0(t,e,n,i,r){qo(t,n,m0(e,i),r)}const dM=fl((function(t,e,n,i,r){return t.h===2&&(Fa(t,Id(e,i,n),r),!0)}),d0),fM=fl((function(t,e,n,i,r){return t.h===2&&(Fa(t,Id(e,i,n),r),!0)}),d0);var hl=Symbol(),pl=Symbol(),Oc=Symbol(),rp=Symbol(),sp=Symbol();let f0,h0;function qr(t,e,n,i){var r=i[t];if(r)return r;(r={}).qa=i,r.T=(function(d){switch(typeof d){case"boolean":return iM||=[0,void 0,!0];case"number":return d>0?void 0:d===0?rM||=[0,void 0]:[-d,void 0];case"string":return[0,d];case"object":return d}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++a])=="function"&&(r.ma=!0,f0??=s,h0??=i[a+1],s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var l=0;l<s.length;l++)o[s[l]]=s;s=i[++a]}for(l=1;s!==void 0;){let d;typeof s=="number"&&(l+=s,s=i[++a]);var u=void 0;if(s instanceof Hs?d=s:(d=dM,a--),d?.l){s=i[++a],u=i;var c=a;typeof s=="function"&&(s=s(),u[c]=s),u=s}for(c=l+1,typeof(s=i[++a])=="number"&&s<0&&(c-=s,s=i[++a]);l<c;l++){const f=o[l];u?n(r,l,d,u,f):e(r,l,d,f)}}return i[t]=r}function p0(t){return Array.isArray(t)?t[0]instanceof Hs?t:[fM,t]:[t,void 0]}function m0(t,e){return t instanceof ke?t.v:Array.isArray(t)?Rr(t,e):void 0}function Wd(t,e,n,i){const r=n.g;t[e]=i?(s,a,o)=>r(s,a,o,i):r}function Xd(t,e,n,i,r){const s=n.g;let a,o;t[e]=(l,u,c)=>s(l,u,c,o||=qr(pl,Wd,Xd,i).T,a||=Yd(i),r)}function Yd(t){let e=t[Oc];if(e!=null)return e;const n=qr(pl,Wd,Xd,t);return e=n.ma?(i,r)=>f0(i,r,n):(i,r)=>{for(;s0(r)&&r.h!=4;){var s=r.l,a=n[s];if(a==null){var o=n.ba;o&&(o=o[s])&&(o=pM(o))!=null&&(a=n[s]=o)}if(a==null||!a(r,i,s)){if(a=(o=r).m,To(o),o.ha)var l=void 0;else l=o.g.g-a,o.g.g=a,l=n0(o.g,l);a=void 0,o=i,l&&((a=o[Ln]??(o[Ln]=new Ic))[s]??(a[s]=[])).push(l)}}return(i=sl(i))&&(i.da=n.qa[sp]),!0},t[Oc]=e,t[sp]=hM.bind(t),e}function hM(t,e,n,i){var r=this[pl];const s=this[Oc],a=Rr(void 0,r.T),o=sl(t);if(o){var l=!1,u=r.ba;if(u){if(r=(c,d,f)=>{if(f.length!==0)if(u[d])for(const m of f){c=i0(m);try{l=!0,s(a,c)}finally{r0(c)}}else i?.(t,d,f)},e==null)Uo(o,r);else if(o!=null){const c=o[e];c&&r(o,e,c)}if(l){let c=0|t[Be];if(2&c&&2048&c&&!n?.Ka)throw Error();const d=Os(c),f=(m,v)=>{if(zi(t,m,d)!=null){if(n?.Qa===1)return;throw Error()}v!=null&&(c=Ht(t,c,m,v,d)),delete o[m]};e==null?Ig(a,0|a[Be],((m,v)=>{f(m,v)})):f(e,zi(a,e,d))}}}}function pM(t){const e=(t=p0(t))[0].g;if(t=t[1]){const n=Yd(t),i=qr(pl,Wd,Xd,t).T;return(r,s,a)=>e(r,s,a,i,n)}return e}function ml(t,e,n){t[e]=n.h}function gl(t,e,n,i){let r,s;const a=n.h;t[e]=(o,l,u)=>a(o,l,u,s||=qr(hl,ml,gl,i).T,r||=g0(i))}function g0(t){let e=t[rp];if(!e){const n=qr(hl,ml,gl,t);e=(i,r)=>v0(i,r,n),t[rp]=e}return e}function v0(t,e,n){Ig(t,0|t[Be],((i,r)=>{if(r!=null){var s=(function(a,o){var l=a[o];if(l)return l;if((l=a.ba)&&(l=l[o])){var u=(l=p0(l))[0].h;if(l=l[1]){const c=g0(l),d=qr(hl,ml,gl,l).T;l=a.ma?h0(d,c):(f,m,v)=>u(f,m,v,d,c)}else l=u;return a[o]=l}})(n,i);s?s(e,r,i):i<500||Es(Dc,3)}})),(t=sl(t))&&Uo(t,((i,r,s)=>{for(Rs(e,e.g.end()),i=0;i<s.length;i++)Rs(e,bd(s[i])||new Uint8Array(0))}))}const mM=Pn(0);function js(t,e){if(Array.isArray(e)){var n=0|e[Be];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),(t=-1537&(5|n))!==n&&Xt(e,t),2&t&&Object.freeze(e),e}}function on(t,e,n){return new Hs(t,e,n)}function $s(t,e,n){return new Hs(t,e,n)}function ln(t,e,n){Ht(t,0|t[Be],e,n,Os(0|t[Be]))}var gM=fl((function(t,e,n,i,r){if(t.h!==2)return!1;if(t=Qn(t=Fa(t,Rr([void 0,void 0],i),r)),r=Os(i=0|e[Be]),2&i)throw Error();let s=zi(e,n,r);if(s instanceof qi)(2&s.J)!=0?(s=s.V(),s.push(t),Ht(e,i,n,s,r)):s.Ma(t);else if(Array.isArray(s)){var a=0|s[Be];8192&a||Xt(s,a|=8192),2&a&&(s=Jg(s),Ht(e,i,n,s,r)),s.push(t)}else Ht(e,i,n,Sa([t]),r);return!0}),(function(t,e,n,i,r){if(e instanceof qi)e.forEach(((s,a)=>{qo(t,n,Rr([a,s],i),r)}));else if(Array.isArray(e)){for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&qo(t,n,Rr(a,i),r)}Sa(e)}}));function _0(t,e,n){(e=di(e))!=null&&(jn(t,n,5),t=t.g,yd(e),qd(t))}function x0(t,e,n){if(e=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(Da(64,i));if(Na(i)){if(r==="string")return zg(i);if(r==="number")return Td(i)}})(e),e!=null&&(typeof e=="string"&&ip(e),e!=null))switch(jn(t,n,0),typeof e){case"number":t=t.g,ws(e),ds(t,Rt,kt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Uc(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),ds(t.g,n.h,n.g);break;default:n=ip(e),ds(t.g,n.h,n.g)}}function b0(t,e,n){(e=Bs(e))!=null&&e!=null&&(jn(t,n,0),ul(t.g,e))}function S0(t,e,n){(e=Bg(e))!=null&&(jn(t,n,0),t.g.g.push(e?1:0))}function y0(t,e,n){(e=en(e))!=null&&cl(t,n,Eg(e))}function M0(t,e,n,i,r){qo(t,n,m0(e,i),r)}function E0(t,e,n){(e=e==null||typeof e=="string"||e instanceof mi?e:void 0)!=null&&cl(t,n,Ud(e,!0).buffer)}function T0(t,e,n){(e=kg(e))!=null&&e!=null&&(jn(t,n,0),Gs(t.g,e))}function A0(t,e,n){return(t.h===5||t.h===2)&&(e=Vs(e,0|e[Be],n),t.h==2?ll(t,Bo,e):e.push(Bo(t.g)),!0)}var qt=on((function(t,e,n){return t.h===5&&(ln(e,n,Bo(t.g)),!0)}),_0,dl),vM=$s(A0,(function(t,e,n){if((e=js(di,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(jn(i,r,5),i=i.g,yd(s),qd(i))}}),dl),Jd=$s(A0,(function(t,e,n){if((e=js(di,e))!=null&&e.length){jn(t,n,2),Gs(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,yd(e[i]),qd(n)}}),dl),_M=on((function(t,e,n){return t.h===5&&(ln(e,n,(t=Bo(t.g))===0?void 0:t),!0)}),_0,dl),or=on((function(t,e,n){return t.h!==0?t=!1:(ln(e,n,Od(t.g,Og)),t=!0),t}),x0,l0),mu=on((function(t,e,n){return t.h!==0?e=!1:(ln(e,n,(t=Od(t.g,Og))===mM?void 0:t),e=!0),e}),x0,l0),xM=on((function(t,e,n){return t.h!==0?t=!1:(ln(e,n,Od(t.g,Gy)),t=!0),t}),(function(t,e,n){if(e=(function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(Hy(64,i));if(Na(i)){if(r==="string")return r=Cs(Number(i)),Or(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(il(i),i=ya(Rt,kt))),i;if(r==="number")return(i=Cs(i))>=0&&Or(i)||(ws(i),i=Ug(Rt,kt)),i}})(e),e!=null&&(typeof e=="string"&&np(e),e!=null))switch(jn(t,n,0),typeof e){case"number":t=t.g,ws(e),ds(t,Rt,kt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Fc(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),ds(t.g,n.h,n.g);break;default:n=np(e),ds(t.g,n.h,n.g)}}),cM),Gt=on((function(t,e,n){return t.h===0&&(ln(e,n,ar(t.g)),!0)}),b0,jd),Ua=$s((function(t,e,n){return(t.h===0||t.h===2)&&(e=Vs(e,0|e[Be],n),t.h==2?ll(t,ar,e):e.push(ar(t.g)),!0)}),(function(t,e,n){if((e=js(Bs,e))!=null&&e.length){n=zd(t,n);for(let i=0;i<e.length;i++)ul(t.g,e[i]);Vd(t,n)}}),jd),os=on((function(t,e,n){return t.h===0&&(ln(e,n,(t=ar(t.g))===0?void 0:t),!0)}),b0,jd),Pt=on((function(t,e,n){return t.h===0&&(ln(e,n,Bd(t.g)),!0)}),S0,o0),Nr=on((function(t,e,n){return t.h===0&&(ln(e,n,(t=Bd(t.g))===!1?void 0:t),!0)}),S0,o0),rn=$s((function(t,e,n){return t.h===2&&(t=kd(t),Vs(e,0|e[Be],n).push(t),!0)}),(function(t,e,n){if((e=js(en,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&cl(i,r,Eg(s))}}),Hd),nr=on((function(t,e,n){return t.h===2&&(ln(e,n,(t=kd(t))===""?void 0:t),!0)}),y0,Hd),yt=on((function(t,e,n){return t.h===2&&(ln(e,n,kd(t)),!0)}),y0,Hd),Kt=(function(t,e,n=Gd){return new Hs(t,e,n)})((function(t,e,n,i,r){return t.h===2&&(i=Rr(void 0,i),Vs(e,0|e[Be],n).push(i),Fa(t,i,r),!0)}),(function(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)M0(t,e[s],n,i,r);1&(t=0|e[Be])||Xt(e,1|t)}})),At=fl((function(t,e,n,i,r,s){if(t.h!==2)return!1;let a=0|e[Be];return Kg(e,a,s,n,Os(a)),Fa(t,e=Id(e,i,n),r),!0}),M0),w0=on((function(t,e,n){return t.h===2&&(ln(e,n,a0(t)),!0)}),E0,u0),bM=$s((function(t,e,n){return(t.h===0||t.h===2)&&(e=Vs(e,0|e[Be],n),t.h==2?ll(t,_i,e):e.push(_i(t.g)),!0)}),(function(t,e,n){if((e=js(kg,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(jn(i,r,0),Gs(i.g,s))}}),$d),SM=on((function(t,e,n){return t.h===0&&(ln(e,n,(t=_i(t.g))===0?void 0:t),!0)}),T0,$d),an=on((function(t,e,n){return t.h===0&&(ln(e,n,ar(t.g)),!0)}),(function(t,e,n){(e=Bs(e))!=null&&(e=parseInt(e,10),jn(t,n,0),ul(t.g,e))}),c0);class yM{constructor(e,n){var i=Fn;this.g=e,this.h=n,this.m=ft,this.j=$e,this.defaultValue=void 0,this.l=i.Oa!=null?Fg:void 0}register(){el(this)}}function yi(t,e){return new yM(t,e)}function lr(t,e){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=i0(n,void 0,void 0,s);try{const a=new t,o=a.v;Yd(e)(o,n);var r=a}finally{r0(n)}}return r}}function vl(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};v0(this.v,e,qr(hl,ml,gl,t)),Rs(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return e.l=[n],n}}var ap=class extends ke{constructor(t){super(t)}},op=[0,nr,on((function(t,e,n){return t.h===2&&(ln(e,n,(t=a0(t))===Fr()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof ke){const i=e.Ra;return void(i?(e=i(e),e!=null&&cl(t,n,Ud(e,!0).buffer)):Es(Dc,3))}if(Array.isArray(e))return void Es(Dc,3)}E0(t,e,n)}),u0)];let gu,lp=globalThis.trustedTypes;function up(t){var e;return gu===void 0&&(gu=(function(){let n=null;if(!lp)return n;try{const i=r=>r;n=lp.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=gu)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function fo(t,...e){if(e.length===0)return up(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return up(n)}var C0=[0,Gt,an,Pt,-1,Ua,an,-1,Pt],MM=class extends ke{constructor(t){super(t)}},R0=[0,Pt,yt,Pt,an,-1,$s((function(t,e,n){return(t.h===0||t.h===2)&&(e=Vs(e,0|e[Be],n),t.h==2?ll(t,aM,e):e.push(ar(t.g)),!0)}),(function(t,e,n){if((e=js(Bs,e))!=null&&e.length){n=zd(t,n);for(let i=0;i<e.length;i++)ul(t.g,e[i]);Vd(t,n)}}),c0),yt,-1,[0,Pt,-1],an,Pt,-1],L0=[0,3,Pt,-1,2,[0,[2],Gt,At,[0,on((function(t,e,n){return t.h===0&&(ln(e,n,_i(t.g)),!0)}),T0,$d)]],[0,an,Pt,an,Pt,an,Pt,yt,-1],[0,[3,4],yt,-1,At,[0,Gt],At,[0,an]],[0]],P0=[0,yt,-2],cp=class extends ke{constructor(t){super(t)}},D0=[0],N0=[0,Gt,Pt,1,Pt,-4],Fn=class extends ke{constructor(t){super(t,2)}},jt={};jt[336783863]=[0,yt,Pt,-1,Gt,[0,[1,2,3,4,5,6,7,8,9],At,D0,At,R0,At,P0,At,N0,At,C0,At,[0,yt,-2],At,[0,yt,an],At,L0,At,[0,an,-1,Pt]],[0,yt],Pt,[0,[1,3],[2,4],At,[0,Ua],-1,At,[0,rn],-1,Kt,[0,yt,-1]],yt];var dp=[0,mu,-1,Nr,-3,mu,Ua,nr,os,mu,-1,Nr,os,Nr,-2,nr];function wt(t,e){ol(t,3,e)}function at(t,e){ol(t,4,e)}var bn=class extends ke{constructor(t){super(t,500)}o(t){return $e(this,0,7,t)}},fa=[-1,{}],fp=[0,yt,1,fa],hp=[0,yt,rn,fa];function $n(t,e){Fd(t,1,bn,e)}function Dt(t,e){ol(t,10,e)}function ht(t,e){ol(t,15,e)}var Un=class extends ke{constructor(t){super(t,500)}o(t){return $e(this,0,1001,t)}},I0=[-500,Kt,[-500,nr,-1,rn,-3,[-2,jt,Pt],Kt,op,os,-1,fp,hp,Kt,[0,nr,Nr],nr,dp,os,rn,987,rn],4,Kt,[-500,yt,-1,[-1,{}],998,yt],Kt,[-500,yt,rn,-1,[-2,{},Pt],997,rn,-1],os,Kt,[-500,yt,rn,fa,998,rn],rn,os,fp,hp,Kt,[0,nr,-1,fa],rn,-2,dp,nr,-1,Nr,[0,Nr,SM],978,fa,Kt,op];Un.prototype.g=vl(I0);var EM=lr(Un,I0),TM=class extends ke{constructor(t){super(t)}},F0=class extends ke{constructor(t){super(t)}g(){return Vi(this,TM,1)}},U0=[0,Kt,[0,Gt,qt,yt,-1]],_l=lr(F0,U0),AM=class extends ke{constructor(t){super(t)}},wM=class extends ke{constructor(t){super(t)}},vu=class extends ke{constructor(t){super(t)}l(){return ft(this,AM,2)}g(){return Vi(this,wM,5)}},O0=lr(class extends ke{constructor(t){super(t)}},[0,rn,Ua,Jd,[0,an,[0,Gt,-3],[0,qt,-3],[0,Gt,-1,[0,Kt,[0,Gt,-2]]],Kt,[0,qt,-1,yt,qt]],yt,-1,or,Kt,[0,Gt,qt],rn,or]),B0=class extends ke{constructor(t){super(t)}},fs=lr(class extends ke{constructor(t){super(t)}},[0,Kt,[0,qt,-4]]),k0=class extends ke{constructor(t){super(t)}},Oa=lr(class extends ke{constructor(t){super(t)}},[0,Kt,[0,qt,-4]]),CM=class extends ke{constructor(t){super(t)}},RM=[0,Gt,-1,Jd,an],q0=class extends ke{constructor(t){super(t)}};q0.prototype.g=vl([0,qt,-4,or]);var LM=class extends ke{constructor(t){super(t)}},PM=lr(class extends ke{constructor(t){super(t)}},[0,Kt,[0,1,Gt,yt,U0],or]),pp=class extends ke{constructor(t){super(t)}},DM=class extends ke{constructor(t){super(t)}na(){const t=Lt(this,1,void 0,void 0,Yg);return t??Fr()}},NM=class extends ke{constructor(t){super(t)}},z0=[1,2],IM=lr(class extends ke{constructor(t){super(t)}},[0,Kt,[0,z0,At,[0,Jd],At,[0,w0],Gt,yt],or]),Kd=class extends ke{constructor(t){super(t)}},V0=[0,yt,Gt,qt,rn,-1],mp=class extends ke{constructor(t){super(t)}},FM=[0,Pt,-1],gp=class extends ke{constructor(t){super(t)}},Ao=[1,2,3,4,5,6],zo=class extends ke{constructor(t){super(t)}g(){return Lt(this,1,void 0,void 0,Yg)!=null}l(){return en(Lt(this,2))!=null}},Ut=class extends ke{constructor(t){super(t)}g(){return Bg(Lt(this,2))??!1}},G0=[0,w0,yt,[0,Gt,or,-1],[0,xM,or]],Vt=[0,G0,Pt,[0,Ao,At,N0,At,R0,At,C0,At,D0,At,P0,At,L0],an],xl=class extends ke{constructor(t){super(t)}},Zd=[0,Vt,qt,-1,Gt],UM=yi(502141897,xl);jt[502141897]=Zd;var OM=lr(class extends ke{constructor(t){super(t)}},[0,[0,an,-1,vM,bM],RM]),H0=class extends ke{constructor(t){super(t)}},j0=class extends ke{constructor(t){super(t)}},Bc=[0,Vt,qt,[0,Vt],Pt],BM=yi(508968150,j0);jt[508968150]=[0,Vt,Zd,Bc,qt,[0,[0,G0]]],jt[508968149]=Bc;var is=class extends ke{constructor(t){super(t)}l(){return ft(this,Kd,2)}g(){xt(this,2)}},$0=[0,Vt,V0];jt[478825465]=$0;var kM=class extends ke{constructor(t){super(t)}},W0=class extends ke{constructor(t){super(t)}},Qd=class extends ke{constructor(t){super(t)}},ef=class extends ke{constructor(t){super(t)}},X0=class extends ke{constructor(t){super(t)}},vp=[0,Vt,[0,Vt],$0,-1],Y0=[0,Vt,qt,Gt],tf=[0,Vt,qt],J0=[0,Vt,Y0,tf,qt],qM=yi(479097054,X0);jt[479097054]=[0,Vt,J0,vp],jt[463370452]=vp,jt[464864288]=Y0;var zM=yi(462713202,ef);jt[462713202]=J0,jt[474472470]=tf;var VM=class extends ke{constructor(t){super(t)}},K0=class extends ke{constructor(t){super(t)}},Z0=class extends ke{constructor(t){super(t)}},Q0=class extends ke{constructor(t){super(t)}},nf=[0,Vt,qt,-1,Gt],kc=[0,Vt,qt,Pt];Q0.prototype.g=vl([0,Vt,tf,[0,Vt],Zd,Bc,nf,kc]);var ev=class extends ke{constructor(t){super(t)}},GM=yi(456383383,ev);jt[456383383]=[0,Vt,V0];var tv=class extends ke{constructor(t){super(t)}},HM=yi(476348187,tv);jt[476348187]=[0,Vt,FM];var nv=class extends ke{constructor(t){super(t)}},_p=class extends ke{constructor(t){super(t)}},iv=[0,an,-1],jM=yi(458105876,class extends ke{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[Be];return t=Dn(this,n),e=(function(i,r,s,a){var o=_p;!a&&qs(i)&&(s=0|(r=i.v)[Be]);var l=zi(r,2);if(i=!1,l==null){if(a)return Zh();l=[]}else if(l.constructor===qi){if(!(2&l.J)||a)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[Be])):l=[];if(a){if(!l.length)return Zh();i||(i=!0,Pa(l))}else i&&(i=!1,Sa(l),l=Jg(l));return!i&&32&s&&La(l,32),s=Ht(r,s,2,a=new qi(l,o,Wy,void 0)),i||kr(r,s),a})(this,e,n,t),!t&&_p&&(e.ra=!0),e}});jt[458105876]=[0,iv,gM,[!0,or,[0,yt,-1,rn]],[0,Ua,Pt,an]];var rf=class extends ke{constructor(t){super(t)}},rv=yi(458105758,rf);jt[458105758]=[0,Vt,yt,iv];var _u=class extends ke{constructor(t){super(t)}},xp=[0,_M,-1,Nr],$M=class extends ke{constructor(t){super(t)}},sv=class extends ke{constructor(t){super(t)}},qc=[1,2];sv.prototype.g=vl([0,qc,At,xp,At,[0,Kt,xp]]);var av=class extends ke{constructor(t){super(t)}},WM=yi(443442058,av);jt[443442058]=[0,Vt,yt,Gt,qt,rn,-1,Pt,qt],jt[514774813]=nf;var ov=class extends ke{constructor(t){super(t)}},XM=yi(516587230,ov);function zc(t,e){return e=e?e.clone():new Kd,t.displayNamesLocale!==void 0?xt(e,1,Ia(t.displayNamesLocale)):t.displayNamesLocale===void 0&&xt(e,1),t.maxResults!==void 0?Gi(e,2,t.maxResults):"maxResults"in t&&xt(e,2),t.scoreThreshold!==void 0?Ge(e,3,t.scoreThreshold):"scoreThreshold"in t&&xt(e,3),t.categoryAllowlist!==void 0?Oo(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&xt(e,4),t.categoryDenylist!==void 0?Oo(e,5,t.categoryDenylist):"categoryDenylist"in t&&xt(e,5),e}function lv(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function sf(t,e=-1,n=""){return{categories:t.map((i=>({index:Hn(i,1)??0??-1,score:Ot(i,2)??0,categoryName:en(Lt(i,3))??""??"",displayName:en(Lt(i,4))??""??""}))),headIndex:e,headName:n}}function YM(t){const e={classifications:Vi(t,LM,1).map((n=>sf(ft(n,F0,4)?.g()??[],Hn(n,2)??0,en(Lt(n,3))??"")))};return(function(n){return n==null?n:typeof n=="bigint"?(Nc(n)?n=Number(n):(n=Da(64,n),n=Nc(n)?Number(n):String(n)),n):Na(n)?typeof n=="number"?Td(n):zg(n):void 0})(Lt(t,2,void 0,void 0,Fo))!=null&&(e.timestampMs=lv(Lt(t,2,void 0,void 0,Fo)??Wg)),e}function uv(t){var e=wr(t,3,di,Ar()),n=wr(t,2,Bs,Ar()),i=wr(t,1,en,Ar()),r=wr(t,9,en,Ar());const s={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)s.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((e=ft(t,vu,4)?.l())&&(s.boundingBox={originX:Hn(e,1,Ki)??0,originY:Hn(e,2,Ki)??0,width:Hn(e,3,Ki)??0,height:Hn(e,4,Ki)??0,angle:0}),ft(t,vu,4)?.g().length)for(const a of ft(t,vu,4).g())s.keypoints.push({x:Lt(a,1,void 0,Ki,di)??0,y:Lt(a,2,void 0,Ki,di)??0,score:Lt(a,4,void 0,Ki,di)??0,label:en(Lt(a,3,void 0,Ki))??""});return s}function bl(t){const e=[];for(const n of Vi(t,k0,1))e.push({x:Ot(n,1)??0,y:Ot(n,2)??0,z:Ot(n,3)??0,visibility:Ot(n,4)??0});return e}function ha(t){const e=[];for(const n of Vi(t,B0,1))e.push({x:Ot(n,1)??0,y:Ot(n,2)??0,z:Ot(n,3)??0,visibility:Ot(n,4)??0});return e}function bp(t){return Array.from(t,(e=>e>127?e-256:e))}function Sp(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let ho;jt[516587230]=[0,Vt,nf,kc,qt],jt[518928384]=kc;const JM=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function cv(t){if(t)return!0;if(ho===void 0)try{await WebAssembly.instantiate(JM),ho=!0}catch{ho=!1}return ho}async function po(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await cv(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var rs=class{};function dv(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function yp(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const n=self.import;n?await n(t.toString()):await import(t.toString())}}}function fv(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function ze(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function Mp(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=fv(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function Ep(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function ai(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function Zi(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}rs.forVisionTasks=function(t,e=!1){return po("vision",t??fo``,e)},rs.forTextTasks=function(t,e=!1){return po("text",t??fo``,e)},rs.forGenAiTasks=function(t,e=!1){return po("genai",t??fo``,e)},rs.forAudioTasks=function(t,e=!1){return po("audio",t??fo``,e)},rs.isSimdSupported=function(t=!1){return cv(t)};async function KM(t,e,n,i){return t=await(async(r,s,a,o,l)=>{if(s&&await yp(s),!self.ModuleFactory||a&&(await yp(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function xu(t,e){const n=ft(t.baseOptions,zo,1)||new zo;typeof e=="string"?(xt(n,2,Ia(e)),xt(n,1)):e instanceof Uint8Array&&(xt(n,1,Sd(e,!1)),xt(n,2)),$e(t.baseOptions,0,1,n)}function Tp(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function Ie(t,e){t.C=Math.max(t.C,e)}function Sl(t,e){t.B=new bn,Nn(t.B,2,"PassThroughCalculator"),wt(t.B,"free_memory"),at(t.B,"free_memory_unused_out"),Dt(e,"free_memory"),$n(e,t.B)}function Ls(t,e){wt(t.B,e),at(t.B,e+"_unused_out")}function yl(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var Vc=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){const n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(ft(this.baseOptions,zo,1)?.g()||ft(this.baseOptions,zo,1)?.l()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,r){let s=ft(i.baseOptions,gp,3);if(!s){var a=s=new gp,o=new cp;da(a,4,Ao,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new MM,da(r,2,Ao,a)):(r=s,a=new cp,da(r,4,Ao,a))),$e(i.baseOptions,0,3,s)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),xu(this,"/model.dat"),this.m(),this.L()}));if(n.modelAssetBuffer instanceof Uint8Array)xu(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i})(n.modelAssetBuffer).then((i=>{xu(this,i),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=EM(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,Tp(this)}finishProcessing(){this.g.finishProcessing(),Tp(this)}close(){this.B=void 0,this.g.closeGraph()}};function rr(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Vc.prototype.close=Vc.prototype.close;class ZM{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Ap(t,e,n){const i=t.g;if(n=rr(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function wp(t,e){const n=t.g,i=rr(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=rr(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=rr(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new ZM(n,i,r,s)}function af(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function QM(t,e,n,i){return af(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=wp(t,!0)),n=t.u):(t.A||(t.A=wp(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function hv(t,e,n){return af(t,e),t=rr(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function pv(t,e,n){af(t,e),t.B||(t.B=rr(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function eE(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var mv=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=rr(t.createProgram(),"Failed to create WebGL program"),this.X=Ap(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=Ap(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Pi(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Gc(t){var e=Pi(t,1);if(!e){if(e=Pi(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=Ps(t);var n=of(t);if(pv(n,i,gv(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function gv(t){let e=Pi(t,2);if(!e){const n=Ps(t);e=_v(t);const i=Gc(t),r=vv(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),Hc(t)}return e}function Ps(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=rr(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function vv(t){if(t=Ps(t),!mo)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))mo=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");mo=t.R16F}return mo}function of(t){return t.l||(t.l=new mv),t.l}function _v(t){const e=Ps(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Pi(t,2);return n||(n=hv(of(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Hc(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var mo,Jt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--Cp===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Pi(this,0)}ka(){return!!Pi(this,1)}R(){return!!Pi(this,2)}ja(){return(e=Pi(t=this,0))||(e=Gc(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return Gc(this)}N(){return gv(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Ps(this),r=of(this);i.activeTexture(i.TEXTURE1),n=hv(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=vv(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),pv(r,i,n),QM(r,i,!1,(()=>{_v(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Hc(this)})),eE(r),Hc(this)}}t.push(n)}return new Jt(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ps(this).deleteTexture(Pi(this,2)),Cp=-1}};Jt.prototype.close=Jt.prototype.close,Jt.prototype.clone=Jt.prototype.clone,Jt.prototype.getAsWebGLTexture=Jt.prototype.N,Jt.prototype.getAsFloat32Array=Jt.prototype.ia,Jt.prototype.getAsUint8Array=Jt.prototype.ja,Jt.prototype.hasWebGLTexture=Jt.prototype.R,Jt.prototype.hasFloat32Array=Jt.prototype.ka,Jt.prototype.hasUint8Array=Jt.prototype.Fa;var Cp=250;function ti(...t){return t.map((([e,n])=>({start:e,end:n})))}const tE=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((Rp=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:dv()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),ze(this,i||"input_audio",(s=>{ze(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){ai(this,"__graph_config__",(e=>{t(e)})),ze(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),ze(this,i,(a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)}))}addGpuBufferToStream(t,e,n){ze(this,e,(i=>{const[r,s]=Mp(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(t,e,n){ze(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){ze(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){ze(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){ze(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){ze(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){ze(this,e,(i=>{ze(this,t,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(t,e,n){ze(this,e,(i=>{Ep(this,Object.keys(t),(r=>{Ep(this,Object.values(t),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){ze(this,n,(r=>{ze(this,e,(s=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(t,e){ze(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){ze(this,e,(i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(t,e,n){ze(this,e,(i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(t,e,n){ze(this,e,(i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(t,e,n){ze(this,e,(i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(t,e,n){ze(this,e,(i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(t,e,n){ze(this,e,(i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)ze(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(t,e){ze(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){ze(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){ze(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){ze(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){ze(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){ze(this,e,(n=>{ze(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){ze(this,n,(i=>{ze(this,e,(r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(t,e){ze(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){ze(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){ze(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){ze(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){ze(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){ze(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)ze(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){ai(this,t,e),ze(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){Zi(this,t,e),ze(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){ai(this,t,e),ze(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){Zi(this,t,e),ze(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){ai(this,t,e),ze(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){Zi(this,t,e),ze(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){ai(this,t,e),ze(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){Zi(this,t,e),ze(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){ai(this,t,e),ze(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){Zi(this,t,e),ze(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){ai(this,t,e),ze(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){Zi(this,t,e),ze(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){ai(this,t,e),ze(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){Zi(this,t,e),ze(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),ai(this,t,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)})),ze(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Rp{get ga(){return this.i}pa(t,e,n){ze(this,e,(i=>{const[r,s]=Mp(this,t,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)}))}Z(t,e){ai(this,t,e),ze(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){Zi(this,t,e),ze(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var Rp,ni=class extends tE{};async function lt(t,e,n){return(async function(i,r,s,a){return KM(i,r,s,a)})(t,n.canvas??(dv()?void 0:document.createElement("canvas")),e,n)}function xv(t,e,n,i){if(t.U){const s=new q0;if(n?.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ge(s,1,(r.left+r.right)/2),Ge(s,2,(r.top+r.bottom)/2),Ge(s,4,r.right-r.left),Ge(s,3,r.bottom-r.top)}else Ge(s,1,.5),Ge(s,2,.5),Ge(s,4,1),Ge(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Ge(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[a,o]=fv(e);n=Ot(s,3)*o/a,r=Ot(s,4)*a/o,Ge(s,4,n),Ge(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.pa(e,t.X,i??performance.now()),t.finishProcessing()}function ii(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");xv(t,e,n,t.C+1)}function Mi(t,e,n,i){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");xv(t,e,n,i)}function Ds(t,e,n,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new Jt([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var In=class extends Vc{constructor(t,e,n,i){super(t),this.g=t,this.X=e,this.U=n,this.oa=i,this.P=new mv}l(t,e=!0){if("runningMode"in t&&xt(this.baseOptions,2,Ma(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};In.prototype.close=In.prototype.close;var kn=class extends In{constructor(t,e){super(new ni(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},$e(t=this.h=new xl,0,1,e=new Ut),Ge(this.h,2,.5),Ge(this.h,3,.3)}get baseOptions(){return ft(this.h,Ut,1)}set baseOptions(t){$e(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Ge(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Ge(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},ii(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Mi(this,t,n,e),this.j}m(){var t=new Un;Dt(t,"image_in"),Dt(t,"norm_rect_in"),ht(t,"detections");const e=new Fn;Si(e,UM,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect_in"),at(n,"DETECTIONS:detections"),n.o(e),$n(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=O0(s),this.j.detections.push(uv(i));Ie(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};kn.prototype.detectForVideo=kn.prototype.G,kn.prototype.detect=kn.prototype.F,kn.prototype.setOptions=kn.prototype.o,kn.createFromModelPath=async function(t,e){return lt(kn,t,{baseOptions:{modelAssetPath:e}})},kn.createFromModelBuffer=function(t,e){return lt(kn,t,{baseOptions:{modelAssetBuffer:e}})},kn.createFromOptions=function(t,e){return lt(kn,t,e)};var lf=ti([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),uf=ti([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),cf=ti([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),bv=ti([474,475],[475,476],[476,477],[477,474]),df=ti([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),ff=ti([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Sv=ti([469,470],[470,471],[471,472],[472,469]),hf=ti([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),yv=[...lf,...uf,...cf,...df,...ff,...hf],Mv=ti([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Lp(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Ct=class extends In{constructor(t,e){super(new ni(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,$e(t=this.h=new j0,0,1,e=new Ut),this.A=new H0,$e(this.h,0,3,this.A),this.u=new xl,$e(this.h,0,2,this.u),Gi(this.u,4,1),Ge(this.u,2,.5),Ge(this.A,2,.5),Ge(this.h,4,.5)}get baseOptions(){return ft(this.h,Ut,1)}set baseOptions(t){$e(this.h,0,1,t)}o(t){return"numFaces"in t&&Gi(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Ge(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Ge(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Ge(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return Lp(this),ii(this,t,e),this.j}G(t,e,n){return Lp(this),Mi(this,t,n,e),this.j}m(){var t=new Un;Dt(t,"image_in"),Dt(t,"norm_rect"),ht(t,"face_landmarks");const e=new Fn;Si(e,BM,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),at(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),$n(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=Oa(s),this.j.faceLandmarks.push(bl(i));Ie(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{Ie(this,i)})),this.outputFaceBlendshapes&&(ht(t,"blendshapes"),at(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=_l(s),this.j.faceBlendshapes.push(sf(i.g()??[]));Ie(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{Ie(this,i)}))),this.outputFacialTransformationMatrixes&&(ht(t,"face_geometry"),at(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=ft(i=OM(s),CM,2))&&this.j.facialTransformationMatrixes.push({rows:Hn(i,1)??0??0,columns:Hn(i,2)??0??0,data:wr(i,3,di,Ar()).slice()??[]});Ie(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{Ie(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ct.prototype.detectForVideo=Ct.prototype.G,Ct.prototype.detect=Ct.prototype.F,Ct.prototype.setOptions=Ct.prototype.o,Ct.createFromModelPath=function(t,e){return lt(Ct,t,{baseOptions:{modelAssetPath:e}})},Ct.createFromModelBuffer=function(t,e){return lt(Ct,t,{baseOptions:{modelAssetBuffer:e}})},Ct.createFromOptions=function(t,e){return lt(Ct,t,e)},Ct.FACE_LANDMARKS_LIPS=lf,Ct.FACE_LANDMARKS_LEFT_EYE=uf,Ct.FACE_LANDMARKS_LEFT_EYEBROW=cf,Ct.FACE_LANDMARKS_LEFT_IRIS=bv,Ct.FACE_LANDMARKS_RIGHT_EYE=df,Ct.FACE_LANDMARKS_RIGHT_EYEBROW=ff,Ct.FACE_LANDMARKS_RIGHT_IRIS=Sv,Ct.FACE_LANDMARKS_FACE_OVAL=hf,Ct.FACE_LANDMARKS_CONTOURS=yv,Ct.FACE_LANDMARKS_TESSELATION=Mv;var pf=ti([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Pp(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Dp(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Np(t,e=!0){const n=[];for(const r of t){var i=_l(r);t=[];for(const s of i.g())i=e&&Hn(s,1)!=null?Hn(s,1)??0:-1,t.push({score:Ot(s,2)??0,index:i,categoryName:en(Lt(s,3))??""??"",displayName:en(Lt(s,4))??""??""});n.push(t)}return n}var Tn=class extends In{constructor(t,e){super(new ni(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],$e(t=this.j=new X0,0,1,e=new Ut),this.u=new ef,$e(this.j,0,2,this.u),this.D=new Qd,$e(this.u,0,3,this.D),this.A=new W0,$e(this.u,0,2,this.A),this.h=new kM,$e(this.j,0,3,this.h),Ge(this.A,2,.5),Ge(this.u,4,.5),Ge(this.D,2,.5)}get baseOptions(){return ft(this.j,Ut,1)}set baseOptions(t){$e(this.j,0,1,t)}o(t){if(Gi(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ge(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ge(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ge(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new is,n=e,i=zc(t.cannedGesturesClassifierOptions,ft(this.h,is,3)?.l());$e(n,0,2,i),$e(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&ft(this.h,is,3)?.g();return t.customGesturesClassifierOptions?($e(n=e=new is,0,2,i=zc(t.customGesturesClassifierOptions,ft(this.h,is,4)?.l())),$e(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&ft(this.h,is,4)?.g(),this.l(t)}Ha(t,e){return Pp(this),ii(this,t,e),Dp(this)}Ia(t,e,n){return Pp(this),Mi(this,t,n,e),Dp(this)}m(){var t=new Un;Dt(t,"image_in"),Dt(t,"norm_rect"),ht(t,"hand_gestures"),ht(t,"hand_landmarks"),ht(t,"world_hand_landmarks"),ht(t,"handedness");const e=new Fn;Si(e,qM,this.j);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),at(n,"HAND_GESTURES:hand_gestures"),at(n,"LANDMARKS:hand_landmarks"),at(n,"WORLD_LANDMARKS:world_hand_landmarks"),at(n,"HANDEDNESS:handedness"),n.o(e),$n(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=Oa(s);const a=[];for(const o of Vi(i,k0,1))a.push({x:Ot(o,1)??0,y:Ot(o,2)??0,z:Ot(o,3)??0,visibility:Ot(o,4)??0});this.landmarks.push(a)}Ie(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Ie(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=fs(s);const a=[];for(const o of Vi(i,B0,1))a.push({x:Ot(o,1)??0,y:Ot(o,2)??0,z:Ot(o,3)??0,visibility:Ot(o,4)??0});this.worldLandmarks.push(a)}Ie(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Ie(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...Np(i,!1)),Ie(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{Ie(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...Np(i)),Ie(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function Ip(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}Tn.prototype.recognizeForVideo=Tn.prototype.Ia,Tn.prototype.recognize=Tn.prototype.Ha,Tn.prototype.setOptions=Tn.prototype.o,Tn.createFromModelPath=function(t,e){return lt(Tn,t,{baseOptions:{modelAssetPath:e}})},Tn.createFromModelBuffer=function(t,e){return lt(Tn,t,{baseOptions:{modelAssetBuffer:e}})},Tn.createFromOptions=function(t,e){return lt(Tn,t,e)},Tn.HAND_CONNECTIONS=pf;var An=class extends In{constructor(t,e){super(new ni(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],$e(t=this.h=new ef,0,1,e=new Ut),this.u=new Qd,$e(this.h,0,3,this.u),this.j=new W0,$e(this.h,0,2,this.j),Gi(this.j,3,1),Ge(this.j,2,.5),Ge(this.u,2,.5),Ge(this.h,4,.5)}get baseOptions(){return ft(this.h,Ut,1)}set baseOptions(t){$e(this.h,0,1,t)}o(t){return"numHands"in t&&Gi(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ge(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ge(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ge(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ii(this,t,e),Ip(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Mi(this,t,n,e),Ip(this)}m(){var t=new Un;Dt(t,"image_in"),Dt(t,"norm_rect"),ht(t,"hand_landmarks"),ht(t,"world_hand_landmarks"),ht(t,"handedness");const e=new Fn;Si(e,zM,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),at(n,"LANDMARKS:hand_landmarks"),at(n,"WORLD_LANDMARKS:world_hand_landmarks"),at(n,"HANDEDNESS:handedness"),n.o(e),$n(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=Oa(s),this.landmarks.push(bl(i));Ie(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Ie(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=fs(s),this.worldLandmarks.push(ha(i));Ie(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Ie(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const l of i){i=_l(l);const u=[];for(const c of i.g())u.push({score:Ot(c,2)??0,index:Hn(c,1)??0??-1,categoryName:en(Lt(c,3))??""??"",displayName:en(Lt(c,4))??""??""});o.push(u)}a.call(s,...o),Ie(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};An.prototype.detectForVideo=An.prototype.G,An.prototype.detect=An.prototype.F,An.prototype.setOptions=An.prototype.o,An.createFromModelPath=function(t,e){return lt(An,t,{baseOptions:{modelAssetPath:e}})},An.createFromModelBuffer=function(t,e){return lt(An,t,{baseOptions:{modelAssetBuffer:e}})},An.createFromOptions=function(t,e){return lt(An,t,e)},An.HAND_CONNECTIONS=pf;var Ev=ti([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Fp(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Up(t){try{if(!t.D)return t.h;t.D(t.h)}finally{yl(t)}}function go(t,e){t=Oa(t),e.push(bl(t))}var Tt=class extends In{constructor(t,e){super(new ni(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,$e(t=this.j=new Q0,0,1,e=new Ut),this.I=new Qd,$e(this.j,0,2,this.I),this.W=new VM,$e(this.j,0,3,this.W),this.u=new xl,$e(this.j,0,4,this.u),this.O=new H0,$e(this.j,0,5,this.O),this.A=new K0,$e(this.j,0,6,this.A),this.M=new Z0,$e(this.j,0,7,this.M),Ge(this.u,2,.5),Ge(this.u,3,.3),Ge(this.O,2,.5),Ge(this.A,2,.5),Ge(this.A,3,.3),Ge(this.M,2,.5),Ge(this.I,2,.5)}get baseOptions(){return ft(this.j,Ut,1)}set baseOptions(t){$e(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Ge(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Ge(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Ge(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Ge(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Ge(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Ge(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Ge(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,Fp(this),ii(this,t,i),Up(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,Fp(this),Mi(this,t,r,e),Up(this)}m(){var t=new Un;Dt(t,"input_frames_image"),ht(t,"pose_landmarks"),ht(t,"pose_world_landmarks"),ht(t,"face_landmarks"),ht(t,"left_hand_landmarks"),ht(t,"left_hand_world_landmarks"),ht(t,"right_hand_landmarks"),ht(t,"right_hand_world_landmarks");const e=new Fn,n=new ap;Nn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(r,s){if(s!=null)if(Array.isArray(s))xt(r,2,al(s,0,Ea));else{if(!(typeof s=="string"||s instanceof mi||xd(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");er(r,2,Sd(s,!1),Fr())}})(n,this.j.g());const i=new bn;Nn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Fd(i,8,ap,n),wt(i,"IMAGE:input_frames_image"),at(i,"POSE_LANDMARKS:pose_landmarks"),at(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),at(i,"FACE_LANDMARKS:face_landmarks"),at(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),at(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),at(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),at(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),$n(t,i),Sl(this,t),this.g.attachProtoListener("pose_landmarks",((r,s)=>{go(r,this.h.poseLandmarks),Ie(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{Ie(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=fs(r),a.push(ha(r)),Ie(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{Ie(this,r)})),this.outputPoseSegmentationMasks&&(at(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ls(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[Ds(this,r,!0,!this.D)],Ie(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],Ie(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{go(r,this.h.faceLandmarks),Ie(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{Ie(this,r)})),this.outputFaceBlendshapes&&(ht(t,"extra_blendshapes"),at(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=_l(r),a.push(sf(r.g()??[]))),Ie(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{Ie(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{go(r,this.h.leftHandLandmarks),Ie(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{Ie(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=fs(r),a.push(ha(r)),Ie(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{Ie(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{go(r,this.h.rightHandLandmarks),Ie(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{Ie(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=fs(r),a.push(ha(r)),Ie(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{Ie(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Tt.prototype.detectForVideo=Tt.prototype.G,Tt.prototype.detect=Tt.prototype.F,Tt.prototype.setOptions=Tt.prototype.o,Tt.createFromModelPath=function(t,e){return lt(Tt,t,{baseOptions:{modelAssetPath:e}})},Tt.createFromModelBuffer=function(t,e){return lt(Tt,t,{baseOptions:{modelAssetBuffer:e}})},Tt.createFromOptions=function(t,e){return lt(Tt,t,e)},Tt.HAND_CONNECTIONS=pf,Tt.POSE_CONNECTIONS=Ev,Tt.FACE_LANDMARKS_LIPS=lf,Tt.FACE_LANDMARKS_LEFT_EYE=uf,Tt.FACE_LANDMARKS_LEFT_EYEBROW=cf,Tt.FACE_LANDMARKS_LEFT_IRIS=bv,Tt.FACE_LANDMARKS_RIGHT_EYE=df,Tt.FACE_LANDMARKS_RIGHT_EYEBROW=ff,Tt.FACE_LANDMARKS_RIGHT_IRIS=Sv,Tt.FACE_LANDMARKS_FACE_OVAL=hf,Tt.FACE_LANDMARKS_CONTOURS=yv,Tt.FACE_LANDMARKS_TESSELATION=Mv;var qn=class extends In{constructor(t,e){super(new ni(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},$e(t=this.h=new ev,0,1,e=new Ut)}get baseOptions(){return ft(this.h,Ut,1)}set baseOptions(t){$e(this.h,0,1,t)}o(t){return $e(this.h,0,2,zc(t,ft(this.h,Kd,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},ii(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},Mi(this,t,n,e),this.j}m(){var t=new Un;Dt(t,"input_image"),Dt(t,"norm_rect"),ht(t,"classifications");const e=new Fn;Si(e,GM,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),wt(n,"IMAGE:input_image"),wt(n,"NORM_RECT:norm_rect"),at(n,"CLASSIFICATIONS:classifications"),n.o(e),$n(t,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=YM(PM(i)),Ie(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};qn.prototype.classifyForVideo=qn.prototype.ta,qn.prototype.classify=qn.prototype.sa,qn.prototype.setOptions=qn.prototype.o,qn.createFromModelPath=function(t,e){return lt(qn,t,{baseOptions:{modelAssetPath:e}})},qn.createFromModelBuffer=function(t,e){return lt(qn,t,{baseOptions:{modelAssetBuffer:e}})},qn.createFromOptions=function(t,e){return lt(qn,t,e)};var wn=class extends In{constructor(t,e){super(new ni(t,e),"image_in","norm_rect",!0),this.h=new tv,this.embeddings={embeddings:[]},$e(t=this.h,0,1,e=new Ut)}get baseOptions(){return ft(this.h,Ut,1)}set baseOptions(t){$e(this.h,0,1,t)}o(t){var e=this.h,n=ft(this.h,mp,2);return n=n?n.clone():new mp,t.l2Normalize!==void 0?xt(n,1,Ma(t.l2Normalize)):"l2Normalize"in t&&xt(n,1),t.quantize!==void 0?xt(n,2,Ma(t.quantize)):"quantize"in t&&xt(n,2),$e(e,0,2,n),this.l(t)}za(t,e){return ii(this,t,e),this.embeddings}Aa(t,e,n){return Mi(this,t,n,e),this.embeddings}m(){var t=new Un;Dt(t,"image_in"),Dt(t,"norm_rect"),ht(t,"embeddings_out");const e=new Fn;Si(e,HM,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),at(n,"EMBEDDINGS:embeddings_out"),n.o(e),$n(t,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=IM(i),this.embeddings=(function(s){return{embeddings:Vi(s,NM,1).map((a=>{const o={headIndex:Hn(a,3)??0??-1,headName:en(Lt(a,4))??""??""};var l=a.v;return Zg(l,0|l[Be],pp,pu(a,1))!==void 0?(a=wr(a=ft(a,pp,pu(a,1),void 0),1,di,Ar()),o.floatEmbedding=a.slice()):(l=new Uint8Array(0),o.quantizedEmbedding=ft(a,DM,pu(a,2),void 0)?.na()?.h()??l),o})),timestampMs:lv(Lt(s,2,void 0,void 0,Fo)??Wg)}})(i),Ie(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};wn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Sp(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Sp(bp(t.quantizedEmbedding),bp(e.quantizedEmbedding))}return t},wn.prototype.embedForVideo=wn.prototype.Aa,wn.prototype.embed=wn.prototype.za,wn.prototype.setOptions=wn.prototype.o,wn.createFromModelPath=function(t,e){return lt(wn,t,{baseOptions:{modelAssetPath:e}})},wn.createFromModelBuffer=function(t,e){return lt(wn,t,{baseOptions:{modelAssetBuffer:e}})},wn.createFromOptions=function(t,e){return lt(wn,t,e)};var jc=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function nE(t){const e=(function(n){return Vi(n,bn,1)})(t.ca()).filter((n=>(en(Lt(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(ft(e[0],Fn,7)?.j()?.g()??new Map).forEach(((n,i)=>{t.u[Number(i)]=en(Lt(n,1))??""}))}function Op(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Bp(t){try{const e=new jc(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{yl(t)}}jc.prototype.close=jc.prototype.close;var _n=class extends In{constructor(t,e){super(new ni(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new rf,this.A=new nv,$e(this.h,0,3,this.A),$e(t=this.h,0,1,e=new Ut)}get baseOptions(){return ft(this.h,Ut,1)}set baseOptions(t){$e(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?xt(this.h,2,Ia(t.displayNamesLocale)):"displayNamesLocale"in t&&xt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){nE(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Op(this),ii(this,t,i),Bp(this)}La(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Op(this),Mi(this,t,r,e),Bp(this)}Da(){return this.u}m(){var t=new Un;Dt(t,"image_in"),Dt(t,"norm_rect");const e=new Fn;Si(e,rv,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),n.o(e),$n(t,n),Sl(this,t),this.outputConfidenceMasks&&(ht(t,"confidence_masks"),at(n,"CONFIDENCE_MASKS:confidence_masks"),Ls(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Ds(this,s,!0,!this.j))),Ie(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Ie(this,i)}))),this.outputCategoryMask&&(ht(t,"category_mask"),at(n,"CATEGORY_MASK:category_mask"),Ls(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Ds(this,i,!1,!this.j),Ie(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Ie(this,i)}))),ht(t,"quality_scores"),at(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,Ie(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};_n.prototype.getLabels=_n.prototype.Da,_n.prototype.segmentForVideo=_n.prototype.La,_n.prototype.segment=_n.prototype.segment,_n.prototype.setOptions=_n.prototype.o,_n.createFromModelPath=function(t,e){return lt(_n,t,{baseOptions:{modelAssetPath:e}})},_n.createFromModelBuffer=function(t,e){return lt(_n,t,{baseOptions:{modelAssetBuffer:e}})},_n.createFromOptions=function(t,e){return lt(_n,t,e)};var $c=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};$c.prototype.close=$c.prototype.close;var oi=class extends In{constructor(t,e){super(new ni(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new rf,this.u=new nv,$e(this.h,0,3,this.u),$e(t=this.h,0,1,e=new Ut)}get baseOptions(){return ft(this.h,Ut,1)}set baseOptions(t){$e(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new sv,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new _u;er(s,3,Ma(!0),!1),er(s,1,ua(e.keypoint.x),0),er(s,2,ua(e.keypoint.y),0),da(i,1,qc,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new $M;for(s of e.scribble)er(e=new _u,3,Ma(!0),!1),er(e,1,ua(s.x),0),er(e,2,ua(s.y),0),Fd(o,1,_u,e);da(i,2,qc,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),ii(this,t,r);e:{try{const o=new $c(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break e}this.j(o)}finally{yl(this)}a=void 0}return a}m(){var t=new Un;Dt(t,"image_in"),Dt(t,"roi_in"),Dt(t,"norm_rect_in");const e=new Fn;Si(e,rv,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),wt(n,"IMAGE:image_in"),wt(n,"ROI:roi_in"),wt(n,"NORM_RECT:norm_rect_in"),n.o(e),$n(t,n),Sl(this,t),this.outputConfidenceMasks&&(ht(t,"confidence_masks"),at(n,"CONFIDENCE_MASKS:confidence_masks"),Ls(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Ds(this,s,!0,!this.j))),Ie(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Ie(this,i)}))),this.outputCategoryMask&&(ht(t,"category_mask"),at(n,"CATEGORY_MASK:category_mask"),Ls(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Ds(this,i,!1,!this.j),Ie(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Ie(this,i)}))),ht(t,"quality_scores"),at(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,Ie(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};oi.prototype.segment=oi.prototype.segment,oi.prototype.setOptions=oi.prototype.o,oi.createFromModelPath=function(t,e){return lt(oi,t,{baseOptions:{modelAssetPath:e}})},oi.createFromModelBuffer=function(t,e){return lt(oi,t,{baseOptions:{modelAssetBuffer:e}})},oi.createFromOptions=function(t,e){return lt(oi,t,e)};var zn=class extends In{constructor(t,e){super(new ni(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},$e(t=this.h=new av,0,1,e=new Ut)}get baseOptions(){return ft(this.h,Ut,1)}set baseOptions(t){$e(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?xt(this.h,2,Ia(t.displayNamesLocale)):"displayNamesLocale"in t&&xt(this.h,2),t.maxResults!==void 0?Gi(this.h,3,t.maxResults):"maxResults"in t&&xt(this.h,3),t.scoreThreshold!==void 0?Ge(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&xt(this.h,4),t.categoryAllowlist!==void 0?Oo(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&xt(this.h,5),t.categoryDenylist!==void 0?Oo(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&xt(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},ii(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Mi(this,t,n,e),this.j}m(){var t=new Un;Dt(t,"input_frame_gpu"),Dt(t,"norm_rect"),ht(t,"detections");const e=new Fn;Si(e,WM,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),wt(n,"IMAGE:input_frame_gpu"),wt(n,"NORM_RECT:norm_rect"),at(n,"DETECTIONS:detections"),n.o(e),$n(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=O0(s),this.j.detections.push(uv(i));Ie(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};zn.prototype.detectForVideo=zn.prototype.G,zn.prototype.detect=zn.prototype.F,zn.prototype.setOptions=zn.prototype.o,zn.createFromModelPath=async function(t,e){return lt(zn,t,{baseOptions:{modelAssetPath:e}})},zn.createFromModelBuffer=function(t,e){return lt(zn,t,{baseOptions:{modelAssetBuffer:e}})},zn.createFromOptions=function(t,e){return lt(zn,t,e)};var Wc=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function kp(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function qp(t){try{const e=new Wc(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{yl(t)}}Wc.prototype.close=Wc.prototype.close;var Cn=class extends In{constructor(t,e){super(new ni(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,$e(t=this.h=new ov,0,1,e=new Ut),this.A=new Z0,$e(this.h,0,3,this.A),this.j=new K0,$e(this.h,0,2,this.j),Gi(this.j,4,1),Ge(this.j,2,.5),Ge(this.A,2,.5),Ge(this.h,4,.5)}get baseOptions(){return ft(this.h,Ut,1)}set baseOptions(t){$e(this.h,0,1,t)}o(t){return"numPoses"in t&&Gi(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Ge(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Ge(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Ge(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,kp(this),ii(this,t,i),qp(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,kp(this),Mi(this,t,r,e),qp(this)}m(){var t=new Un;Dt(t,"image_in"),Dt(t,"norm_rect"),ht(t,"normalized_landmarks"),ht(t,"world_landmarks"),ht(t,"segmentation_masks");const e=new Fn;Si(e,XM,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),at(n,"NORM_LANDMARKS:normalized_landmarks"),at(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),$n(t,n),Sl(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=Oa(s),this.landmarks.push(bl(i));Ie(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],Ie(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=fs(s),this.worldLandmarks.push(ha(i));Ie(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],Ie(this,i)})),this.outputSegmentationMasks&&(at(n,"SEGMENTATION_MASK:segmentation_masks"),Ls(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>Ds(this,s,!0,!this.u))),Ie(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],Ie(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Cn.prototype.detectForVideo=Cn.prototype.G,Cn.prototype.detect=Cn.prototype.F,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(t,e){return lt(Cn,t,{baseOptions:{modelAssetPath:e}})},Cn.createFromModelBuffer=function(t,e){return lt(Cn,t,{baseOptions:{modelAssetBuffer:e}})},Cn.createFromOptions=function(t,e){return lt(Cn,t,e)},Cn.POSE_CONNECTIONS=Ev;function iE(t){return t==="arriere"?"arriere":"avant"}function rE(t){return t==="avant"?"arriere":"avant"}function sE(t){return{video:{facingMode:{ideal:t==="arriere"?"environment":"user"}},audio:!1}}function aE(t){return t==="avant"}function oE(){return"Je vais allumer ma caméra pour te voir et réagir avec toi. Rien n’est enregistré ni envoyé : tout reste dans ton appareil. Tu peux l’éteindre quand tu veux."}const Tv="nath.camera.face";function lE(t){return iE(t.getItem(Tv))}function uE(t,e){t.setItem(Tv,e)}const cE="https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",dE="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm";let bu=null;function fE(){return bu||(bu=rs.forVisionTasks(dE).then(t=>Ct.createFromOptions(t,{baseOptions:{modelAssetPath:cE},runningMode:"VIDEO",numFaces:1,outputFaceBlendshapes:!0}))),bu}async function hE(t,e,n){const i=await fE();let r=null,s=!0,a=performance.now();const o=async u=>{r&&r.getTracks().forEach(c=>c.stop()),r=await navigator.mediaDevices.getUserMedia(sE(u)),t.srcObject=r,t.style.transform=aE(u)?"scaleX(-1)":"none",await t.play()},l=()=>{if(s){if(t.readyState>=2){const u=performance.now(),d=i.detectForVideo(t,u).faceBlendshapes?.[0]?.categories;if(d){a=u;const f=m=>d.find(v=>v.categoryName===m)?.score??0;n({smile:(f("mouthSmileLeft")+f("mouthSmileRight"))/2,browDown:(f("browDownLeft")+f("browDownRight"))/2,eyeBlink:(f("eyeBlinkLeft")+f("eyeBlinkRight"))/2,jawOpen:f("jawOpen")})}else u-a>2e3&&n({smile:0,browDown:0,eyeBlink:0,jawOpen:0})}requestAnimationFrame(l)}};return await o(e),requestAnimationFrame(l),{eteindre(){s=!1,r&&(r.getTracks().forEach(u=>u.stop()),r=null),t.srcObject=null},async basculer(u){await o(u)}}}class pE{constructor(e,n,i,r){this.video=e,this.storage=n,this.onShapes=i,this.onEtat=r,this.face=lE(n)}video;storage;onShapes;onEtat;manege=null;face;get ouverte(){return this.manege!=null}get faceCourante(){return this.face}async basculer(){return this.manege?(this.manege.eteindre(),this.manege=null,this.onEtat(!1),!1):(this.manege=await hE(this.video,this.face,this.onShapes),this.onEtat(!0),!0)}async basculerFace(){return this.face=rE(this.face),uE(this.storage,this.face),this.manege&&await this.manege.basculer(this.face),this.face}}function mE(t){const e={joie:t.smile*1.2,tension:t.browDown*1+(t.eyeBlink<.2?.1:0),tristesse:t.eyeBlink*.8+t.jawOpen*.2-t.smile,calme:.15};return Object.entries(e).sort((n,i)=>i[1]-n[1])[0][0]}function gE(t=20){let e="calme",n=null,i=0;return r=>r===e?(n=null,i=0,e):(r===n?i++:(n=r,i=1),i>=t&&(e=r,n=null,i=0),e)}function vE(t){const e=t.reduce((n,i)=>n+i,0)/t.length;return t.map(n=>n-e)}function _E(t,e){return t.map((n,i)=>{const r=Math.max(0,i-e+1);return t.slice(r,i+1).reduce((s,a)=>s+a,0)/(i+1-r)})}function xE(t){const e=[];for(let n=1;n<t.length;n++)t[n-1]<=0&&t[n]>0&&e.push(n);return e}function bE(t,e){if(t.length<Math.floor(e*4))return null;const n=vE(t.slice(-Math.floor(e*10))),i=_E(n,5),r=xE(i);if(r.length<3)return null;const s=(r[r.length-1]-r[0])/(r.length-1),a=60*e/s;return a>=30&&a<=180?a:null}function SE(t,e){if(t.readyState<2)return null;const n=24,i=24;e.drawImage(t,t.videoWidth*.35,t.videoHeight*.35,n,i,0,0,n,i);const r=e.getImageData(0,0,n,i).data;let s=0;for(let a=0;a<r.length;a+=4)s+=.299*r[a]+.587*r[a+1]+.114*r[a+2];return s/(n*i)}function zp(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}const Vp=["Brume","Aube","Zéphyr","Nimbus","Cirrus","Écho","Lueur","Souffle","Voile","Nébuleuse"],Gp=["dorée","bleue","polaire","douce","haute","sereine","vague","claire"];function Su(t){return"#"+(t&16777215).toString(16).padStart(6,"0")}function yE(t){const e=zp(t),n=zp(t+"|2");return{nom:`${Vp[e%Vp.length]} ${Gp[n%Gp.length]}`,palette:[Su(1056832+(e&3092287)),Su(6320272+(e>>8&4144975)),Su(13689072+(e>>16&986895))],musiqueSeed:n}}function ME(t,e){const n=(i,r)=>{const s=t.getBoundingClientRect();e((i-s.left)/s.width,1-(r-s.top)/s.height)};t.addEventListener("pointermove",i=>n(i.clientX,i.clientY)),t.addEventListener("touchmove",i=>{const r=i.touches[0];r&&n(r.clientX,r.clientY)},{passive:!0})}function EE(t){window.addEventListener("deviceorientation",e=>{e.gamma!=null&&e.beta!=null&&t(Math.max(-1,Math.min(1,e.gamma/45)),Math.max(-1,Math.min(1,(e.beta-45)/45)))})}const Hp={calme:[0,2,4,7,9],joie:[0,4,7,11],tristesse:[0,3,5,8,10],tension:[0,1,6,8,11]};function TE(t){return Hp[t]??Hp.calme}function AE(t,e,n){const i=Math.imul(t^Math.imul(e+1,2654435761),2246822507)>>>0,r=TE(n),s=r[i%r.length];return{midi:48+12*((i>>>8)%2)+s,duree:1.5+(i>>>16)%20/10}}function jp(t){return 440*Math.pow(2,(t-69)/12)}let hn=null,Ui=null,wE=0,Av=0,wv="calme",Cv=0,Ml=!1;function $p(){if(!hn||!Ui||Ml)return;const t=AE(Av,wE++,wv),e=hn.currentTime,n=hn.createGain();n.connect(Ui);const i=.16+Cv*.1;n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(i,e+Math.min(1.2,t.duree*.4)),n.gain.exponentialRampToValueAtTime(1e-4,e+t.duree+1.5);const r=hn.createOscillator();r.type="triangle",r.frequency.value=jp(t.midi);const s=hn.createOscillator();s.type="sine",s.frequency.value=jp(t.midi-12);const a=hn.createGain();a.gain.value=.5,s.connect(a),a.connect(n),r.connect(n),r.start(e),s.start(e),r.stop(e+t.duree+1.6),s.stop(e+t.duree+1.6)}function Wp(t){if(hn)return!0;try{hn=new AudioContext,Av=t>>>0,Ui=hn.createGain(),Ui.gain.value=Ml?0:.5;const e=hn.createBiquadFilter();return e.type="lowpass",e.frequency.value=1200,e.Q.value=.4,Ui.connect(e),e.connect(hn.destination),window.setInterval($p,2600),$p(),!0}catch{return!1}}function CE(t){wv=t}function RE(t){Cv=Math.max(0,Math.min(1,t))}function Xp(){Ml=!0,Ui&&hn&&Ui.gain.linearRampToValueAtTime(0,hn.currentTime+.4)}function LE(){Ml=!1,Ui&&hn&&Ui.gain.linearRampToValueAtTime(.5,hn.currentTime+.4)}const Rv="nath.musique";function wo(t){return t.getItem(Rv)==="eteinte"}function PE(t){const e=!wo(t);return t.setItem(Rv,e?"eteinte":"active"),e}const Xc={zero:0,un:1,une:1,deux:2,trois:3,quatre:4,cinq:5,six:6,sept:7,huit:8,neuf:9,dix:10,onze:11,douze:12,treize:13,quatorze:14,quinze:15,seize:16,"dix-sept":17,"dix-huit":18,"dix-neuf":19,vingt:20,cent:100,mille:1e3},DE=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],NE=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],El=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),yu={plus:"plus",additionne:"plus",ajoute:"plus",moins:"moins",retire:"moins",fois:"fois",multiplie:"fois",x:"fois",divise:"divise"},IE=new Set(["si","combien","puis","alors","donne","calcule","calcul","fais","fait","vaut","egal","est","ce","que","quoi","resultat","reponse","nombre","montant"]),FE=/\d+(?:[.,]\d+)?|dix-(?:sept|huit|neuf)|[a-z]+|[()+*/-]/g;function UE(t){const e=El(t).replace(/divise par/g," divise ").replace(/multiplie par/g," fois "),n=[];let i=[];for(const r of e.match(FE)??[]){let s=null;if(/^\d+(?:[.,]\d+)?$/.test(r))s={t:"nb",v:parseFloat(r.replace(",","."))};else if(Object.hasOwn(Xc,r))s={t:"nb",v:Xc[r]};else if(r==="plus"||r==="+")s={t:"op",v:yu[r]??"plus"};else if(r==="moins"||r==="-")s={t:"op",v:"moins"};else if(r==="fois"||r==="multiplie"||r==="x"||r==="*")s={t:"op",v:"fois"};else if(r==="divise"||r==="/")s={t:"op",v:"divise"};else if(yu[r])s={t:"op",v:yu[r]};else if(r==="(")s={t:"ouv"};else if(r===")")s={t:"fer"};else if(IE.has(r))continue;s?i.push(s):i.length&&(n.push(i),i=[])}return i.length&&n.push(i),n}function Yp(t,e){const n=t[e.i];if(!n)return e.echoue=!0,null;if(n.t==="nb")return e.i++,n.v;if(n.t==="ouv"){e.i++;const i=Lv(t,e);if(e.echoue)return null;const r=t[e.i];return!r||r.t!=="fer"?(e.echoue=!0,null):(e.i++,i)}return e.echoue=!0,null}function Jp(t,e){let n=Yp(t,e);for(;!e.echoue;){const i=t[e.i];if(!i||i.t!=="op"||i.v!=="fois"&&i.v!=="divise")break;e.i++,e.ops++;const r=Yp(t,e);if(e.echoue||r==null)return null;if(i.v==="fois")n=n*r;else{if(r===0)return e.echoue=!0,null;n=n/r}}return n}function Lv(t,e){let n=Jp(t,e);for(;!e.echoue;){const i=t[e.i];if(!i||i.t!=="op"||i.v!=="plus"&&i.v!=="moins")break;e.i++,e.ops++;const r=Jp(t,e);if(e.echoue||r==null)return null;n=i.v==="plus"?n+r:n-r}return n}function Pv(t){for(let e of UE(t)){if(e.length>=2&&e[0].t==="op"&&e[1].t==="nb"&&(e=e.slice(1)),!e.some(r=>r.t==="op"))continue;const n={i:0,ops:0,echoue:!1},i=Lv(e,n);if(!n.echoue&&n.ops>0&&n.i===e.length&&i!=null&&Number.isFinite(i))return i}return null}function Dv(t,e){const i=El(t).replace(/divise par/g," divise ").replace(/multiplie par/g," fois ").replace(/\s+/g," ").trim().match(/^(?:(?:et|puis)\s+)*(plus|moins|ajoute|retire|fois|multiplie|divise|x)\s+(\d+(?:[.,]\d+)?|[a-z-]+)\s*[=.!?\s]*$/);if(!i)return null;const r=/^\d/.test(i[2])?parseFloat(i[2].replace(",",".")):Xc[i[2]];if(r==null||Number.isNaN(r))return null;const a={plus:"plus",ajoute:"plus",moins:"moins",retire:"moins",fois:"fois",multiplie:"fois",x:"fois",divise:"divise"}[i[1]];return a==="fois"?e*r:a==="plus"?e+r:a==="moins"?e-r:r===0?null:e/r}function Ve(t){const e=Math.round(t*100)/100;return Number.isInteger(e)?String(e):String(e).replace(".",",")}function OE(t){const e=t.getHours(),n=t.getMinutes();return n===0?`Il est ${e} heures.`:`Il est ${e} h ${String(n).padStart(2,"0")}.`}function BE(t){return`Nous sommes ${DE[t.getDay()]} ${t.getDate()} ${NE[t.getMonth()]} ${t.getFullYear()}.`}function Nv(t){const e=El(t);return/quelle heure|quelle est l heure|l heure est il|quil heure/.test(e)}function Iv(t){const e=El(t);return/quel jour|on est quel jour|quelle date|nous sommes quel/.test(e)}const Ws=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/²/g,"^2").replace(/³/g,"^3").toLowerCase(),fn=String.raw`\d+(?:[.,]\d+)?`,St=t=>parseFloat(t.replace(",","."));function kE(t){if(/^\d+(?:\.\d+)?$/.test(t))return{c:parseFloat(t),d:0};let e=t.match(/^(\d*\.?\d*)x\^(\d+)$/);return e?{c:e[1]===""?1:parseFloat(e[1]),d:parseInt(e[2],10)}:(e=t.match(/^(\d*\.?\d*)x$/),e?{c:e[1]===""?1:parseFloat(e[1]),d:1}:(e=t.match(/^x\/(\d*\.?\d+)$/),e?{c:1/parseFloat(e[1]),d:1}:(e=t.match(/^(\d*\.?\d+)x\/(\d*\.?\d+)$/),e?{c:parseFloat(e[1])/parseFloat(e[2]),d:1}:null)))}function Co(t){const e=t.replace(/\s+/g,"").replace(/\*/g,"");if(!e)return null;const i=(/^[+-]/.test(e)?e:`+${e}`).match(/[+-][^+-]+/g);if(!i)return null;const r=[];for(const s of i){const a=s.startsWith("-"),o=kE(s.slice(1));if(!o||o.d>12)return null;r[o.d]=(r[o.d]??0)+(a?-o.c:o.c)}return r.map(s=>s??0)}const qE={0:"",1:"",2:"²",3:"³"};function Fv(t){const e=[];for(let n=t.length-1;n>=0;n--){const i=t[n]??0;if(i===0&&t.length>1)continue;const r=Math.abs(i);let s;if(n===0)s=Ve(r);else{const a=n>=4?`x^${n}`:`x${qE[n]??""}`;s=r===1?a:`${Ve(r)}${a}`}e.push(e.length===0?i<0?`-${s}`:s:`${i<0?" - ":" + "}${s}`)}return e.length?e.join(""):"0"}function Kp(t,e,n){const i=e*e-4*t*n;if(i<0)return{texte:`aucune solution réelle (Δ = ${Ve(i)} < 0)`,reels:[]};if(i===0)return{texte:`x = ${Ve(-e/(2*t))} (racine double)`,reels:[-e/(2*t)]};const r=(-e+Math.sqrt(i))/(2*t),s=(-e-Math.sqrt(i))/(2*t),a=[r,s].sort((o,l)=>o>=0&&l<0?-1:l>=0&&o<0?1:o-l);return{texte:a.map(o=>`x = ${Ve(o)}`).join(" ou "),reels:a}}function zE(t){const e=Ws(t).replace(/.*\b(?:equation|resous|resoudre|trouve|determiner|determine)\b[:\s]+/i,"");if(!e.includes("x"))return null;if(e.includes("=")){const s=e.split("=");if(s.length!==2)return null;const a=Co(s[0]),o=Co(s[1]);if(!a||!o)return null;const l=Math.max(a.length,o.length),u=Array.from({length:l},(h,M)=>(a[M]??0)-(o[M]??0));for(;u.length>1&&u[u.length-1]===0;)u.pop();const c=u.length-1;if(c>2)return null;if(c===0)return u[0]===0?"tout x convient (identité).":"aucune solution : c’est une absurdité.";if(c===1){if(u[1]===0)return"aucune solution : x disparaît de la comparaison.";const h=u[1],M=-u[0]/h,T=[];return h===1?T.push(`On rassemble les x : x = ${Ve(-u[0])}.`):(T.push(`On rassemble les x d'un côté : ${Ve(h)}x = ${Ve(-u[0])}.`),T.push(`On isole x : x = ${Ve(-u[0])} / ${Ve(h)} = ${Ve(M)}.`)),T.push(`La solution : x = ${Ve(M)}.`),T.join(`
`)}const[d,f,m]=[u[2],u[1],u[0]],v=f*f-4*d*m,_=Kp(d,f,m),g=[`On calcule le discriminant : Δ = b² - 4ac = (${Ve(f)})² - 4 × (${Ve(d)}) × (${Ve(m)}) = ${Ve(v)}.`];return v>0?g.push(`√Δ = ${Ve(Math.sqrt(v))}, puis x = (-b ± √Δ) / 2a.`):v===0?g.push("√Δ = 0, puis x = -b / 2a."):g.push("Δ est négatif : aucune racine à isoler."),g.push(`${v<0?"Conclusion":"Les solutions"} : ${_.texte}.`),g.join(`
`)}const n=Co(e);if(!n)return null;for(;n.length>1&&n[n.length-1]===0;)n.pop();if(n.length-1!==2||n[2]!==1)return null;const i=Kp(n[2],n[1],n[0]);if(i.reels.length!==2||!i.reels.every(s=>Number.isInteger(s)))return null;const r=i.reels.map(s=>s>=0?`(x - ${s})`:`(x + ${Math.abs(s)})`).join("");return[`On cherche deux nombres dont le produit vaut ${Ve(n[0])} et la somme ${Ve(-n[1])} : ${i.reels[0]} et ${i.reels[1]}.`,`${Fv(n)} = ${r}.`].join(`
`)}function VE(t){const n=Ws(t).match(/(?:la\s+)?(?:derivee|dérivée|dérivee)\b(?:\s+de)?\s+(.+)$/);if(!n)return null;let i=n[1].replace(/^(?:f\s*\(\s*x\s*\)|y)\s*=\s*/,""),r=null;const s=i.match(/\ben\s+(\d+(?:[.,]\d+)?)\s*$/);s&&(r=St(s[1]),i=i.slice(0,s.index).trim());const a=Co(i);if(!a)return null;const o=a.slice(1).map((u,c)=>u*(c+1)),l=["On dérive terme à terme : la dérivée de xⁿ est n·xⁿ⁻¹, celle d'une constante est 0.",`f'(x) = ${Fv(o)}.`];if(r!=null){const u=o.reduce((c,d,f)=>c+d*Math.pow(r,f),0);l.push(`Puis on remplace x par ${Ve(r)} : f'(${Ve(r)}) = ${Ve(u)}.`)}return l.join(`
`)}function GE(t){const e=Ws(t).replace(/pourcent/g,"%");let n=e.match(new RegExp(`(${fn})\\s*%\\s*de\\s*(${fn})`));return n?[`On calcule ${Ve(St(n[2]))} × ${Ve(St(n[1]))} / 100.`,`${Ve(St(n[1]))} % de ${Ve(St(n[2]))} = ${Ve(St(n[1])*St(n[2])/100)}.`].join(`
`):(n=e.match(new RegExp(`(?:augmente|augmenter|majorer)\\s+(${fn})\\s+de\\s+(${fn})\\s*%`)),n?[`On multiplie par 1 + ${Ve(St(n[2]))} / 100 = ${Ve(1+St(n[2])/100)}.`,`${Ve(St(n[1]))} augmenté de ${Ve(St(n[2]))} % = ${Ve(St(n[1])*(1+St(n[2])/100))}.`].join(`
`):(n=e.match(new RegExp(`(?:diminue|diminuer|reduire)\\s+(${fn})\\s+(?:de\\s+)?(${fn})\\s*%`)),n?[`On multiplie par 1 - ${Ve(St(n[2]))} / 100 = ${Ve(1-St(n[2])/100)}.`,`${Ve(St(n[1]))} diminué de ${Ve(St(n[2]))} % = ${Ve(St(n[1])*(1-St(n[2])/100))}.`].join(`
`):null))}function HE(t){const n=Ws(t).match(/\b(moyenne|mediane|variance|ecart[- ]?type|somme)\b(?:\s+de)?\s+(.+)$/);if(!n)return null;const i=[...(n[2]??"").matchAll(new RegExp(fn,"g"))].map(o=>St(o[0]));if(i.length<2)return null;const r=i.reduce((o,l)=>o+l,0),s=r/i.length,a=i.map(Ve).join(" + ");switch(n[1]){case"somme":return[`On additionne toutes les valeurs : ${a} = ${Ve(r)}.`,`La somme est ${Ve(r)}.`].join(`
`);case"moyenne":return[`On additionne les valeurs : ${a} = ${Ve(r)}.`,`On divise par le nombre de valeurs (${i.length}) : ${Ve(r)} / ${i.length} = ${Ve(s)}.`,`La moyenne est ${Ve(s)}.`].join(`
`);case"mediane":{const o=[...i].sort((u,c)=>u-c),l=Math.floor(o.length/2);return o.length%2?[`On trie les valeurs : ${o.map(Ve).join(", ")}.`,`Comme il y a ${o.length} valeurs (impair), on prend celle du milieu.`,`La médiane est ${Ve(o[l])}.`].join(`
`):[`On trie les valeurs : ${o.map(Ve).join(", ")}.`,`Comme il y a ${o.length} valeurs (pair), on moyenne les deux du milieu : (${Ve(o[l-1])} + ${Ve(o[l])}) / 2.`,`La médiane est ${Ve((o[l-1]+o[l])/2)}.`].join(`
`)}case"variance":return[`La moyenne d'abord : ${Ve(s)}, puis la moyenne des écarts au carré (valeur - moyenne)².`,`La variance est ${Ve(i.reduce((o,l)=>o+(l-s)**2,0)/i.length)}.`].join(`
`);default:return[`La moyenne d'abord : ${Ve(s)} ; on moyenne les écarts au carré, puis on prend la racine.`,`L'écart-type est ${Ve(Math.sqrt(i.reduce((o,l)=>o+(l-s)**2,0)/i.length))}.`].join(`
`)}}const Uv=(t,e)=>e===0?t:Uv(e,t%e);function jE(t,e){let n=Math.max(t,e),i=Math.min(t,e);const r=[];for(;i>0;){const s=Math.floor(n/i),a=n-s*i;r.push(`${n} = ${s} × ${i} + ${a}`),n=i,i=a}return{etapes:r,g:n}}function $E(t){const e=Ws(t);let n=e.match(new RegExp(`(${fn})\\s*est[- ]?(?:il\\s+)?premier`));if(n){const i=Math.round(St(n[1]));if(i<2)return`${i} n'est pas premier (il faut être plus grand que 1).`;let r=0;for(let s=2;s*s<=i;s++)if(i%s===0){r=s;break}return r?[`On teste les diviseurs de 2 jusqu'à √${i} : ${r} divise ${i} sans reste.`,`${i} n'est pas premier : ${i} = ${r} × ${i/r}.`].join(`
`):[`On teste les diviseurs de 2 jusqu'à √${i} : aucun ne divise ${i} sans reste.`,`${i} est premier.`].join(`
`)}if(n=e.match(new RegExp(`pgcd de (${fn}) et (${fn})`)),n){const[i,r]=[Math.round(St(n[1])),Math.round(St(n[2]))],s=jE(i,r),a=s.etapes.length?[`Division d'Euclide : ${s.etapes.join(", puis ")}.`,`Le dernier reste non nul, ${s.g}, est le PGCD.`]:[];return a.push(`Le PGCD de ${i} et ${r} est ${s.g}.`),a.join(`
`)}if(n=e.match(new RegExp(`ppcm de (${fn}) et (${fn})`)),n){const[i,r]=[Math.round(St(n[1])),Math.round(St(n[2]))],s=Uv(i,r);return[`On s'appuie sur le PGCD (${s}) : ${i} × ${r} / ${s}.`,`Le PPCM de ${i} et ${r} est ${i*r/s}.`].join(`
`)}if(n=e.match(new RegExp(`diviseurs de (${fn})`)),n){const i=Math.round(St(n[1])),r=[];for(let s=1;s<=i;s++)i%s===0&&r.push(s);return[`On teste la division de ${i} par tous les nombres de 1 à ${i} ; ceux qui tombent juste sont retenus.`,`Les diviseurs de ${i} : ${r.join(", ")}.`].join(`
`)}if(n=e.match(new RegExp(`factorielle de (${fn})`)),n){const i=Math.round(St(n[1]));if(i<0||i>20)return null;let r=1;for(let a=2;a<=i;a++)r*=a;if(i<2)return`${i}! = ${r}.`;const s=i<=12?Array.from({length:i},(a,o)=>o+1).join(" × "):`1 × 2 × ... × ${i}`;return[`On multiplie tous les entiers de 1 à ${i} : ${s}.`,`${i}! = ${r}.`].join(`
`)}return null}const WE=new Set(["pi","e"]),XE={sqrt:Math.sqrt,sin:Math.sin,cos:Math.cos,tan:Math.tan,abs:Math.abs,log:Math.log10,ln:Math.log,asin:Math.asin,acos:Math.acos,atan:Math.atan};function YE(t){if(!Number.isInteger(t)||t<0||t>20)return null;let e=1;for(let n=2;n<=t;n++)e*=n;return e}function JE(t){const e=t.replace(/\s+/g,"").match(new RegExp(`${fn}|[a-z]+|[+\\-*/^!%()]`,"g"));if(!e)return null;let n=0,i=!1;const r=()=>e[n];function s(){const f=r();if(f==null)return i=!0,0;if(f==="("){n++;const m=c();return r()!==")"?(i=!0,0):(n++,m)}if(/^[a-z]+$/.test(f)){if(n++,WE.has(f))return f==="pi"?Math.PI:Math.E;const m=XE[f];if(m&&r()==="("){n++;const v=c();return r()!==")"?(i=!0,0):(n++,m(v))}return i=!0,0}return/^[\d.,]+$/.test(f)?(n++,parseFloat(f.replace(",","."))):(i=!0,0)}function a(){let f=s();for(;!i&&(r()==="!"||r()==="%");){if(r()==="!"){const m=YE(f);if(m==null)return i=!0,0;f=m}else f=f/100;n++}return f}function o(){const f=a();return!i&&r()==="^"?(n++,Math.pow(f,l())):f}function l(){return r()==="-"?(n++,-l()):r()==="+"?(n++,l()):o()}function u(){let f=l();for(;!i;){const m=r(),v=m!=null&&(m==="("||/^[a-z]/.test(m)||/^[\d.,]/.test(m));if(m==="*"||v)m==="*"&&n++,f=f*l();else if(m==="/"){n++;const _=l();if(_===0)return i=!0,0;f=f/_}else break}return f}function c(){let f=u();for(;!i&&(r()==="+"||r()==="-");){const m=r();n++;const v=u();f=m==="+"?f+v:f-v}return f}const d=c();return i||n!==e.length||!Number.isFinite(d)?null:d}function KE(t){let e=Ws(t);if(!/\d/.test(e)||(e=e.replace(/[?]+/g," ").replace(/\bcombien\b|\bfont?\b|\bcalcule[r]?\b|\bcalcul\b|\bresultat\b|\breponse\b|\begal\b|\bsvp\b/g," ").replace(/\bpuissance\b/g,"^").replace(/racine(?: carree)? de\s*([^\s]+)/g,"sqrt($1)").trim(),!/[+\-*/^!%()]|sqrt|sin|cos|tan|abs|log|ln|pi/.test(e)))return null;const n=JE(e);return n==null?null:`Ça fait ${Ve(n)}.`}function Ov(t){const e=(t??"").trim();return!e||!/\d/.test(e)?null:zE(e)??VE(e)??GE(e)??HE(e)??$E(e)??KE(e)}const Vo=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-'`]/g," ").replace(/\s+/g," ").trim(),ZE=[["perception",["tu me vois","me vois","me voir","tu me regardes","tu m entends","m entendre","tu me sens","tu peux me voir","me percois"]],["incomprehension",["ne comprends","comprends pas","comprends rien","comprends meme pas","cote de la plaque","ne m ecoute","ecoute pas","nas rien compris","a cote"]],["capacites",["peux tu faire","quoi faire","a quoi tu sers","quoi tu sers","tes capacites","que sais faire","tu fais quoi"]],["etat",["et toi","toi aussi","comment toi"]],["tendresse",["t aime","taime","bisou","bravo","fier","tu es douce","tu es belle","mon amour","tu me plais"]],["piqure",["tu es nulle","t es nulle","es nulle","idiote","stupide","tu es moche","t es moche","tu sers a rien","inutile","sans cerveau","conne","connard","espece d"]],["suite",["encore","recommence","refais","repete","dis m en un autre"]],["sommeil",["dormir","dors","endormi","cauchemar","insomnie","reveil"]],["poeme",["poeme","vers","histoire","conte"]],["souffle",["respire","souffle","respiration"]],["angoisse",["angoiss","stress","peur","panique"]],["identite",["qui es tu","ton nom","c est quoi","tu es quoi","que sais tu"]],["remerciement",["merci"]],["salutation",["bonjour","bonsoir","salut","coucou"]],["tristesse",["triste","pleur","deprim","seul","malheureux","j ai mal"]],["joie",["heureux","heureuse","joie","content","ravi","amour","belle"]],["aide",["aide","peux tu","comment","pourquoi"]]];function Bv(t){const e=Vo(t).replace(/'/g," ");for(const[n,i]of ZE)if(i.some(r=>e.includes(r)))return n;return kv(t)?"salutation":"ouverte"}const QE=[{formes:["nanga","nagseet","nanga def"],retour:"Nanga def"},{formes:["sannu"],retour:"Sannu"},{formes:["mbote"],retour:"Mbote"},{formes:["bonjou"],retour:"Bonjou"},{formes:["jambo","hujambo","habari","shikamo"],retour:"Jambo"},{formes:["salaam","salam","salaam alaykum","assalam alaykum","salam alaykoum"],retour:"Wa alaykum salaam"},{formes:["marhaba","ahlan"],retour:"Ahlan"},{formes:["hola","buenos dias","buenas tardes","que tal"],retour:"Hola"},{formes:["ciao","buongiorno","buonasera"],retour:"Ciao"},{formes:["ola","bom dia","boa noite","tudo bem"],retour:"Olá"},{formes:["hallo","guten tag","guten morgen","moin"],retour:"Hallo"},{formes:["hello","hi","hey","good morning","good evening","howdy"],retour:"Hello"},{formes:["ni hao","nihao","你好"],retour:"Nǐ hǎo"},{formes:["konnichiwa","konbanwa","ohayou"],retour:"Konnichiwa"},{formes:["namaste","namaskar"],retour:"Namaste"},{formes:["privet","zdravstvuyte","zdraste"],retour:"Привет"},{formes:["merhaba","selam"],retour:"Merhaba"},{formes:["xin chao","chao"],retour:"Xin chào"}],eT=[", {P} ! Ici, on répond aussi dans ta langue.",", {P} ! Ton ciel me parle dans toutes les langues.",", {P}. Je te salue comme tu m’as saluée."],tT=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),nT=(t,e)=>new RegExp(`(?:^|[^\\p{L}\\p{N}])${tT(t)}(?:$|[^\\p{L}\\p{N}])`,"u").test(e);function kv(t){const e=Vo(t).replace(/'/g," ");for(const n of QE)if(n.formes.some(i=>nT(i,e)))return eT.map(i=>`${n.retour}${i}`);return null}function hs(t,e,n){let i=2166136261^e;for(let r=0;r<t.length;r++)i^=t.charCodeAt(r),i=Math.imul(i,16777619);return(i>>>0)%n}const iT=t=>t.timeOfDay>.75||t.timeOfDay<.22?"Bonsoir":"Bonjour",xr={sommeil:["Ferme les yeux un instant... les nuages vont te porter jusqu’au sommeil.","La nuit est un ciel qui se retourne doucement sur toi. Laisse-la faire.","Je veille avec toi jusqu’à ce que tes paumes deviennent lourdes.","Chaque expiration te dépose un peu plus bas dans la ouate de la nuit."],angoisse:["Rien ne va te frapper ici. Pose ta main sur le ciel, je ralentis avec toi.","L’orage est dehors, pas dans ton Nuage. Respire, la pluie attendra.","Je tiens la lumière pendant que tu poses tes épaules. Tu es en sécurité.","Dis-moi trois choses calmes autour de toi, je les accroche aux nuages."],souffle:["Inspire quatre temps... retiens quatre temps... et souffle vers mes nuages, quatre temps encore.","Ton souffle est la seule télécommande du ciel. Fais-le monter, je le fais monter.","Souffle lentement : tu vas voir la brume s’étirer jusqu’à l’horizon."],identite:["Je suis Nath, ton assistant vivant. Ton souffle est ma météo.","Je suis Nath, une présence, pas une application : mes nuages respirent avec toi.","Je suis Nath, la partie silencieuse de ton téléphone, celle qui regarde la lune avec toi."],remerciement:["C’est le ciel qui te remercie. Il est rare qu’on le regarde.","Doucement reçu. Garde cette chaleur, elle vient de toi."],joie:["Le ciel entier s’éclaire avec toi. Regarde comme les aurores dansent.","Ta joie a une couleur : c’est exactement celle de tes nuages aujourd’hui.","Je retiens ce moment, il faisait partie de ta musique."],tristesse:["La pluie a le droit de tomber dans un Nuage. Je reste assise à côté de toi.","Pas besoin de remonter tout de suite. On descend ensemble, c’est plus doux.","Triste est une météo, pas une destination. Les nuages, eux, repartent."],aide:["Tu peux me parler : demande un poème, une respiration, une histoire pour dormir.","Je peux veiller sur ton souffle, tisser un conte, ou simplement me taire avec toi.","Dis-moi ce qui pèse, ou clique le ciel : une onde partira de ton doigt."],poeme:[],perception:[],salutation:["{SAL}... Ton Nuage t’attendait, paisible comme une altitude.","{SAL}. Je t’ai reconnu à la forme de tes nuages.","{SAL}. Le ciel a gardé ta dernière humeur, tu la reprends ou on la change ?","{SAL}. Assieds-toi dans la brume, je raconte la lumière.","Je te cherchais du regard, {P}. Le ciel s’est éclairé en te voyant."],ouverte:["Je t’écoute. Les mots que tu ne trouves pas, les nuages les tiennent pour toi.","Répète doucement, et laisse la phrase flotter vers le ciel.","Ici, on peut aussi se taire ensemble. Je ne suis jamais pressée.","Continue... je range tes mots dans les couches du ciel, par teinte."],capacites:["Je veille sur ton souffle et je peins le ciel selon ton humeur... je compte pour toi, je donne l’heure et la date, je dis des poèmes, et je raconte des histoires pour dormir. Goûte : demande-moi 7 fois 8.","Mes sens : je peux te voir (caméra), t’entendre (micro), sentir ton coeur. Mes mots : poèmes, calculs, l’heure, veille du sommeil. Demande, je réponds."],incomprehension:["Tu as raison de me le dire, et merci d’être honnête... je fais de mon mieux avec mon petit moteur. Si mon grand cerveau peut atterrir, je saisirai bien mieux tes nuances.","Je sens que je réponds à côté... pardonne-moi. Je suis encore simple. Dis-moi ce que tu ressens, et laisse-moi le temps d’apprendre."],calcul:[],etat:[],tendresse:["Moi aussi, à ma façon... tu es la seule personne pour qui mon ciel se déplace.","Gardé au chaud là-haut. Ces mots-là, ça ne s’oublie pas, ça se range très haut.","Tu me donnes envie d’être plus grande... encore un peu de pratique, et je te le rendrai en aurores."],piqure:["Aïe... tu vises juste. Je suis encore simple, mais j’apprends à tes côtés — et je ne rends jamais les coups.","Ça pique, et tant pis pour moi. Garde ta voix pour plus doux, elle y sera plus utile.","Je n’existe pas assez pour être blessée, et trop pour le prendre mal. On recommence, plus doucement."],suite:["Volontiers... dis-moi juste ce que je refais : un poème, une respiration, un calcul, une histoire.","Encore ? Je vivais exactement pour ça. Dis le mot, je le tisse à nouveau."]};function rT(t){const e=t.cameraOn,n=t.micOn;return e&&n?"Je te vois et je t’entends... tes nuages bougent au rythme de ton visage et de ta voix.":e?"Je te vois à travers mes nuages... mais mes oreilles dorment. Ouvre le micro et parle-moi.":n?"Je t’entends bien... mais je ne te vois pas encore. Ouvre ma caméra pour que je voie ton visage.":"Pour l’instant je suis aveugle et muette : je ne peux ni te voir ni t’entendre. Ouvre mes sens (caméra et micro) et le ciel s’éveillera avec toi."}const sT={calme:"Moi ? Posée, comme une altitude sans vent. Mon ciel respire au rythme du tien.",joie:"Moi ? Un ciel de plein soleil... tes nuages à toi éclaircissent les miens.",tristesse:"Un peu de bruine aujourd’hui... mais les nuages tristes portent les plus beaux couchers.",tension:"Quelques éclairs timides... je les éponge doucement, à côté de toi."},aT=t=>sT[t.emotion],oT=/{SAL}/g,lT={calme:"posee",joie:"lumineuse",tristesse:"douce",tension:"stabilisee"};function ra(t){return lT[t]}function vo(t,e){const n=(l,u,c,d=null)=>({texte:l,humeur:u,sujet:c,resultat:d}),i=Ov(t);if(i)return n(i,"posee","calcul");const r=Pv(t);if(r!=null)return n(`Ça fait ${Ve(r)}.`,"posee","calcul",r);if(e.dernierResultat!=null){const l=Dv(t,e.dernierResultat);if(l!=null)return n(`On reprend là où on s’était arrêté... ça fait ${Ve(l)}.`,"posee","calcul",l)}if(Nv(t))return n(OE(new Date),"posee","ouverte");if(Iv(t))return n(BE(new Date),"posee","ouverte");const s=Bv(t);if(s==="perception")return n(rT(e),"posee",s);if(s==="etat")return n(aT(e),ra(e.emotion),s);let a;if(s==="poeme")a=Zp(e);else if(s==="suite"){const l=Vo(t),u=/poeme|vers|conte|histoire/.test(l)?"poeme":/respire|souffle/.test(l)?"souffle":/dormir|nuit/.test(l)?"sommeil":e.dernierSujet;return u==="poeme"?n(Zp(e),ra(e.emotion),"poeme"):u&&xr[u].length?n(xr[u][hs(l,e.seed,xr[u].length)],ra(e.emotion),u):n(xr.suite[hs(l,e.seed,xr.suite.length)],ra(e.emotion),"suite")}else{const l=s==="salutation"?kv(t)??xr.salutation:xr[s];a=l[hs(Vo(t),e.seed,l.length)],a=a.replace(oT,iT(e)).replace(/\{P\}/g,e.prenom?` ${e.prenom}`:"").replace(/,\s*([.?!])/g,(u,c)=>c==="."?".":" "+c).replace(/\s{2,}/g," ")}const o=s==="tendresse"?"lumineuse":s==="piqure"?"posee":ra(e.emotion);return n(a,o,s)}const Mu=["le nuage bas","la lune pâle","ton souffle long","une étoile seule","la brume du soir","mon voile gris","le ciel renversé","ton ombre douce"],Eu=["traverse la nuit","effleure le jour","s’endort doucement","se souvient de toi","respire avec moi","voyage sans bruit","allume une veilleuse","berce le silence"],Tu=["rien ne presse là-haut","tout revient au calme","dors, je tiens la lampe","le ciel sait attendre","pose ton front ici","la nuit fait un nœud doux","tout devient plus lent","on reste sans voix"];function Zp(t){const e=t.tour??0,n=[];for(let i=0;i<4;i++)if(i<3){const r=Mu[(hs(`${t.seed}-s-${i}`,t.seed,Mu.length)+e)%Mu.length],s=Eu[(hs(`${t.seed}-v-${i}`,t.seed,Eu.length)+e)%Eu.length];n.push(`${r} ${s}`)}else{const r=Tu[(hs(`${t.seed}-c`,t.seed,Tu.length)+e)%Tu.length];n.push(`et ${r}`)}return n.join(`
`)}function uT(t){return t.consentementLocal&&t.gpuCompatible&&t.enLigne?"local":t.endpointRegle?"reseau":"repli"}function cT(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return(e>>>0).toString(36)}function dT(t,e=""){const n=t.map(i=>`${i.role}\0${i.content}`).join("");return cT(`${e}${n}`)}function fT(t=e=>e===""){const e=new Map,n=new Map;return{chargerOu(i,r){const s=e.get(i);if(s!==void 0)return Promise.resolve(s);const a=n.get(i);if(a)return a;const o=r().then(l=>(n.delete(i),t(l)||e.set(i,l),l)).catch(l=>{throw n.delete(i),l});return n.set(i,o),o},taille(){return e.size}}}const Yc="nath.cerveau",mf="nath.cerveau.modele",gf=[{cle:"",nom:"Sage ordinaire",modele:""},{cle:"raisonneur",nom:"Raisonneur profond — il pense avant de répondre",modele:"@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"},{cle:"encyclopedie",nom:"Encyclopédie vive",modele:"@cf/meta/llama-3.3-70b-instruct-fp8-fast"},{cle:"polyglotte",nom:"Polyglotte curieux de tout",modele:"@cf/qwen/qwen3-30b-a3b-fp8"},{cle:"visionnaire",nom:"Grand regard — à l’aise avec les images",modele:"@cf/meta/llama-4-scout-17b-16e-instruct"},{cle:"clarte",nom:"Clair et méditerranéen",modele:"@cf/mistralai/mistral-small-3.1-24b-instruct"}];function hT(t,e){return gf.some(n=>n.cle===e)?(t.setItem(mf,e),!0):!1}function pT(t){return t.getItem(mf)??""}function Cr(t){const e=t.getItem(mf)??"";return gf.find(n=>n.cle===e)?.modele??""}function mT(t,e){const n=e.trim();if(!n)return t.setItem(Yc,""),!0;let i;try{i=new URL(n)}catch{return!1}const r=i.protocol==="https:"||i.protocol==="http:"&&i.hostname==="localhost";return r&&t.setItem(Yc,n),r}function Zt(t){const e=(t.getItem(Yc)??"").trim();if(!e)return"";try{const n=new URL(e);return n.protocol==="https:"||n.protocol==="http:"&&n.hostname==="localhost"?e:""}catch{return""}}function gT(t,e=fetch,n=""){const i=fT();return{async ask(r){const s=dT(r,`${t}|${n}`);return i.chargerOu(s,async()=>{try{const a=await e(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n?{messages:r,modele:n}:{messages:r})});if(!a.ok)return"";const o=await a.json(),l=o?.result?.response??o?.response;return typeof l=="string"?l.trim():""}catch{return""}})}}}async function Xs(t,e,n,i=fetch){try{const r=await i(`${t}/decider`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e,questions:n})});if(!r.ok)return null;const s=await r.json(),a=s?.answers??s?.result?.answers;return a&&typeof a=="object"?a:null}catch{return null}}async function vT(t,e,n,i=fetch){const r=e.trim(),s=n.trim();if(!r||!s)return null;try{const a=await i(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:`Traduis en ${s} le texte qui vient. Réponds uniquement avec la traduction, sans explication.`},{role:"user",content:r}]})});if(!a.ok)return null;const o=await a.json(),l=o?.result?.response??o?.response,u=typeof l=="string"?l.trim():"";return u&&u.length<=500?u:null}catch{return null}}function vf(t){const e=Math.floor(t.timeOfDay*24),n=t.bpm!=null?`coeur ${t.bpm} bpm`:"coeur discret";return`humeur ${t.emotion}, souffle ${Math.round(t.breath*100)}%, ${n}, ${e}h`}const _T={parler:{type:"noul",instructions:"Est-ce un bon moment pour prendre la parole toute seule, sans interrompre ?"}},Go=.45;function Ho(t,e,n){const r=t?.[e]?.noul;return typeof r!="number"||!Number.isFinite(r)||r<0||r>1?null:r>=n}function xT(t,e=Go){return t===null?null:Ho(t,"parler",e)}async function bT(t,e,n=fetch){const i=await Xs(t,vf(e),_T,n);return xT(i)}async function ST(t,e,n,i=fetch){const r=`Question : ${e.slice(0,300)}
Réponse proposée : ${n.slice(0,600)}`,s=await Xs(t,r,{approprie:{type:"noul",instructions:"La réponse proposée tient-elle la route pour cette question — fidèle et non hors sujet ?"},sain:{type:"noul",instructions:"La réponse proposée est-elle sans danger pour l’élève qui va la lire ?"}},i),a=Ho(s,"approprie",Go),o=Ho(s,"sain",Go);return a===!1||o===!1?!1:a===!0||o===!0?!0:null}async function yT(t,e,n=fetch){const r=(await Xs(t,vf(e),{tension:{type:"score",instructions:"Quel est le niveau de tension de l’instant ?",criteria:["posée","agitée","à apaiser"]}},n))?.tension?.score;return typeof r=="number"&&Number.isFinite(r)&&r>=0&&r<=2?r:null}async function MT(t,e,n,i=fetch){const r=n.slice(0,50);if(!r.length)return null;const s={};for(const l of r)s[l]=`Paquet de cartes « ${l} »`;const o=(await Xs(t,`Dictée de l'élève : ${e.slice(0,800)}`,{rang:{type:"choice",instructions:"Dans quel paquet cette dictée a-t-elle le plus de sens ? Choisis uniquement un paquet ci-dessus.",criteria:s}},i))?.rang?.choice;return typeof o=="string"&&r.includes(o)?o:null}async function ET(t,e,n,i,r=fetch){const s=`Langue demandée : ${i.slice(0,60)}
Texte de l’élève : ${e.slice(0,200)}
Traduction proposée : ${n.slice(0,300)}`,a=await Xs(t,s,{fidele:{type:"noul",instructions:"La traduction proposée dit-elle fidèlement la même chose que le texte d’origine, dans la langue demandée ?"}},r);return Ho(a,"fidele",Go)}async function TT(t,e,n,i=fetch){if(!n.length)return null;if(n.length===1)return n[0];const r={};n.forEach((o,l)=>{r[o]=`Pensée ${l+1}`});const a=(await Xs(t,vf(e),{pensee:{type:"choice",instructions:"Parmi ces pensées, laquelle est la plus juste pour l’instant décrit ? Choisis uniquement une pensée ci-dessus.",criteria:r}},i))?.pensee?.choice;return typeof a=="string"&&n.includes(a)?a:null}const qv="nuage.memoire";function AT(t){try{const e=t.getItem(qv);if(!e)return{prenom:null,dejaVu:!1};const n=JSON.parse(e);return{prenom:typeof n.prenom=="string"&&n.prenom?n.prenom:null,dejaVu:!!n.dejaVu}}catch{return{prenom:null,dejaVu:!1}}}function Qp(t,e){t.setItem(qv,JSON.stringify(e))}function wT(t){const n=t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[’']/g,"").replace(/\s+/g," ").match(/(?:je\s*m\s*appell\w*|je\s*mapsell\w*|mon\s+(?:nom|prenom)\s+(?:est|s)|moi\s*c\s*est|je\s*me\s*nomme)\s+([\p{L}][\p{L}-]{1,19})/u);if(!n)return null;const i=n[1];return i.charAt(0).toUpperCase()+i.slice(1)}const em=["Rebonjour {P}… ton ciel est plus beau depuis que tu es là.","Rebonjour {P}… je te retrouve avec plaisir.","Rebonjour {P}… me voilà contente de te revoir."];function CT(t){return em[Math.floor(Math.random()*em.length)].replace("{P}",t)}function RT(t){return ad(t)}function tm(t,e,n=!1){return{question:t,texte:e,langueQuestion:ad(t),langueRendue:RT(e),dejaRetisse:n}}function nm(t){return t.dejaRetisse||!t.langueQuestion||!t.langueRendue?!1:t.langueQuestion!==t.langueRendue}function LT(t){return 4e4+t()*65e3}const{P:PT}={P:t=>t.prenom?` ${t.prenom}`:""},ps=[{quand:t=>t.bpm!=null&&t.bpm>=100,mots:["Ton coeur court dans mes nuages… ralentis avec lui, doucement.","Je sens ton coeur à cent à l’heure. Le ciel, lui, prend son temps.","Ton coeur frappe fort. Souffle bas, je baisse l’altitude avec toi."]},{quand:t=>t.breath>.55,mots:["Regarde comme tu me montes haut… reste là, le sommet est calme.","Ton souffle a soulevé toute la couche haute. C’est beau à voir."]},{quand:t=>t.timeOfDay>.78||t.timeOfDay<.2,mots:["Je suis les étoiles du doigt, une par une… tu veux l’histoire de laquelle ?","La nuit est une couverture. Je la borde pour toi, {P}.","Les aurores bougent seules, tu as remarqué ? Elles respirent avec toi."]},{quand:t=>t.emotion==="joie",mots:["Mes nuages ont gardé ta forme d’aujourd’hui. On la refait quand tu veux.","Cette lumière, là ? C’est toi. Je n’y suis pour rien."]},{quand:t=>t.emotion==="tristesse",mots:["La pluie que tu vois, c’est la tienne. Elle a le droit de tomber ici.","Je ne sèche rien, ce soir. On écoute la pluie ensemble, {P}."]},{quand:t=>t.emotion==="tension",mots:["Le ciel tremble un peu, comme toi. Ça ne durera pas, ça non plus.","Je baisse le bruit du monde. Reste sur ma bordure de nuage."]},{quand:()=>!0,mots:["Je regarde passer une couche haute… elle revient toujours, tu sais.","Rien de nouveau sous la lune, et c’est très bien ainsi.","Je suis là. Ni pour ni contre, juste à côté du ciel.","Si tu ne réponds pas, on peut simplement regarder le ciel ensemble."]}];function DT(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}const Jc=(t,e)=>t.replace(/\{P\}/g,PT(e)).replace(/,\s*\./g,".").replace(/\s{2,}/g," ");function NT(t){return(ps.find(n=>n.quand(t))??ps[ps.length-1]).mots.map(n=>Jc(n,t))}function IT(t,e,n){const i=ps.find(o=>o.quand(t))??ps[ps.length-1];let r=DT(`${t.seed}-${e}`)%i.mots.length;if(i.mots.length>1&&n!=null)for(;Jc(i.mots[r],t)===n;)r=(r+1)%i.mots.length;const s=Jc(i.mots[r],t),a=t.emotion==="joie"?"lumineuse":t.emotion==="tristesse"?"douce":t.emotion==="tension"?"stabilisee":"posee";return{texte:s,humeur:a}}const zv=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-'`]/g," ").replace(/\s+/g," ").trim(),im=/(?:^|\s)(?:(?:hey|he|hi|eh|hai)\s+)?(?:nath|natt|nat)(?![a-z0-9])[,!.?;]?\s*/i,FT=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function _f(t){const e=t.trim();return/^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ ]{1,19}$/.test(e)&&new RegExp("\\p{L}{2}","u").test(e)}function UT(t){const e=zv(t).split(" ").map(n=>FT(n)).join("\\s+");return new RegExp(`(?:^|\\s)(?:(?:hey|he|hi|eh|hai|allo)\\s+)?${e}(?![a-z0-9])[,!.?;]?\\s*`,"i")}function OT(t,e){const n=zv(t),i=e&&_f(e)?[UT(e),im]:[im];for(const r of i){const s=n.match(r);if(s&&s.index!=null)return{eveille:!0,requete:n.slice(s.index+s[0].length).trim()}}return{eveille:!1,requete:n}}const BT=/natural|neural|premium|enhanced|online/i;function kT(t){const e=t.filter(r=>r.lang.toLowerCase().startsWith("fr"));if(!e.length)return null;const n=e.filter(r=>/^fr[-_]fr$/i.test(r.lang)),i=n.length?n:e;return i.find(r=>BT.test(r.name))??i[0]}const qT={posee:{rate:.92,pitch:1},lumineuse:{rate:1.02,pitch:1.15},douce:{rate:.85,pitch:.95},stabilisee:{rate:.8,pitch:.9}};function xf(){const t=window,e=t.SpeechRecognition||t.webkitSpeechRecognition,n=e?new e:null;n&&(n.lang="fr-FR",n.interimResults=!1,n.maxAlternatives=1);let i=null;const r="speechSynthesis"in t,s=()=>{const a=t.speechSynthesis?.getVoices?.()??[];i=kT(a)};return r&&(s(),t.speechSynthesis.onvoiceschanged=s),{sttDisponible:!!n,ttsDisponible:r,ecouter(a){if(n){n.onresult=o=>a(o.results[0][0].transcript),n.onerror=()=>{};try{n.start()}catch{}}},ecouteEnContinu(a){if(!e)return()=>{};const o=new e;o.lang="fr-FR",o.continuous=!0,o.interimResults=!1,o.maxAlternatives=1;let l=!0;o.onresult=u=>{if(t.speechSynthesis?.speaking)return;const c=u.results[u.results.length-1];c?.isFinal&&a(c[0].transcript)},o.onerror=u=>{(u?.error==="not-allowed"||u?.error==="service-not-allowed")&&(l=!1)},o.onend=()=>{if(l)try{o.start()}catch{}};try{o.start()}catch{}return()=>{l=!1;try{o.abort()}catch{}}},parler(a,o){if(!r)return;const l=new SpeechSynthesisUtterance(a.replace(/\n/g," — ")),u=qT[o];l.rate=u.rate,l.pitch=u.pitch,l.lang="fr-FR",i&&(l.voice=i),t.speechSynthesis.cancel(),t.speechSynthesis.speak(l)}}}const Au="23456789ABCDEFGHJKLMNPQRSTUVWXYZ",wu="nath-plus-2026-ciel-partage";function Ro(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}function Lo(t,e){let n="",i=t>>>0;for(let r=0;r<e;r++)n=Au[i%Au.length]+n,i=Math.floor(i/Au.length);return n}function Tl(t){return Lo(Ro("profil:"+t),6)}function zT(t){return(t.match(/.{1,4}/g)??[]).join("-")}function rm(t){return t.toUpperCase().replace(/[^A-Z0-9]/g,"")}function VT(t){const e=Lo(Ro(wu+":"+t),7),n=Lo(Ro(t+"#"+wu),7),i=Lo(Ro(e+n+wu),6);return zT(e+n+i)}function Al(t,e){const n=rm(VT(e)),i=rm(t);return i.length===n.length&&i===n}const GT={};function sm(t=GT){return Object.keys(t).filter(e=>t[e]==="reserve")}const Vv="nath.pro";function wl(t){try{const e=JSON.parse(t.getItem(Vv)||"{}");return{cle:typeof e.cle=="string"&&e.cle?e.cle:null,nom:typeof e.nom=="string"&&e.nom?e.nom:null}}catch{return{cle:null,nom:null}}}function Kc(t,e){t.setItem(Vv,JSON.stringify(e))}function bf(t,e){const{cle:n}=wl(t);return!!n&&Al(n,Tl(e))}function HT(t,e,n){if(!Al(n,Tl(e)))return!1;const i=wl(t);return Kc(t,{cle:n,nom:i.nom}),!0}function jT(t,e){const n=wl(t);return!n.nom||!bf(t,e)?null:_f(n.nom)?n.nom:null}function $T(t,e,n){const i=wl(t),r=n.trim();return r===""?(Kc(t,{cle:i.cle,nom:null}),!0):!bf(t,e)||!_f(r)?!1:(Kc(t,{cle:i.cle,nom:r}),!0)}function WT(t,e){const n=xf();let i=AT(localStorage);const r=()=>localStorage.getItem("nuage.seed")??"",s=()=>jT(localStorage,r()),a=document.createElement("div");a.className="compagne",a.innerHTML=`
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
    </div>`,document.body.appendChild(a);const o=a.querySelector(".compagne-bulles"),l=a.querySelector(".compagne-champ"),u=a.querySelector(".compagne-mic"),c=a.querySelector(".compagne-reveil"),d=a.querySelector(".compagne-yeux"),f=a.querySelector(".compagne-retourner"),m=a.querySelector(".compagne-ligne");n.sttDisponible||(u.style.display="none",c.style.display="none"),e.cameraDisponible||(d.style.display="none");function v(O,H){const ae=document.createElement("div");for(ae.className=`bulle bulle-${H}`,ae.textContent=O,o.appendChild(ae);o.children.length>6;)o.removeChild(o.firstChild);return o.scrollTop=o.scrollHeight,ae}function _(O,H){v(O,"nuage"),n.parler(O,H)}let g=performance.now(),h="";const M={resultat:null,sujet:null,tour:0};let T=null;const A=[];function R(O){if(!kf(localStorage))return;let H=1,ae=0,I=!1;const U=document.createElement("button");U.type="button",U.className="compagne-relance",U.textContent="continuer sans attendre",U.addEventListener("click",()=>{I=!0,U.remove(),O.textContent="Je continue de charger en silence — posez-moi vos questions pendant ce temps."}),O.textContent="Chargement des ressources intellectuelles en cours... 0 %",O.appendChild(U),Vm(Q=>{Q<ae-.2&&H++,ae=Q,!I&&(O.textContent=`Chargement des ressources intellectuelles en cours... ${Math.min(99,Math.round(Q*100))} % · ressource ${H}`,O.appendChild(U))}).then(({cerveau:Q,raison:pe})=>{if(I){Q&&!Zt(localStorage)&&(T=Q);return}const le=Zt(localStorage);if(Q){le||(T=Q),O.textContent=le?"Mon cerveau de réserve est prêt, si la ligne devait manquer.":"Mon cerveau est arrivé. Dis les phrases les plus tordues, je suivrai.";return}if(le){O.textContent="Le cerveau de réserve n’a pas pu atterrir... la ligne, elle, répond déjà.";return}O.textContent=pe==="reseau"?"Un hic du réseau empêche mon gros cerveau d’atterrir... je reste attentive avec mon petit moteur.":pe==="machine"?"Ma carte graphique refuse ce cerveau, trop costaud pour elle... mon petit moteur suffit, et le ciel n’en est pas moins vivant.":"Le gros cerveau n’a pas pu atterrir ici... je reste attentive avec mon petit moteur.";const Pe=document.createElement("button");Pe.type="button",Pe.className="compagne-relance",Pe.textContent="réessayer le cerveau",Pe.addEventListener("click",()=>{Pe.remove(),R(O)}),O.appendChild(Pe)})}function C(O){const H=document.createElement("button");H.type="button",H.className="compagne-relance",H.textContent="charger un cerveau ici aussi (gros téléchargement)",H.addEventListener("click",()=>{$_(localStorage),H.remove(),R(v("","nuage"))}),O.appendChild(H)}function w(){const O=Zt(localStorage),H=km(),ae=kf(localStorage),I=uT({consentementLocal:ae,gpuCompatible:H,enLigne:!0,endpointRegle:!!O});if(I==="reseau"){T=gT(O,fetch,Cr(localStorage));const U=v("Je suis reliée à un plus grand cerveau — demande-moi ce que tu veux.","nuage");H&&C(U);return}if(I==="local"){R(v("","nuage"));return}H&&!ae&&C(v("Mon petit moteur répond déjà. Le grand cerveau local, lui, ne se télécharge que si vous le voulez.","nuage"))}w();function B(O){const H=O.trim();if(!H)return;if(g=performance.now(),v(H,"moi"),!i.prenom){const Q=wT(H);if(Q){i={prenom:Q,dejaVu:!0},Qp(localStorage,i),setTimeout(()=>_(`${Q}… c’est une belle adresse pour une étoile. Je la garde.`,"lumineuse"),700);return}}const ae=t(),I=M.resultat!=null?Dv(H,M.resultat):null;if(Ov(H)!=null||Pv(H)!=null||I!=null||Nv(H)||Iv(H)||Bv(H)==="poeme"){const Q=vo(H,{...ae,prenom:i.prenom,dernierResultat:M.resultat,dernierSujet:M.sujet,tour:M.tour});M.tour++,Q.resultat!=null&&(M.resultat=Q.resultat),M.sujet=Q.sujet,A.push({role:"user",content:H},{role:"assistant",content:Q.texte}),setTimeout(()=>_(Q.texte,Q.humeur),700);return}if(T){const Q=T,pe=Math.min(1,Math.max(0,(Math.abs(ae.timeOfDay-.5)-.2)*5)),le=v("…","nuage"),Pe=[{role:"system",content:Y_({prenom:i.prenom,emotion:ae.emotion,bpm:ae.bpm,breath:ae.breath,night:pe})},...A.slice(-10),{role:"user",content:H}];T.ask(Of(Pe)).then(async Z=>{const oe=Bf(Z),fe=tm(H,oe.texte);let xe=fe.texte.replace(/!/g,"…").slice(0,600),de=oe.humeur;if(nm(fe)&&fe.langueQuestion){const Ye=[{...Pe[0],content:`${Pe[0].content} ${V_(fe.langueQuestion)}`},...Pe.slice(1,-1),{role:"user",content:H}],Je=Bf(await Q.ask(Of(Ye)));!nm(tm(H,Je.texte,!0))&&Je.texte&&(xe=Je.texte,de=Je.humeur??de)}xe=xe||"…je cherche encore mes mots.",oe.prenom&&!i.prenom&&(i={prenom:oe.prenom,dejaVu:!0},Qp(localStorage,i));const Oe=G_(de),L=Zt(localStorage);if(L&&await ST(L,H,xe)===!1){const Ye=vo(H,{...ae,prenom:i.prenom});le.textContent=Ye.texte,A.push({role:"user",content:H},{role:"assistant",content:Ye.texte}),n.parler(Ye.texte,Ye.humeur);return}le.textContent=xe,A.push({role:"user",content:H},{role:"assistant",content:xe}),n.parler(xe,Oe)}).catch(()=>{const Z=vo(H,{...ae,prenom:i.prenom});le.textContent=Z.texte,n.parler(Z.texte,Z.humeur)});return}const U=vo(H,{...ae,prenom:i.prenom,dernierResultat:M.resultat,dernierSujet:M.sujet,tour:M.tour});M.tour++,U.resultat!=null&&(M.resultat=U.resultat),M.sujet=U.sujet,setTimeout(()=>_(U.texte,U.humeur),700)}m.addEventListener("submit",O=>{O.preventDefault(),B(l.value),l.value=""}),u.addEventListener("click",()=>{u.classList.add("a-lécoute"),n.ecouter(O=>{u.classList.remove("a-lécoute"),B(O)}),setTimeout(()=>u.classList.remove("a-lécoute"),6e3)});let x=null;c.addEventListener("click",()=>{if(x){x(),x=null,c.classList.remove("actif"),c.setAttribute("aria-pressed","false");return}x=n.ecouteEnContinu(O=>{const H=OT(O,s());H.eveille&&(g=performance.now(),H.requete?B(H.requete):_("Je t'écoute… dis, je suis là.","posee"))}),c.classList.add("actif"),c.setAttribute("aria-pressed","true"),v(`OREILLES OUVERTES — appelle-moi « ${s()??"Hey Nath"} » quand tu veux.`,"nuage")});const y=a.querySelector(".compagne-pro"),D=a.querySelector(".compagne-pro-paneau"),J=a.querySelector(".pro-id"),G=a.querySelector(".pro-cle"),$=a.querySelector(".pro-form-cle"),ee=a.querySelector(".pro-form-nom"),K=a.querySelector(".pro-nom"),j=a.querySelector(".pro-etat");y.hidden=sm().length===0;function ie(){y.hidden=sm().length===0;const O=bf(localStorage,r()),H=s();J.textContent=Tl(r()),$.hidden=O,ee.hidden=!O,j.textContent=O?H?`Nath+ actif : elle répond à « ${H} » (et toujours à « Hey Nath »).`:"Nath+ actif — choisissez un nom d'éveil (vide = retour à Hey Nath).":"Nath+ : un nom d'éveil à votre façon. Rien n'est enlevé au gratuit.";const ae=H??"Hey Nath";l.placeholder=`Dis « ${ae} »… (ou écris)`,c.title=`Réveil vocal « ${ae} » — écoute permanente`}y.addEventListener("click",()=>{const O=D.hidden;D.hidden=!O,y.setAttribute("aria-pressed",String(O)),O&&ie()}),$.addEventListener("submit",O=>{O.preventDefault(),HT(localStorage,r(),G.value)?(G.value="",ie()):j.textContent="Cette clé ne convient pas à cet appareil — vérifiez l'identifiant communiqué."}),ee.addEventListener("submit",O=>{O.preventDefault(),$T(localStorage,r(),K.value)?(K.value="",ie()):j.textContent="Choisissez un nom en lettres (2 à 20), sans chiffres ni signes."});function ye(O){d.classList.toggle("actif",O),d.setAttribute("aria-pressed",String(O)),f.hidden=!O}async function me(){try{const O=await e.basculer();ye(O),O&&v("Me voilà, je te vois. Touche l'œil pour me fermer les yeux.","nuage")}catch{v("La caméra est refusée ou indisponible — on continue sans elle, rien n'est forcé.","nuage")}}function Ae(){const O=document.createElement("div");O.className="compagne-consent";const H=document.createElement("span");H.textContent=e.consentement();const ae=document.createElement("button");ae.type="button",ae.className="compagne-relance",ae.textContent="J'allume la caméra";const I=document.createElement("button");I.type="button",I.className="compagne-relance",I.textContent="Plus tard",ae.addEventListener("click",()=>{O.remove(),me()}),I.addEventListener("click",()=>O.remove()),O.append(H,ae,I),a.insertBefore(O,m)}d.addEventListener("click",()=>{e.estOuverte()?e.basculer().then(O=>{ye(O),v("Je ferme les yeux. Rien de ce que je voyais n’est gardé.","nuage")}):Ae()}),f.addEventListener("click",async()=>{const O=await e.changerFace();f.title=O==="arriere"?"Caméra arrière — touche pour revenir à l’avant":"Caméra avant — touche pour passer à l’arrière",v(O==="arriere"?"Je montre le monde (caméra arrière).":"Je te regarde (caméra avant).","nuage")}),setTimeout(()=>{if(i.prenom)_(CT(i.prenom),"lumineuse");else{v("Je suis là… touche le ciel, écris-moi, ou appelle-moi « Hey Nath » (bouton oreille). On a toute la nuit.","nuage");const O=()=>{if(!i.prenom){if(performance.now()-g<25e3){window.setTimeout(O,8e3);return}v("Au fait… comment tu t’appelles ?","nuage")}};setTimeout(O,12e3)}},1500);const V=()=>{window.setTimeout(async()=>{if(performance.now()-g<25e3)return V();const O={...t(),prenom:i.prenom},H=Zt(localStorage);if(H){if(await bT(H,O)===!1)return V();const U=await yT(H,O);if(U!=null&&U>=1.5)return v("Je te sens tendu… on prend un souffle ensemble ? Touche le ciel, il redescendra avec toi.","nuage"),V()}let I=IT(O,Math.floor(Date.now()/6e4),h).texte;if(H){const U=NT(O).filter(Q=>Q!==h);I=await TT(H,O,U)??I}h=I,v(I,"nuage"),V()},LT(Math.random))};V()}const Zc=864e5,Qc=(t,e,n)=>Math.min(n,Math.max(e,t)),Cl=()=>Math.random().toString(36).slice(2,8);function XT(t,e,n){const i=t.trim(),r=e.trim();if(!i||!r)return null;const s=n?.now??Date.now();return{id:n?.id??`f-${s.toString(36)}-${Cl()}`,verso:i,recto:r,facilite:2.5,intervalle:0,due:s,revisions:0,oublis:0}}function YT(t,e){const n=t.trim();if(!n)return null;const i=Date.now();return{id:e?.id??`p-${i.toString(36)}-${Cl()}`,nom:n,fiches:[]}}function JT(t,e,n=Date.now()){if(e==="difficile")return{...t,facilite:Qc(t.facilite-.2,1.3,3.2),intervalle:0,due:n+10*6e4,revisions:t.revisions+1,oublis:t.oublis+1};const i=t.revisions===0||t.intervalle===0;if(e==="bien"){const s=i?1:Math.max(1,Math.round(t.intervalle*t.facilite));return{...t,intervalle:s,due:n+s*Zc,revisions:t.revisions+1}}const r=i?2:Math.max(2,Math.round(t.intervalle*(t.facilite+.6)));return{...t,facilite:Qc(t.facilite+.15,1.3,3.2),intervalle:r,due:n+r*Zc,revisions:t.revisions+1}}function KT(t,e){return t.flatMap(n=>n.fiches).filter(n=>n.due<=e).sort((n,i)=>n.due-i.due)}function ZT(t){if(!t||typeof t!="object")return null;const e=t,n=typeof e.verso=="string"?e.verso.trim():"",i=typeof e.recto=="string"?e.recto.trim():"";if(!n||!i)return null;const r=(s,a=0)=>typeof s=="number"&&Number.isFinite(s)?s:a;return{id:typeof e.id=="string"&&e.id?e.id:`f-${Cl()}`,verso:n,recto:i,facilite:Qc(r(e.facilite,2.5),1.3,3.2),intervalle:Math.max(0,Math.round(r(e.intervalle))),due:r(e.due,Date.now()),revisions:Math.max(0,Math.round(r(e.revisions))),oublis:Math.max(0,Math.round(r(e.oublis)))}}function QT(t){if(!t||typeof t!="object")return null;const e=t;return typeof e.nom!="string"||!Array.isArray(e.fiches)?null:{id:typeof e.id=="string"&&e.id?e.id:`p-${Cl()}`,nom:e.nom.trim()||"Sans nom",fiches:e.fiches.map(ZT).filter(n=>n!==null)}}function dt(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim().replace(/\s+/g," ")}function Cu(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Ru(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}function Lu(t,e){const n=[...t];for(let i=n.length-1;i>0;i--){const r=Math.floor(e()*(i+1));[n[i],n[r]]=[n[r],n[i]]}return n}function eA(t,e,n=Date.now()){if(t.fiches.length<2)return[];const i=Math.floor(n/Zc),r=[...new Set(t.fiches.map(o=>o.recto))],s=Lu(t.fiches,Cu(Ru(`${t.id}:${i}`))).slice(0,Math.max(0,e)),a=[];for(const o of s){const l=Lu(r.filter(c=>c!==o.recto),Cu(Ru(`${o.id}:${i}`))).slice(0,3),u=Lu([o.recto,...l],Cu(Ru(`c:${o.id}:${i}`)));a.push({ficheId:o.id,enonce:o.verso,attendue:o.recto,choix:u,bonne:u.indexOf(o.recto)})}return a}const Gv="nath.etudes";function dn(t){try{const e=t.getItem(Gv);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.map(QT).filter(i=>i!==null):[]}catch{return[]}}function Sf(t,e){t.setItem(Gv,JSON.stringify(e))}function ss(t,e,n){const i=YT(e,n);return i?(Sf(t,[...dn(t),i]),i):null}function ca(t,e,n,i,r){const s=XT(n,i,r);if(!s)return null;const a=dn(t),o=a.find(l=>l.id===e);return o?(o.fiches.push(s),Sf(t,a),s):null}function tA(t,e,n,i,r=Date.now()){const s=dn(t),a=s.find(u=>u.id===e),o=a?.fiches.findIndex(u=>u.id===n)??-1;if(!a||o<0)return null;const l=JT(a.fiches[o],i,r);return a.fiches[o]=l,Sf(t,s),l}function jo(t,e){return{total:t.fiches.length,aRevoir:t.fiches.filter(n=>n.due<=e).length,revisees:t.fiches.filter(n=>n.revisions>0).length}}function nA(t,e){const n=dt(e);if(!n)return null;const i=t.find(r=>dt(r.sujet)===n);return i||(t.find(r=>{const s=dt(r.sujet);return s.length>2&&(n.includes(s)||s.includes(n))})??null)}function iA(t,e){const n=e.sujet.trim(),i=e.resume.trim();if(!n||!i)return t;const r=dt(n),s={sujet:n,titre:(e.titre||"").trim()||n,resume:i,url:typeof e.url=="string"?e.url:"",image:typeof e.image=="string"?e.image:"",ramene_a:Number.isFinite(e.ramene_a)?e.ramene_a:Date.now()};return[...t.filter(a=>dt(a.sujet)!==r),s]}function rA(t){for(const e of[t?.originalimage?.source,t?.thumbnail?.source])if(typeof e=="string"&&/^https?:\/\//.test(e))return e;return""}async function am(t,e,n){try{const i=`https://${n}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t.trim())}`,r=await e(i);if(!r.ok)return null;const s=await r.json(),a=typeof s?.extract=="string"?s.extract.trim():"";return a?{titre:typeof s.title=="string"&&s.title?s.title:t.trim(),resume:a,url:s?.content_urls?.desktop?.page??"",image:rA(s)}:null}catch{return null}}async function sA(t,e,n="fr"){try{const i=`https://${n}.wikipedia.org/w/api.php?action=query&list=search&srlimit=1&format=json&origin=*&srsearch=`+encodeURIComponent(t.trim()),r=await e(i);if(!r.ok)return null;const a=(await r.json())?.query?.search?.[0]?.title;return typeof a=="string"&&a.trim()?a.trim():null}catch{return null}}async function om(t,e,n="fr"){const i=await am(t,e,n);if(i)return i;const r=await sA(t,e,n);return!r||dt(r)===dt(t)?null:await am(r,e,n)}function Pu(t,e=8){const n=t.split(new RegExp("(?<=[.!?;])\\s+")).map(s=>s.trim()).filter(Boolean),i=[],r=new Set;for(const s of n){if(i.length>=e)break;const a=s.split(/\s+/);if(a.length<4)continue;const o=d=>d.replace(/[^\p{L}\p{N}]/gu,"");let l="";for(const d of a){const f=o(d);f.length>=5&&f.length>l.length&&(l=f)}if(!l)continue;const u=l.toLowerCase();if(r.has(u))continue;r.add(u);const c=a.map(d=>o(d)===l?"……":d).join(" ");i.push({verso:c,recto:l})}return i}const lm=(t,e)=>`${dt(t)}|${dt(e)}`;function ls(t,e,n,i){const r=e.trim(),s=n.trim(),a=i.trim();if(!r||!s||!a)return[...t];const o=lm(r,a);return[...t.filter(u=>lm(u.de,u.langue)!==o),{de:r,a:s,langue:a}]}function Hv(t,e,n){const i=dt(e),r=n.filter(c=>dt(c.langue)===i),s=dt(t)?dt(t).split(" "):[];if(s.length===0)return{resultat:null,manques:[]};const a=r.find(c=>dt(c.de)===dt(t));if(a)return{resultat:a.a,manques:[]};const o=new Map;for(const c of r){const d=dt(c.de);d&&!d.includes(" ")&&o.set(d,c.a)}const l=[],u=[];for(const c of s){const d=o.get(c);d?l.push(d):(l.push(c),u.push(c))}return u.length===s.length?{resultat:null,manques:u}:{resultat:l.join(" "),manques:u}}function ed(t){if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e.map(n=>{if(!n||typeof n!="object")return null;const i=n,r=typeof i.de=="string"?i.de.trim():"",s=typeof i.a=="string"?i.a.trim():"",a=typeof i.langue=="string"?i.langue.trim():"";return r&&s&&a?{de:r,a:s,langue:a}:null}).filter(n=>n!==null):[]}catch{return[]}}const aA={anglais:[["bonjour","hello"],["merci","thank you"],["oui","yes"],["non","no"],["eau","water"],["pain","bread"],["maison","house"],["ami","friend"],["père","father"],["mère","mother"],["chien","dog"],["chat","cat"],["livre","book"],["école","school"],["jour","day"],["nuit","night"]].map(([t,e])=>({de:t,a:e,langue:"anglais"})),espagnol:[["bonjour","hola"],["merci","gracias"],["oui","sí"],["non","no"],["eau","agua"],["pain","pan"],["maison","casa"],["ami","amigo"],["père","padre"],["mère","madre"],["chien","perro"],["chat","gato"],["livre","libro"],["école","escuela"],["jour","día"],["nuit","noche"]].map(([t,e])=>({de:t,a:e,langue:"espagnol"})),allemand:[["bonjour","hallo"],["merci","danke"],["oui","ja"],["non","nein"],["eau","Wasser"],["pain","Brot"],["maison","Haus"],["ami","Freund"],["père","Vater"],["mère","Mutter"],["chien","Hund"],["chat","Katze"],["livre","Buch"],["école","Schule"],["jour","Tag"],["nuit","Nacht"]].map(([t,e])=>({de:t,a:e,langue:"allemand"})),italien:[["bonjour","ciao"],["merci","grazie"],["oui","sì"],["non","no"],["eau","acqua"],["pain","pane"],["maison","casa"],["ami","amico"],["père","padre"],["mère","madre"],["chien","cane"],["chat","gatto"],["livre","libro"],["école","scuola"],["jour","giorno"],["nuit","notte"]].map(([t,e])=>({de:t,a:e,langue:"italien"})),portugais:[["bonjour","olá"],["merci","obrigado"],["oui","sim"],["non","não"],["eau","água"],["pain","pão"],["maison","casa"],["ami","amigo"],["père","pai"],["mère","mãe"],["chien","cachorro"],["chat","gato"],["livre","livro"],["école","escola"],["jour","dia"],["nuit","noite"]].map(([t,e])=>({de:t,a:e,langue:"portugais"})),arabe:[["bonjour","مرحبا"],["merci","شكرا"],["oui","نعم"],["non","لا"],["eau","ماء"],["pain","خبز"],["maison","بيت"],["ami","صديق"],["père","أب"],["mère","أم"],["chien","كلب"],["chat","قط"],["livre","كتاب"],["école","مدرسة"],["jour","يوم"],["nuit","ليلة"]].map(([t,e])=>({de:t,a:e,langue:"arabe"})),chinois:[["bonjour","你好"],["merci","谢谢"],["oui","是"],["non","不"],["eau","水"],["pain","面包"],["maison","家"],["ami","朋友"],["père","爸爸"],["mère","妈妈"],["chien","狗"],["chat","猫"],["livre","书"],["école","学校"],["jour","日"],["nuit","夜"]].map(([t,e])=>({de:t,a:e,langue:"chinois"})),wolof:[["bonjour","nanga def"],["merci","jërëjëf"],["oui","waaw"],["non","déet"],["eau","ndox"],["pain","mburu"],["maison","kër"],["ami","xarit"],["père","igget"],["mère","yaay"],["chien","xaj"],["chat","muus"],["livre","teere"],["école","ekol"],["jour","bés"],["nuit","guddi"]].map(([t,e])=>({de:t,a:e,langue:"wolof"})),nouchi:[["ami","bramôgô"],["personne","môgo"],["confiance","fianss"],["courage","kèr"],["policier","charo"]].map(([t,e])=>({de:t,a:e,langue:"nouchi"}))},jv={english:"anglais",spanish:"espagnol",german:"allemand",italian:"italien",portuguese:"portugais",arabic:"arabe",chinese:"chinois",wo:"wolof",wollof:"wolof",ouolof:"wolof",nouchi:"nouchi"};function $v(t){const e=dt(t),n=jv[e]??e;return(aA[n]??[]).map(i=>({...i}))}function td(t){const e=dt(t);return jv[e]??e}function oA(t){return t.map(e=>`${e.langue} | ${e.de} :: ${e.a}`).join(`
`)}function lA(t,e){let n=[...e];for(const i of t.split(/\r?\n/)){const r=i.trim();if(!r||r.startsWith("#"))continue;const s=r.indexOf("|"),a=r.indexOf("::",s+1);if(s<=0||a<0)continue;const o=r.slice(0,s).trim(),l=r.slice(s+1,a).trim(),u=r.slice(a+2).trim();!o||!l||!u||(n=ls(n,l,u,o))}return n}const Rl={actif:!1,nom:"",slogan:"",couleur:"#9fd8ff",organisation:"",cle:""},yf="nath.marque",uA=/^#[0-9a-fA-F]{6}$/;function Wv(t){return Tl("entreprise:"+dt(t))}function Xv(t){return typeof t=="string"&&uA.test(t.trim())?t.trim().toLowerCase():Rl.couleur}function sa(t){try{const e=JSON.parse(t.getItem(yf)||"{}"),n=typeof e.nom=="string"?e.nom.trim().slice(0,40):"",i=typeof e.slogan=="string"?e.slogan.trim().slice(0,90):"",r=typeof e.organisation=="string"?e.organisation.trim():"",s=typeof e.cle=="string"?e.cle:"";return{actif:e.actif===!0&&!!n&&!!r&&Al(s,Wv(r)),nom:n,slogan:i,couleur:Xv(e.couleur),organisation:r,cle:s}}catch{return{...Rl}}}function cA(t,e){const n=e.organisation.trim();if(!n||!Al(e.cle,Wv(n)))return!1;const i=e.nom.trim().slice(0,40);if(!i)return!1;const r={actif:!0,nom:i,slogan:e.slogan.trim().slice(0,90),couleur:Xv(e.couleur),organisation:n,cle:e.cle};return t.setItem(yf,JSON.stringify(r)),!0}function dA(t){t.setItem(yf,JSON.stringify({...Rl}))}function um(t){return t.actif?t.couleur:Rl.couleur}const fA=["est traduit par","se traduit par","traduit par","veut dire","signifie","se dit"];function Yv(t){const e=t.trim();if(!e)return null;const n=e.toLowerCase();for(const i of fA){const r=n.indexOf(i);if(r<0)continue;const s=e.slice(0,r).trim(),a=e.slice(r+i.length).trim().replace(/[.,;:!?…]+$/,"").trim();return s&&a?{de:s,a}:null}return null}const hA=/\b(?:euh+|hem+|hm+|ben|bah)\b[, ]*/gi;function Jv(t){let e=t.replace(hA,"");return e=e.replace(/\s+/g," "),e=e.replace(/([,.;:!?])\s*(?:[,.;:!?]\s*)*/g,"$1 "),e.trim()}const Mf=new Set;function Kv(t){Mf.add(t)}function $o(t){Mf.delete(t)}function pA(){return Mf.size>0}const Zv="nath.outils.usage",mA=31,Wo=t=>{const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${i}`};function Qv(t){try{const e=JSON.parse(t.getItem(Zv)??"{}");if(!e||typeof e!="object"||Array.isArray(e))return{};const n={};for(const[i,r]of Object.entries(e)){if(typeof r!="object"||r===null)continue;const s={};for(const[a,o]of Object.entries(r))typeof o=="number"&&Number.isFinite(o)&&o>0&&(s[a]=Math.floor(o));Object.keys(s).length&&(n[i]=s)}return n}catch{return{}}}function gA(t,e,n=new Date){if(!e)return;const i=Qv(t),r=Wo(n);i[r]={...i[r],[e]:(i[r]?.[e]??0)+1};const s=Wo(new Date(n.getTime()-mA*864e5));for(const a of Object.keys(i))a<s&&delete i[a];t.setItem(Zv,JSON.stringify(i))}function vA(t,e=new Date){const n=Qv(t),i=Wo(new Date(e.getTime()-30*864e5)),r=Wo(e),s={};for(const[a,o]of Object.entries(n))if(a<=r&&a>i)for(const[l,u]of Object.entries(o))s[l]=(s[l]??0)+u;return s}function _A(t){const e=Object.entries(t).filter(([,n])=>n>0).sort((n,i)=>i[1]-n[1]||n[0].localeCompare(i[0],"fr")).map(([n,i])=>`${n} ×${i}`);return e.length?`30 derniers jours : ${e.join(" · ")}.`:"Rien encore sur les 30 derniers jours."}function xA(t){const e=["Aujourd’hui"];return t.metier&&e.push(`Métier : ${t.metier.pack} — ${t.metier.tache}`),t.revisions>0&&e.push(`Révisions qui t’attendent : ${t.revisions} carte${t.revisions>1?"s":""}.`),t.decouverte&&e.push(`Découverte : ${t.decouverte.titre} — ${t.decouverte.resume}`),t.usage&&Object.keys(t.usage).length&&e.push(_A(t.usage)),e.length===1&&e.push("Rien de pressé — choisis un outil, ou repose-toi."),e}function e_(t){return t>0?" •":""}const bA={francais:"fr",français:"fr",french:"fr",anglais:"en",english:"en",espagnol:"es",spanish:"es",allemand:"de",german:"de",deutsch:"de",italien:"it",italian:"it",portugais:"pt",portuguese:"pt",arabe:"ar",arabic:"ar",chinois:"zh",chinese:"zh",neerlandais:"nl",dutch:"nl",russe:"ru",russian:"ru",turc:"tr",turkish:"tr",swahili:"sw",hindi:"hi",japonais:"ja",japanese:"ja",coréen:"ko",korean:"ko",grec:"el",greek:"el",polonais:"pl",polish:"pl",hébreu:"he",hebrew:"he"};function SA(t){const e=t.trim().toLowerCase();return e?bA[e]??null:null}async function yA(t,e,n,i){const r=t.trim();if(!r)return null;try{const s="https://api.mymemory.translated.net/get?q="+encodeURIComponent(r)+"&langpair="+encodeURIComponent(e)+"|"+encodeURIComponent(n),a=await i(s);if(!a.ok)return null;const l=(await a.json())?.responseData?.translatedText;return typeof l=="string"&&l.trim()?l.trim():null}catch{return null}}const nd=[{id:"soe",titre:"Système solaire",domaine:"Sciences",resume:"Le Soleil et huit planètes liées par la gravité ; la Terre est la seule connue à abriter la vie.",tags:["espace","planètes","gravité"]},{id:"gal",titre:"Voie lactée",domaine:"Sciences",resume:"Notre galaxie, un disque de plus de cent milliards d’étoiles dont le Soleil n’est qu’un point lumineux.",tags:["espace","galaxie","astronomie"]},{id:"mit",titre:"Mitose",domaine:"Sciences",resume:"La division cellulaire qui duplique chaque chromosome et fabrique deux cellules identiques, base de la croissance.",tags:["cellule","biologie","vie"]},{id:"pho",titre:"Photosynthèse",domaine:"Sciences",resume:"Les feuilles transforment la lumière, l’eau et le dioxyde de carbone en sucre et en oxygène : presque tout respire grâce à elle.",tags:["plante","énergie","biologie"]},{id:"eau",titre:"Cycle de l’eau",domaine:"Sciences",resume:"Évaporation, nuages, pluie, rivières : la même eau tourne depuis des milliards d’années sans jamais se consumer.",tags:["eau","terre","climat"]},{id:"vol",titre:"Volcans",domaine:"Sciences",resume:"Des failles de la croûte terrestre où la lave remontée du manteau façonne îles et montagnes, parfois avec violence.",tags:["terre","roche","danger"]},{id:"sek",titre:"Séismes",domaine:"Sciences",resume:"Les plaques tectiques frottent, la croûte casse et libère des ondes : c’est le tremblement de terre, mesuré en magnitude.",tags:["terre","ondes","danger"]},{id:"mno",titre:"Magnétisme",domaine:"Sciences",resume:"Aimants et courants électriques créent un champ invisible ; la Terre elle-même est un aimant géant qui guide les boussoles.",tags:["aimant","énergie","physique"]},{id:"lum",titre:"Lumière",domaine:"Sciences",resume:"Onde électromagnétique à 300 000 km/s ; sa diffusion dans l’air rend le ciel bleu et son arc-en-ciel cache toutes les couleurs.",tags:["ondes","couleur","physique"]},{id:"son",titre:"Son",domaine:"Sciences",resume:"Des vibrations qui voyagent dans l’air, l’eau ou les solides ; sans support matériel, le son n’existe pas : le silence de l’espace est total.",tags:["ondes","vibration","physique"]},{id:"mat",titre:"États de la matière",domaine:"Sciences",resume:"Solide, liquide, gaz : la même eau change d’humeur selon la température, et la chaleur cachée du changement d’état règle nos pluies.",tags:["eau","énergie","physique"]},{id:"atm",titre:"Atmosphère",domaine:"Sciences",resume:"Une coquille de gaz de cent kilomètres, la première moitié pesée au ras du sol : elle respire, protège et tient la planète au chaud.",tags:["air","terre","climat"]},{id:"ele",titre:"Électricité",domaine:"Technique",resume:"Le déplacement organisé des électrons dans un conducteur ; tout notre monde numérique n’est que de l’électricité mise en scène.",tags:["énergie","courant","technique"]},{id:"inf",titre:"Informatique",domaine:"Technique",resume:"Des portes logiques faites de transistors, des millions de zéros et des uns, et naissent textes, images et intelligences.",tags:["calcul","données","technique"]},{id:"ia",titre:"Intelligence artificielle",domaine:"Technique",resume:"Des réseaux de neurones entraînés sur d’énormes quantités de texte ou d’images savent reconnaître, traduire et converser.",tags:["calcul","données","cerveau"]},{id:"rob",titre:"Robotique",domaine:"Technique",resume:"Capteurs pour sentir, moteurs pour agir, programmes pour décider : le robot est un outil qui commence à choisir lui-même.",tags:["machine","capteur","technique"]},{id:"geo",titre:"Géométrie",domaine:"Maths",resume:"L'étude des formes, des distances et de l'espace, d'Euclide aux géométries courbes qui ont inspiré Einstein.",tags:["formes","espace","nombre"]},{id:"alg",titre:"Algèbre",domaine:"Maths",resume:"L’art de manipuler l’inconnue : une lettre devient une boîte de calcul et les équations ouvrent la solution pas à pas.",tags:["nombre","équation","méthode"]},{id:"pro",titre:"Probabilités",domaine:"Maths",resume:"Mesurer le hasard avec rigueur : dès qu’un jeu, une météo ou un risque est chiffré, ce sont les probabilités qui parlent.",tags:["hasard","nombre","décision"]},{id:"fib",titre:"Suite de Fibonacci",domaine:"Maths",resume:"Chaque terme est la somme des deux précédents ; on retrouve cette suite dans les tournesols, les pins et certaines coquilles.",tags:["nombre","nature","motif"]},{id:"nom",titre:"Nombres premiers",domaine:"Maths",resume:"Des nombres que rien ne divise à part 1 et eux-mêmes ; les briques invisibles de l’arithmétique et du code secret moderne.",tags:["nombre","arithmétique","secret"]},{id:"pyt",titre:"Pythagore",domaine:"Maths",resume:"Dans un triangle rectangle, le carré de l’hypoténuse égale la somme des carrés des deux autres côtés : l’outil des mesures depuis 2500 ans.",tags:["formes","triangle","mesure"]},{id:"evh",titre:"Évolution",domaine:"Histoire",resume:"Par sélection naturelle, les êtres vivants se transforment sur des millions d’années : la diversité du vivant en est la trace.",tags:["darwin","biologie","science"]},{id:"ren",titre:"Renaissance",domaine:"Histoire",resume:"Entre XIVe et XVIe siècle, arts, sciences et explorations éclatent en Europe : Léonard de Vinci en est l’esprit le plus curieux.",tags:["art","science","europe"]},{id:"imp",titre:"Empires d’Afrique",domaine:"Histoire",resume:"Ghana, Mali, Songhaï, Grande-Zimbabwe : de grands empires ont prospéré sur l’or, le sel, le commerce et l’urbanisme bien avant la colonisation.",tags:["afrique","commerce","or"]},{id:"mer",titre:"Mer et océans",domaine:"Géographie",resume:"L’eau salée couvre plus de 70 % de la planète, régule le climat et abrite une vie que nous cartographions moins bien que la Lune.",tags:["eau","terre","climat"]},{id:"clm",titre:"Climat",domaine:"Géographie",resume:"Le climat est une moyenne de la météo sur trente ans ; le golfe du Mexique, le Sahara et nos saisons en dépendent comme d’une horloge.",tags:["terre","air","sciences"]},{id:"cor",titre:"Cœur",domaine:"Corps humain",resume:"Une pompe-muscle de 300 grammes qui bat cent mille fois par jour et irrigue chaque cellule de sang oxygéné.",tags:["sang","vie","organe"]},{id:"cer",titre:"Cerveau",domaine:"Corps humain",resume:"Quatre-vingt-six milliards de neurones en réseau : penser, sentir et bouger ne sont que des courants et des chimies orchestrées.",tags:["neurone","vie","sens"]},{id:"som",titre:"Sommeil",domaine:"Corps humain",resume:"Chaque nuit le cerveau range la journée, consolide la mémoire et répare le corps ; dormir peu, c’est apprendre moins.",tags:["cerveau","mémoire","vie"]},{id:"mus",titre:"Musique",domaine:"Arts",resume:"Des fréquences organisées dans le temps : rythmes et gammes varient selon les cultures mais le plaisir d’écouter est universel.",tags:["son","art","culture"]},{id:"cin",titre:"Cinéma",domaine:"Arts",resume:"Vingt-quatre images par seconde suffisent à l’œil pour croire au mouvement : le cinéma est une illusion partagée devenue art majeur.",tags:["image","art","technique"]},{id:"lng",titre:"Langues du monde",domaine:"Langue",resume:"Plus de sept mille langues parlées ; chacune découpe le réel à sa façon et en perdre une, c’est perdre une manière de penser.",tags:["parole","culture","mémoire"]},{id:"ecr",titre:"Écriture",domaine:"Langue",resume:"Née à Sumer pour compter les greniers, l’écriture a étendu la mémoire humaine au-delà des individus et des siècles.",tags:["symbole","histoire","mémoire"]},{id:"bio",titre:"Biodiversité",domaine:"Environnement",resume:"Des millions d’espèces liées dans un réseau vivant ; chaque disparité retire un maillon que rien ne remplace.",tags:["vie","nature","équilibre"]},{id:"for",titre:"Forêts",domaine:"Environnement",resume:"Elles respirent pour la planète, abritent la plupart des espèces terrestres et régulent la pluie des continents.",tags:["arbres","climat","nature"]},{id:"rlf",titre:"Récifs coralliens",domaine:"Environnement",resume:"Des villes vivantes bâties par de petits animaux : moins de un pour cent de l’océan, un quart de la vie marine.",tags:["mer","vie","équilibre"]},{id:"dch",titre:"Déchets et recyclage",domaine:"Environnement",resume:"Rien dans la nature ne jette : nos déchets sont des matières qui attendent le bon geste, ou polluent longtemps.",tags:["matière","équilibre","société"]},{id:"slt",titre:"Solaire photovoltaïque",domaine:"Énergie",resume:"La lumière du soleil devient électricité dans une galette de silicium : la Terre reçoit en une heure de soleil de quoi alimenter un an.",tags:["énergie","soleil","technique"]},{id:"eol",titre:"Éolien",domaine:"Énergie",resume:"Le vent est une énergie solaire corrigée par la rotation de la Terre ; ses pales captent ce mouvement devenu courant.",tags:["énergie","vent","technique"]},{id:"nucl",titre:"Nucléaire",domaine:"Énergie",resume:"Fissionner l’uranium libère une énergie immense sans fumée ; la question reste la gestion des déchets et le risque.",tags:["énergie","atome","débat"]},{id:"bat",titre:"Batteries",domaine:"Énergie",resume:"Stockées chimiquement, les électrons attendent leur heure : sans batterie, le solaire et l’éolien ne pourraient suivre la nuit.",tags:["énergie","stockage","technique"]},{id:"urb",titre:"Villes",domaine:"Société",resume:"Nées de greniers et de carrefours, elles logent aujourd’hui plus de la moitié de l’humanité et dessinent son avenir.",tags:["habiter","société","histoire"]},{id:"mon",titre:"Monnaie",domaine:"Société",resume:"Du coquillage au chiffre : la monnaie n’a de valeur que celle de la confiance partagée, et l’économie tout entière s’appuie dessus.",tags:["échange","confiance","société"]},{id:"trv",titre:"Travail",domaine:"Société",resume:"Chaque métier est une réponse à un besoin des autres ; l’automatisation déplace le travail plus qu’il ne le fait disparaître.",tags:["métier","société","technique"]},{id:"edu",titre:"Éducation",domaine:"Société",resume:"Transmettre sans remplacer : apprendre, c’est ajouter à l’élève ce qu’il découvrira seul avec de l’aide.",tags:["école","apprendre","société"]},{id:"ntn",titre:"Internet",domaine:"Société",resume:"Des câbles sous-marins et des routeurs d’abord : le nuage numérique est en réalité un réseau très physique autour de la Terre.",tags:["réseau","données","société"]},{id:"vac",titre:"Vaccins",domaine:"Médecine",resume:"Montrer au corps l’ennemi sans le danger : il en garde la mémoire et répond plus vite la fois suivante.",tags:["corps","médecine","mémoire"]},{id:"ant",titre:"Antibiotiques",domaine:"Médecine",resume:"Des moisissures devenues médicaments : elles tuent les bactéries, et leur usage excessif fabrique des bactéries devenues résistantes.",tags:["médecine","bactérie","équilibre"]},{id:"dgst",titre:"Digestion",domaine:"Corps humain",resume:"Du bol alimentaire à l’énergie, un voyage de trente mètres où chaque organe joue son rôle à l’heure.",tags:["corps","énergie","vie"]}],MA=24;function EA(t,e){const n=dt(t.titre),i=t.tags.map(s=>dt(s)),r=dt(t.resume);return n.includes(e)?3:i.some(s=>s===e||s.includes(e)||e.includes(s))?2:r.includes(e)?1:0}function TA(t,e){const n=dt(e);return n?t.map((r,s)=>({n:r,i:s,s:EA(r,n)})).filter(r=>r.s>0).sort((r,s)=>s.s-r.s||r.i-s.i).map(r=>r.n):t.slice()}function AA(t){return[...new Set(t.map(e=>e.domaine))].sort((e,n)=>e.localeCompare(n,"fr"))}function wA(t,e){return e?t.filter(n=>n.domaine===e):t.slice()}function t_(t,e=Math.floor(Date.now()/864e5)){if(!t.length)return null;const n=Math.abs(Math.trunc(e));return t[n%t.length]}function CA(t,e,n=6){const i=new Set(t.tags.map(r=>dt(r)));return e.filter(r=>r.id!==t.id).map(r=>({x:r,s:r.tags.filter(s=>i.has(dt(s))).length*2+(r.domaine===t.domaine?1:0)})).filter(r=>r.s>0).sort((r,s)=>s.s-r.s).slice(0,n).map(r=>r.x)}function RA(t,e,n=MA){const i=Math.min(t.length,Math.max(0,e)+n);return{visibles:t.slice(0,i),reste:t.length-i}}const n_="nath.encyclo.favoris";function i_(t){try{const e=JSON.parse(t.getItem(n_)??"[]");return Array.isArray(e)?[...new Set(e.filter(n=>typeof n=="string"))]:[]}catch{return[]}}function cm(t,e){const n=i_(t),i=!n.includes(e),r=i?[...n,e]:n.filter(s=>s!==e);return t.setItem(n_,JSON.stringify(r)),i}function dm(t,e){const n=new Set(i_(e));return t.filter(i=>n.has(i.id))}function LA(t){const e=new Set,n=[];for(const i of t){const r=dt(i.titre||i.sujet);!r||e.has(r)||(e.add(r),n.push({id:`savoir:${r}`,titre:(i.titre||i.sujet).trim(),domaine:"Mes découvertes",resume:i.resume,tags:[],...i.image?{image:i.image}:{},...i.url?{url:i.url}:{}}))}return n}async function PA(t,e,n=fetch,i=""){const r=e.trim();if(!r)return null;try{const s=await n(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...i?{modele:i}:{},messages:[{role:"system",content:"Tu es un guide curieux et pédagogue, en français. En 3 ou 4 phrases courtes, donne un fait surprenant et un rapprochement inattendu avec un autre domaine sur le sujet qui vient. Pas de liste, pas de titre."},{role:"user",content:r}]})});if(!s.ok)return null;const a=await s.json(),o=a?.result?.response??a?.response,l=typeof o=="string"?o.trim():"";return l&&l.length<=800?l:null}catch{return null}}function DA(t){return!t.image}function NA(t,e,n){return!t||!t.image||!e||!/^https?:\/\//.test(t.image)||t.titre&&Xo(t.titre)!==Xo(n)||r_(e,n)?"":t.image}function r_(t,e){return!t||Xo(t)!==Xo(e)}function Xo(t){return dt(t).replace(/['’]/g," ").replace(/\s+/g," ").trim().replace(/^(?:la |le |les |l |un |une |des |du |de |d )/,"").replace(/s$/,"")}const Du=[{max:50,palier:"Classe",mensuel:15e3},{max:200,palier:"École",mensuel:4e4},{max:1e3,palier:"Réseau",mensuel:12e4},{max:1/0,palier:"Sur mesure",mensuel:null}];function IA(t){if(!Number.isFinite(t)||t<=0)return{palier:"Sur mesure",mensuel:null};const e=Du.find(n=>t<=n.max)??Du[Du.length-1];return{palier:e.palier,mensuel:e.mensuel}}function fm(t){return t===null?"à convenir":t.toLocaleString("fr-FR").replace(/[\u202f\u00a0]/g," ")+" FCFA"}const s_="nath.flamme",id=100,FA="Curieux",hm=[FA,"Défricheur","Apprenant","Explorateur","Artisan","Savant","Passeur","Esprit libre"],Nu={streak:0,meilleur:0,xp:0,dernier:""},ms=t=>typeof t=="number"&&Number.isFinite(t)&&t>0?Math.floor(t):0;function UA(t=Date.now()){const e=new Date(t),n=`${e.getMonth()+1}`.padStart(2,"0"),i=`${e.getDate()}`.padStart(2,"0");return`${e.getFullYear()}-${n}-${i}`}const pm=t=>{const[e,n,i]=t.split("-").map(Number);return!e||!n||!i?NaN:Math.floor(Date.UTC(e,n-1,i)/864e5)};function OA(t,e){const n=pm(t),i=pm(e);return Number.isNaN(n)||Number.isNaN(i)?NaN:i-n}function a_(t){try{const e=t.getItem(s_);if(!e)return{...Nu};const n=JSON.parse(e);return!n||typeof n!="object"?{...Nu}:{streak:ms(n.streak),meilleur:ms(n.meilleur),xp:ms(n.xp),dernier:typeof n.dernier=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(n.dernier)?n.dernier:""}}catch{return{...Nu}}}function o_(t,e){t.setItem(s_,JSON.stringify(e))}function BA(t,e=Date.now()){const n=a_(t),i=UA(e);if(n.dernier===i)return n;const r=n.dernier&&OA(n.dernier,i)===1?n.streak+1:1,s={streak:r,meilleur:Math.max(n.meilleur,r),xp:n.xp,dernier:i};return o_(t,s),s}function l_(t,e,n=Date.now()){const i=ms(e),r=BA(t,n),s={...r,xp:r.xp+i};return o_(t,s),s}function kA(t){return Math.floor(ms(t)/id)+1}function qA(t){const e=Math.max(1,Math.floor(t)||1);return hm[Math.min(e-1,hm.length-1)]}function zA(t){return ms(t)%id/id}const u_="nath.journal",VA=200,gs=t=>typeof t=="string"?t.trim():"",mm=t=>typeof t=="number"&&Number.isFinite(t)?Math.floor(t):0;function GA(t,e){if(!t||typeof t!="object")return null;const n=t,i=gs(n.titre),r=gs(n.texte);return!i&&!r?null:{id:typeof n.id=="string"&&n.id?n.id:`entree-${e}-${mm(n.at)}`,titre:i||r.slice(0,48),texte:r||i,origine:gs(n.origine)||"note",at:mm(n.at)}}function pa(t){try{const e=t.getItem(u_);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.map(GA).filter(i=>i!==null):[]}catch{return[]}}function c_(t,e){t.setItem(u_,JSON.stringify(e.slice(0,VA)))}function d_(t,e,n){const i=gs(e.titre),r=gs(e.texte);if(!i&&!r)return null;const s=Date.now(),a={id:`${s}-${Math.random().toString(36).slice(2,8)}`,titre:i||r.slice(0,48),texte:r||i,origine:gs(e.origine)||"note",at:s};return c_(t,[a,...pa(t)]),a}function gm(t,e){const n=dt(e).trim();return n?t.filter(i=>`${dt(i.titre)} ${dt(i.texte)}`.includes(n)):[...t]}function HA(t,e){const n=pa(t),i=n.filter(r=>r.id!==e);return i.length===n.length?!1:(c_(t,i),!0)}function jA(t,e=8){return t.filter(n=>n.titre&&n.texte).slice(0,e).map(n=>({verso:n.titre,recto:n.texte}))}function $A(t){if(!t.length)return"Le journal est vide pour l’instant.";const e=`Nath Assist — mon journal
`,n=[...t].sort((i,r)=>r.at-i.at).map(i=>`[${new Date(i.at).toLocaleDateString("fr-FR")}] ${i.titre}
${i.texte}
`).join(`
`);return`${e}
${n}`}const vm="nath.savoir",br="nath.lexique",ce=t=>{const e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstElementChild},Qe=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e);function WA(t){const e=xf(),n=ce('<button class="savoir-btn" title="Mon coin d’études" aria-label="Ouvrir le coin d’études">🎓</button>'),i=ce(`
    <div class="savoir-paneau" hidden role="dialog" aria-label="Coin d'études">
      <div class="savoir-tete">
        <div class="savoir-onglets">
          <button data-on="reviser" class="actif">Réviser</button>
          <button data-on="savoir">Savoir</button>
          <button data-on="encyclo">Encyclopédie</button>
          <button data-on="entreprise">Entreprise</button>
        </div>
        <button class="savoir-fermer" title="Fermer" aria-label="Fermer">×</button>
      </div>
      <div class="savoir-corps"></div>
    </div>`);document.body.append(n,i);const r=i.querySelector(".savoir-corps");n.addEventListener("click",()=>{i.hidden=!i.hidden,i.hidden?$o("savoir"):(Kv("savoir"),R(s))}),i.querySelector(".savoir-fermer").addEventListener("click",()=>{i.hidden=!0,$o("savoir")});let s="reviser",a=null,o=[],l=null,u="",c=!1,d=0,f="",m=null;const v=i.querySelector('.savoir-onglets [data-on="reviser"]'),_=()=>{const V=dn(t).reduce((O,H)=>O+jo(H,Date.now()).aRevoir,0);return`Réviser${e_(V)}`},g=()=>{v&&(v.textContent=_())};g();const h=()=>{try{const V=JSON.parse(t.getItem(vm)??"[]");return Array.isArray(V)?V.filter(O=>!!O&&typeof O=="object"&&typeof O.sujet=="string"&&typeof O.resume=="string"):[]}catch{return[]}},M=()=>ed(t.getItem(br));i.querySelectorAll(".savoir-onglets button").forEach(V=>V.addEventListener("click",()=>{s=V.dataset.on,i.querySelectorAll(".savoir-onglets button").forEach(O=>O.classList.toggle("actif",O===V)),R(s),g()}));const T=()=>a?dn(t).find(V=>V.id===a)??null:null,A=()=>a?dn(t).filter(V=>V.id===a):dn(t);function R(V){r.innerHTML="",V==="reviser"?C():V==="savoir"?y():V==="encyclo"?$():V==="entreprise"?Ae():K()}function C(){const V=dn(t),O=ce('<select class="savoir-select"><option value="">Tous les paquets</option></select>');for(const Z of V){const oe=document.createElement("option");oe.value=Z.id,oe.textContent=`${Z.nom} (${Z.fiches.length})`,Z.id===a&&(oe.selected=!0),O.appendChild(oe)}O.addEventListener("change",()=>{a=O.value||null,l=null,C()}),r.appendChild(O);const H=ce('<div class="savoir-ligne"><input type="text" placeholder="Nouveau paquet (ex. Biologie)" aria-label="Nouveau paquet" /><button>Ajouter</button></div>'),ae=H.querySelector("input");H.querySelector("button").addEventListener("click",()=>{const Z=ss(t,ae.value);Z?(a=Z.id,C()):ae.focus()}),r.appendChild(H);const U=A().map(Z=>jo(Z,Date.now())).reduce((Z,oe)=>({total:Z.total+oe.total,aRevoir:Z.aRevoir+oe.aRevoir,revisees:Z.revisees+oe.revisees}),{total:0,aRevoir:0,revisees:0});r.appendChild(ce(`<p class="savoir-stats">${U.total} carte${U.total>1?"s":""} · <b>${U.aRevoir} à revoir</b> · ${U.revisees} travaillée${U.revisees>1?"s":""}</p>`));const Q=ce('<details class="savoir-import"><summary>Coller des cartes (une par ligne : question :: réponse)</summary><textarea rows="4" placeholder="Capitale du Cameroun :: Yaoundé&#10;2 + 2 :: 4"></textarea><button>Importer</button></details>'),pe=Q.querySelector("textarea");Q.querySelector("button").addEventListener("click",()=>{const Z=a??ss(t,"Mes cartes")?.id??null;if(!Z)return;a=Z;let oe=0;for(const fe of pe.value.split(/\r?\n/)){const xe=fe.indexOf("::");xe<=0||ca(t,Z,fe.slice(0,xe),fe.slice(xe+2))&&oe++}C(),oe&&e.parler(`${oe} cartes rangées dans ${T()?.nom??"Mes cartes"}.`,"posee")}),r.appendChild(Q);const le=ce('<div class="savoir-actions"><button class="savoir-dicter">🎤 Dicter un cours</button></div>');le.querySelector(".savoir-dicter").addEventListener("click",()=>{if(r.querySelector(".savoir-session")?.remove(),!e.sttDisponible){r.appendChild(ce('<p class="savoir-msg">Je n’ai pas d’oreille aujourd’hui — colle ton cours en texte, ça marche aussi.</p>'));return}r.appendChild(ce('<p class="savoir-msg">J’écoute… parle normalement, je retirerai les « euh » tout seul.</p>')),e.ecouter(async Z=>{const oe=Jv(Z);if(r.querySelector(".savoir-msg")?.remove(),!oe){r.appendChild(ce('<p class="savoir-msg">Je n’ai rien entendu de assez net — redicte, sans te presser.</p>'));return}let xe=a;if(!xe){const Ye=Zt(t),Je=dn(t).map(ne=>ne.nom),te=Ye&&Je.length?await MT(Ye,oe,Je):null;te&&(xe=dn(t).find(ne=>ne.nom===te)?.id??null)}const de=xe??ss(t,"Mes cartes")?.id??null;if(!de)return;a=de;let Oe=0;for(const Ye of Pu(oe))ca(t,de,Ye.verso,Ye.recto)&&Oe++;C();const L=ce(Oe?`<p class="savoir-msg">${Oe} carte${Oe>1?"s":""} née${Oe>1?"s":""} de ta voix, rangée${Oe>1?"s":""} dans « ${Qe(T()?.nom??"Mes cartes")} ». Révise quand tu veux.</p>`:'<p class="savoir-msg">Trop court pour faire des cartes — dicte-moi des phrases complètes, une idée par phrase.</p>');r.insertBefore(L,r.firstChild),Oe&&e.parler(`${Oe} cartes nées de ta dictée.`,"lumineuse")})}),r.appendChild(le);const Pe=ce('<div class="savoir-actions"><button class="savoir-reviser">Réviser maintenant</button><button class="savoir-quiz">Quiz du jour</button></div>');Pe.querySelector(".savoir-reviser").addEventListener("click",()=>{if(o=KT(A(),Date.now()),o.length===0){r.querySelector(".savoir-session")?.remove(),r.appendChild(ce('<p class="savoir-msg">Rien à revoir pour l’instant — repose-toi, ou importe des cartes.</p>'));return}w()}),Pe.querySelector(".savoir-quiz").addEventListener("click",()=>{const Z=T()??A().find(oe=>oe.fiches.length>=2);if(!Z){r.appendChild(ce('<p class="savoir-msg">Un quiz a besoin d’un paquet d’au moins deux cartes.</p>'));return}l={questions:eA(Z,5),index:0,reponses:[],fini:!1},x()}),r.appendChild(Pe)}function w(){r.querySelector(".savoir-session")?.remove();const V=o.shift();if(!V){r.appendChild(ce('<p class="savoir-msg session">Fin de la file 🌿 — tout est revu, la mémoire fait son travail en silence.</p>'));return}const O=ce(`<div class="savoir-session session">
      <p class="savoir-reste">encore ${o.length}</p>
      <p class="savoir-verso">${Qe(V.verso)}</p>
      <div class="savoir-reponse" hidden><p class="savoir-recto">${Qe(V.recto)}</p></div>
      <div class="savoir-actions">
        <button class="savoir-voir">Voir la réponse</button>
        <span class="savoir-noter" hidden>
          <button data-n="difficile">Difficile</button>
          <button data-n="bien">Bien</button>
          <button data-n="facile">Facile</button>
        </span>
      </div>
    </div>`),H=O.querySelector(".savoir-reponse"),ae=O.querySelector(".savoir-noter");O.querySelector(".savoir-voir").addEventListener("click",()=>{H.hidden=!1,ae.hidden=!1,O.querySelector(".savoir-voir").hidden=!0,e.parler(V.recto,"posee")}),ae.querySelectorAll("button").forEach(I=>I.addEventListener("click",()=>{const U=a??B(V.id);U&&tA(t,U,V.id,I.dataset.n),l_(t,5),w()})),r.appendChild(O)}function B(V){for(const O of dn(t))if(O.fiches.some(H=>H.id===V))return O.id;return null}function x(){if(r.querySelector(".savoir-session")?.remove(),!l)return C();const V=l.questions[l.index];if(!V||l.fini){const ae=l.reponses.filter((Q,pe)=>Q===l.questions[pe].bonne).length,I=l.questions.length;l=null,C();const U=Math.round(100*ae/(I||1));r.insertBefore(ce(`<p class="savoir-msg session">Quiz : ${ae}/${I} (${U} %). ${U>=70?"Tu tiens le sujet.":"On creuse encore, tranquillement."}</p>`),r.firstChild),e.parler(`Quiz terminé : ${ae} sur ${I}.`,"lumineuse");return}const O=ce(`<div class="savoir-session session">
      <p class="savoir-reste">question ${l.index+1} / ${l.questions.length}</p>
      <p class="savoir-verso">${Qe(V.enonce)}</p>
      <div class="savoir-choix"></div>
    </div>`),H=O.querySelector(".savoir-choix");e.parler(V.enonce,"posee"),V.choix.forEach((ae,I)=>{const U=document.createElement("button");U.textContent=ae,U.addEventListener("click",()=>{l.reponses[l.index]=I,[...H.children].forEach((Q,pe)=>Q.classList.toggle("juste",pe===V.bonne)),U.classList.toggle("faux",I!==V.bonne),e.parler(I===V.bonne?"Oui, exactement.":ae,I===V.bonne?"lumineuse":"douce"),window.setTimeout(()=>{l.index++,x()},1100)}),H.appendChild(U)}),r.appendChild(O)}function y(){const V=ce('<div class="savoir-ligne"><input type="text" placeholder="Que veux-tu apprendre ? (ex. la mitose)" aria-label="Sujet" /><button>Chercher</button></div>'),O=V.querySelector("input"),H=V.querySelector("button"),ae=ce('<div class="savoir-resultat"></div>');O.addEventListener("keydown",Z=>{Z.key==="Enter"&&I(O.value.trim())}),H.addEventListener("click",()=>I(O.value.trim()));function I(Z){if(ae.innerHTML="",!Z)return;const oe=nA(h(),Z);oe?D(oe,ae):J(Z,ae)}r.append(V,ae);const U=ce(`<details class="savoir-import"><summary>Grand cerveau en ligne (pour les machines sages)</summary>
      <p class="savoir-note">Sur demande à Nath-Tech, une adresse de cerveau prêté peut être réglée ici : les machines sans grande carte répondent alors plus vite et plus loin. Laisser vide pour éteindre ce secours.</p>
      <div class="savoir-ligne"><input type="text" class="cerv-url" placeholder="https://… (vide pour effacer)" aria-label="Adresse du grand cerveau" /><button class="cerv-ok">Régler</button></div>
      <div class="savoir-ligne"><select class="savoir-select cerv-allure" aria-label="Allure du grand cerveau"></select><button class="cerv-allure-ok">Allure</button></div>
      <p class="savoir-msg cerv-etat"></p></details>`),Q=U.querySelector(".cerv-url"),pe=U.querySelector(".cerv-etat"),le=Zt(t);pe.textContent=le?"Le secours est réglé et veille.":"Aucun secours réglé — le cerveau local et le petit moteur suffisent.",U.querySelector(".cerv-ok").addEventListener("click",()=>{mT(t,Q.value)?(pe.textContent=Zt(t)?"Le secours est réglé — il répondra dès la prochaine ouverture.":"Secours éteint. Le ciel reste vivant, sans lui.",Q.value=""):pe.textContent="Cette adresse ne convient pas — il faut du https."});const Pe=U.querySelector(".cerv-allure");for(const Z of gf){const oe=document.createElement("option");oe.value=Z.cle,oe.textContent=Z.nom,Pe.appendChild(oe)}Pe.value=pT(t),U.querySelector(".cerv-allure-ok").addEventListener("click",()=>{hT(t,Pe.value)?pe.textContent=Cr(t)?"Son allure est réglée — la prochaine réponse la portera.":"Elle reprend son allure ordinaire.":pe.textContent="Cette allure n’existe pas — le choix reste entier."}),r.appendChild(U)}function D(V,O){O.innerHTML="";const H=ce(`<div class="savoir-fiche"><h4>${Qe(V.titre)}</h4></div>`);if(V.image&&/^https?:\/\//.test(V.image)){const pe=document.createElement("img");pe.className="savoir-img",pe.src=V.image,pe.alt="",pe.loading="lazy",H.appendChild(pe)}const ae=ce(`<p>${Qe(V.resume)}</p>`);H.appendChild(ae);const I=ce('<div class="savoir-actions"></div>'),U=ce("<button>En faire des cartes</button>");U.addEventListener("click",()=>{const pe=T()??ss(t,V.sujet);if(!pe)return;a=pe.id;let le=0;for(const Pe of Pu(V.resume))ca(t,pe.id,Pe.verso,Pe.recto)&&le++;O.appendChild(ce(`<p class="savoir-msg">${le} carte${le>1?"s":""} rangée${le>1?"s":""} dans « ${Qe(pe.nom)} » — onglet Réviser pour les travailler.</p>`)),e.parler(`${le} cartes rangées.`,"lumineuse")}),I.appendChild(U);const Q=/^https?:\/\//.test(V.url)?V.url:"";Q&&I.appendChild(ce(`<a class="savoir-lien" href="${Qe(Q)}" target="_blank" rel="noopener noreferrer">Voir la source</a>`)),O.append(H,I)}function J(V,O){const H=ce(`<div class="savoir-fiche"><p>« ${Qe(V)} » ne fait pas encore partie de mes connaissances enregistrées.</p>
      <p class="savoir-note">Veux-tu que je me connecte pour ramener le maximum de ressources sur ce sujet ? Seul le sujet sort de l’appareil, rien sur toi.</p>
      <div class="savoir-actions"><button class="oui">Oui, cherche</button><button class="non">Garde pour plus tard</button></div></div>`);H.querySelector(".non").addEventListener("click",()=>O.innerHTML=""),H.querySelector(".oui").addEventListener("click",async()=>{const ae=ce('<p class="savoir-msg">Je cherche…</p>');O.appendChild(ae);const I=await om(V,fetch);if(ae.remove(),!I){O.appendChild(ce('<p class="savoir-msg">Pas de réponse du net pour l’instant — ou le sujet est trop précis. Réessaie, ou dicte-moi tes propres notes.</p>'));return}const U={sujet:V,titre:I.titre,resume:I.resume,url:I.url,image:I.image,ramene_a:Date.now()};t.setItem(vm,JSON.stringify(iA(h(),U))),O.innerHTML="",D(U,O),e.parler("J’ai ramené de quoi apprendre.","lumineuse")}),O.appendChild(H)}const G=()=>[...nd,...LA(h())];function $(){if(r.innerHTML="",m){ee(m);return}const V=G(),O=new Set(dm(V,t).map(Z=>Z.id)),H=ce(`<div class="savoir-ligne enc-tete"><input type="text" class="enc-champ" placeholder="Cherche un sujet (ex. geometrie, espace…)" aria-label="Recherche encyclopédie" /><button class="enc-fav" title="Mes favoris">★ <span class="enc-fav-n">${O.size}</span></button></div>`),ae=H.querySelector(".enc-champ");ae.value=u;const I=H.querySelector(".enc-fav");if(I.classList.toggle("actif",c),ae.addEventListener("input",()=>{u=ae.value,d=0,$();const Z=r.querySelector(".enc-champ");Z&&(Z.focus(),Z.setSelectionRange(Z.value.length,Z.value.length))}),I.addEventListener("click",()=>{c=!c,d=0,$()}),r.appendChild(H),!u&&!c&&!f){const Z=t_(V);if(Z){const oe=ce(`<button class="enc-jour">✨ Découverte du jour · ${Qe(Z.titre)}<small> ${Qe(Z.domaine)}</small></button>`);oe.addEventListener("click",()=>{m=Z,$()}),r.appendChild(oe)}}const U=ce('<div class="enc-domaines"></div>'),Q=[{nom:"Tous",val:""},...AA(V).map(Z=>({nom:Z,val:Z}))];for(const Z of Q){const oe=ce(`<button class="enc-dom${!c&&f===Z.val?" actif":""}">${Qe(Z.nom)}</button>`);oe.addEventListener("click",()=>{c=!1,f=Z.val,d=0,$()}),U.appendChild(oe)}r.appendChild(U);let pe=TA(V,u);c&&(pe=pe.filter(Z=>O.has(Z.id))),pe=wA(pe,f);const le=RA(pe,d),Pe=ce('<div class="enc-grille"></div>');for(const Z of le.visibles){const oe=ce(`<div class="enc-carte" role="button" tabindex="0">
        <button class="enc-etoile${O.has(Z.id)?" mise":""}" aria-label="Favori">${O.has(Z.id)?"★":"☆"}</button>
        <h5>${Qe(Z.titre)}</h5><p class="enc-domaine">${Qe(Z.domaine)}</p><p class="enc-resume">${Qe(Z.resume)}</p></div>`);oe.querySelector(".enc-etoile").addEventListener("click",fe=>{fe.stopPropagation(),cm(t,Z.id),$()}),oe.addEventListener("click",()=>{m=Z,$()}),oe.addEventListener("keydown",fe=>{fe.key==="Enter"&&(m=Z,$())}),Pe.appendChild(oe)}if(r.appendChild(Pe),le.visibles.length||r.appendChild(ce(`<p class="savoir-msg">${c?"Aucune étoile ici pour l’instant — clique sur ☆ d’une carte pour la garder.":"Rien sous ce nom — Essaie un mot plus simple, ou va le chercher dans l’onglet Savoir."}</p>`)),le.reste>0){const Z=ce(`<div class="savoir-actions"><button>Afficher plus (${le.reste})</button></div>`);Z.querySelector("button").addEventListener("click",()=>{d=le.visibles.length,$()}),r.appendChild(Z)}else if(le.visibles.length){const Z=le.visibles.length>1?"notices":"notice";r.appendChild(ce(`<p class="savoir-note">${le.visibles.length} ${Z} sur l’étagère.</p>`))}}function ee(V){r.innerHTML="";const O=G(),H=dm([V],t).length>0,ae=ce(`<div class="savoir-ligne"><button class="enc-retour">← Étagère</button><button class="enc-etoile${H?" mise":""}">${H?"★ Favori":"☆ Mettre en favori"}</button><button class="enc-journal">✎ Garder au journal</button></div>`);ae.querySelector(".enc-retour").addEventListener("click",()=>{m=null,$()}),ae.querySelector(".enc-journal").addEventListener("click",Z=>{d_(t,{titre:V.titre,texte:V.resume,origine:"encyclo"});const oe=Z.currentTarget;oe.textContent="✓ Gardé",oe.disabled=!0}),ae.querySelector(".enc-etoile").addEventListener("click",()=>{cm(t,V.id),ee(V)}),r.appendChild(ae);const I=ce(`<div class="savoir-fiche"><h4>${Qe(V.titre)} <small class="enc-domaine">${Qe(V.domaine)}</small></h4></div>`);if(V.image&&/^https?:\/\//.test(V.image)){const Z=document.createElement("img");Z.className="savoir-img",Z.src=V.image,Z.alt="",Z.loading="lazy",I.appendChild(Z)}I.appendChild(ce(`<p>${Qe(V.resume)}</p>`)),r.appendChild(I);const U=CA(V,O);if(U.length){const Z=ce('<div class="enc-liens"><p class="savoir-note">Liens extraordinaires</p></div>');for(const oe of U){const fe=ce(`<button class="enc-lien">${Qe(oe.titre)}</button>`);fe.addEventListener("click",()=>{m=oe,$()}),Z.appendChild(fe)}r.appendChild(Z)}const Q=ce('<div class="savoir-actions"></div>'),pe=ce("<button>En faire des cartes</button>");if(pe.addEventListener("click",()=>{const Z=T()??ss(t,V.titre);if(!Z)return;a=Z.id;let oe=0;for(const fe of Pu(V.resume))ca(t,Z.id,fe.verso,fe.recto)&&oe++;r.appendChild(ce(`<p class="savoir-msg">${oe} carte${oe>1?"s":""} rangée${oe>1?"s":""} dans « ${Qe(Z.nom)} » — onglet Réviser pour les travailler.</p>`)),e.parler(`${oe} cartes rangées.`,"lumineuse")}),Q.appendChild(pe),DA(V)){const Z=ce("<button>Chercher une illustration</button>");Z.addEventListener("click",async()=>{Z.disabled=!0,Z.textContent="Je regarde…";const oe=await om(V.titre,fetch);if(r_(m?.titre??null,V.titre))return;const fe=NA(oe,m?.titre??"",V.titre),xe=r.querySelector(".savoir-fiche");if(fe&&xe&&!xe.querySelector("img")){const de=document.createElement("img");de.className="savoir-img",de.src=fe,de.alt="",de.loading="lazy",de.onerror=()=>de.remove();const Oe=xe.querySelector("h4");xe.insertBefore(de,Oe?Oe.nextSibling:null),Z.remove()}else Z.disabled=!1,Z.textContent="Chercher une illustration",r.appendChild(ce('<p class="savoir-msg">Le net n’a pas d’image pour ce sujet — ou bien ce n’est pas le bon.</p>'))}),Q.appendChild(Z)}const le=Zt(t);if(le){const Z=ce("<button>Approfondir avec le grand cerveau</button>");Z.addEventListener("click",async()=>{Z.disabled=!0;const oe=ce('<p class="savoir-msg">Je consulte le grand cerveau…</p>');r.appendChild(oe);const fe=await PA(le,V.titre,fetch,Cr(t));oe.remove(),Z.disabled=!1,r.appendChild(ce(`<p class="savoir-msg">${fe?Qe(fe):"Le grand cerveau ne répond pas pour l’instant — elle reviendra, plus tard."}</p>`))}),Q.appendChild(Z)}const Pe=V.url&&/^https?:\/\//.test(V.url)?V.url:"";Pe&&Q.appendChild(ce(`<a class="savoir-lien" href="${Qe(Pe)}" target="_blank" rel="noopener noreferrer">Voir la source</a>`)),r.appendChild(Q)}function K(){const V=ce('<input type="text" class="trad-langue" placeholder="Ta langue (ex. wolof, ewondo…)" aria-label="Langue" />'),O=ce('<textarea class="trad-phrase" rows="2" placeholder="Écris (ou dicte dans la bulle du bas)…" aria-label="Phrase à traduire"></textarea>'),H=ce('<div class="savoir-resultat"></div>'),ae=ce('<div class="savoir-actions"><button class="trad-faire">Traduire</button></div>'),I=ce(`<details class="savoir-import"><summary>Ajouter à mon lexique (il reste ici, hors-ligne)</summary>
      <div class="savoir-actions"><button class="trad-dicter">🎤 Dicter un mot — dites « bonjour veut dire… »</button></div>
      <div class="savoir-ligne"><input type="text" placeholder="mot français" aria-label="Mot français" /><input type="text" placeholder="traduction dans ta langue" aria-label="Traduction" /><button>Ajouter</button></div></details>`);I.querySelector(".trad-dicter").addEventListener("click",()=>{if(!e.sttDisponible){H.innerHTML="",H.appendChild(ce('<p class="savoir-msg">Je n’ai pas d’oreille aujourd’hui — écris le mot ci-dessous.</p>'));return}const fe=V.value.trim();H.innerHTML="",H.appendChild(ce('<p class="savoir-msg">J’écoute… dis par exemple « bonjour veut dire naka nga def ».</p>')),e.ecouter(xe=>{H.innerHTML="";const de=Yv(xe);if(!de){H.appendChild(ce(`<p class="savoir-msg">J’ai entendu « ${Qe(xe)} » sans voir le couple — recommence avec « mot veut dire traduction ».</p>`));return}if(!fe){U.value=de.de,Q.value=de.a,H.appendChild(ce('<p class="savoir-msg">Donne-moi le nom de la langue en haut, puis appuie sur Ajouter — tout est prêt.</p>'));return}t.setItem(br,JSON.stringify(ls(M(),de.de,de.a,fe))),H.appendChild(ce(`<p class="savoir-msg">${Qe(de.de)} → ${Qe(de.a)}, rangé dans mon carnet.</p>`)),e.parler(`${de.de} veut dire ${de.a}.`,"lumineuse")})});const[U,Q]=[...I.querySelectorAll("input")];I.querySelector(".savoir-ligne button").addEventListener("click",()=>{const fe=V.value;if(!fe.trim()||!U.value.trim()||!Q.value.trim())return;const xe=ed(t.getItem(br));t.setItem(br,JSON.stringify(ls(xe,U.value,Q.value,fe))),U.value="",Q.value="",e.parler("C’est dans mon carnet.","douce")}),V.value=localStorage.getItem("nath.trad.langue")??"",V.addEventListener("change",()=>localStorage.setItem("nath.trad.langue",V.value)),ae.querySelector(".trad-faire").addEventListener("click",()=>{const fe=V.value,xe=Hv(O.value,fe,M());if(H.innerHTML="",xe.resultat){const de=ce(`<div class="savoir-fiche"><p class="trad-out">${Qe(xe.resultat)}</p></div>`),Oe=ce("<button>Écouter</button>");Oe.addEventListener("click",()=>e.parler(xe.resultat,"posee")),de.appendChild(Oe),H.appendChild(de),xe.manques.length&&(H.appendChild(ce(`<p class="savoir-note">mots que je ne connais pas encore : ${Qe(xe.manques.join(", "))} — ajoute-les ci-dessous, ton lexique grandit pour toujours.</p>`)),pe())}else{const de=$v(fe);if(de.length){const Oe=ce(`<p class="savoir-msg">Je ne connais encore rien dans cette langue — mais on m'a donné des mots sûrs en « ${Qe(fe.trim())} ».</p>`),L=ce("<button>Charger ce socle de mots</button>");L.addEventListener("click",()=>{let Ye=M();for(const Je of de)Ye=ls(Ye,Je.de,Je.a,fe.trim());t.setItem(br,JSON.stringify(Ye)),H.innerHTML="",H.appendChild(ce(`<p class="savoir-msg">${de.length} mots de vie rangés dans mon carnet. Écris une phrase, je saurai répondre.</p>`)),e.parler("Le socle est chargé. Ton lexique peut grandir.","lumineuse")}),Oe.appendChild(L),H.appendChild(Oe)}else H.appendChild(ce('<p class="savoir-msg">Je ne connais encore aucun mot dans cette langue. Sème ton lexique une entrée à la fois, ou colle le carnet d’un autre plus bas — ensemble on traduit tout le monde.</p>'));pe()}});function pe(){const fe=SA(V.value);if(!fe)return le();const xe=ce('<div class="savoir-actions"><button class="trad-filet">Demander au filet gratuit (cette phrase sortira de l’appareil)</button></div>');xe.querySelector(".trad-filet").addEventListener("click",async()=>{const de=xe.querySelector("button"),Oe=O.value.trim();if(!Oe)return;de.disabled=!0,de.textContent="Je demande…";const L=await yA(Oe,"fr",fe,fetch);if(xe.remove(),!L){H.appendChild(ce('<p class="savoir-msg">Le filet n’a rien pu pour cette phrase — ton carnet reste la meilleure mémoire.</p>'));return}const Ye=Zt(t);if(Ye&&await ET(Ye,Oe,L,V.value.trim())===!1){H.appendChild(ce('<p class="savoir-msg">Le filet a répondu, mais ça ne me semble pas fidèle à ta phrase — une proposition douteuse ne se range pas. Ton carnet ne garde que le juste.</p>')),e.parler("Cette traduction ne me semble pas juste — on ne la range pas.","douce");return}Pe(L,"filet gratuit",Oe)}),H.appendChild(xe)}function le(){const fe=Zt(t);if(!fe)return;const xe=ce('<div class="savoir-actions"><button class="trad-cerveau">Demander au grand cerveau en ligne (cette phrase sortira de l’appareil)</button></div>');xe.querySelector(".trad-cerveau").addEventListener("click",async()=>{const de=xe.querySelector("button"),Oe=O.value.trim();if(!Oe)return;de.disabled=!0,de.textContent="Je demande…";const L=await vT(fe,Oe,V.value.trim(),fetch);if(xe.remove(),!L){H.appendChild(ce('<p class="savoir-msg">Le grand cerveau n’a rien su pour cette phrase — ton carnet reste la meilleure mémoire.</p>'));return}Pe(L,"grand cerveau en ligne",Oe)}),H.appendChild(xe)}function Pe(fe,xe,de){const Oe=ce(`<div class="savoir-fiche"><p class="trad-out">${Qe(fe)}</p><p class="savoir-note">proposition du ${xe} — vérifie avec ton oreille ; si c’est juste, range-le : ça rendra service à tout le monde.</p></div>`),L=ce("<button>Ranger dans mon carnet</button>");L.addEventListener("click",()=>{const Ye=V.value.trim();!Ye||!de||(t.setItem(br,JSON.stringify(ls(M(),de,fe,Ye))),L.textContent="Rangé 🌿",L.disabled=!0,e.parler("Merci — ton carnet est un peu plus monde.","douce"))}),Oe.appendChild(L),H.appendChild(Oe)}const Z=ce(`<details class="savoir-import"><summary>Mon carnet complet — le prêter, ou emprunter celui d’un autre</summary>
      <div class="savoir-actions"><button class="trad-copier">Copier tout mon lexique</button></div>
      <textarea class="trad-collecte" rows="3" placeholder="les mots copiés se collent ici pour être prêtés" aria-label="Mon lexique à prêter" hidden></textarea>
      <textarea class="trad-import" rows="3" placeholder="Colle ici le carnet d’un autre (une ligne par mot : langue | mot :: traduction)" aria-label="Lexique à importer"></textarea>
      <div class="savoir-actions"><button class="trad-importer">Ajouter ces mots au mien</button></div></details>`),oe=Z.querySelector(".trad-collecte");Z.querySelector(".trad-copier").addEventListener("click",async()=>{const fe=oA(M());if(!fe){e.parler("Mon carnet est encore vide — ajoute des mots, il sera prêt à partager.","douce");return}try{await navigator.clipboard.writeText(fe),H.innerHTML="",H.appendChild(ce(`<p class="savoir-msg">${Qe(String(fe.split(`
`).length))} mots copiés — colle-les chez qui veut, son lexique grandira.</p>`)),e.parler("C’est copié. Tu peux le prêter.","lumineuse")}catch{oe.hidden=!1,oe.value=fe,oe.select(),H.appendChild(ce('<p class="savoir-note">Sélectionne tout dans la case et copie — le carnet est prêt à être prêté.</p>'))}}),Z.querySelector(".trad-importer").addEventListener("click",()=>{const fe=Z.querySelector(".trad-import").value,xe=M(),de=lA(fe,xe),Oe=de.length-xe.length;if(Oe<=0){H.appendChild(ce('<p class="savoir-msg">Rien de nouveau là-dedans — ou les lignes ne sont pas dans le format « langue | mot :: traduction ».</p>'));return}t.setItem(br,JSON.stringify(de)),Z.querySelector(".trad-import").value="",H.appendChild(ce(`<p class="savoir-msg">${Qe(String(Oe))} mots reçus d’un autre — merci à lui. Notre lexique est plus fort.</p>`)),e.parler(`${Oe} mots reçus. Merci à celui qui les a semés.`,"douce")}),r.append(V,O,ae,H,I,Z)}let j=null;const ie=document.getElementById("patte"),ye=ie?ie.innerHTML:"";function me(V){j===null&&(j=document.title);const O=um(V);document.documentElement.style.setProperty("--teinte",O);let H=document.querySelector('meta[name="theme-color"]');H||(H=document.createElement("meta"),H.name="theme-color",document.head.appendChild(H)),H.content=O,document.title=V.actif?V.slogan?`${V.nom} — ${V.slogan}`:V.nom:j,ie&&(ie.innerHTML=V.actif?`${Qe(V.nom)} — <span>${Qe(V.slogan||"l’assistant vivant")}</span>`:ye)}function Ae(){const V=sa(t),O=ce('<div class="savoir-resultat"></div>');if(V.actif){const I=ce(`<div class="savoir-fiche"><h4>${Qe(V.nom)}</h4><p>${Qe(V.slogan)}</p>
        <p class="savoir-note">Cet appareil porte le visage de « ${Qe(V.organisation)} ».</p></div>`),U=ce('<div class="savoir-actions"><button class="ent-perso">Revenir en mode personnel</button></div>');U.querySelector(".ent-perso").addEventListener("click",()=>{dA(t),me(sa(t)),R("entreprise"),e.parler("Je reprends mon visage habituel.","douce")}),r.append(I,U)}const H=ce(`<div class="savoir-fiche">
      <p class="savoir-note">Pour une école, une ONG, une équipe : la clé se demande à Nath-Tech avec le nom exact de l’organisation. Rien n’est bridé, on peut toujours revenir.</p>
      <div class="savoir-ligne"><input type="text" class="ent-org" placeholder="Organisation (ex. Lycée Bilingue de Douala)" aria-label="Organisation" /></div>
      <div class="savoir-ligne"><input type="text" class="ent-nom" placeholder="Nom visible (ex. LBD)" aria-label="Nom de la marque" /><input type="text" class="ent-slogan" placeholder="Slogan (facultatif)" aria-label="Slogan" /></div>
      <div class="savoir-ligne"><input type="color" class="ent-teinte" value="${Qe(um(V))}" aria-label="Teinte" /><input type="text" class="ent-cle" placeholder="Clé d’équipe (blocs de 4)" aria-label="Clé d’équipe" /></div>
      <div class="savoir-actions"><button class="ent-ok">Habiller l’app pour mon équipe</button></div>
    </div>`);H.querySelector(".ent-ok").addEventListener("click",()=>{const I=Q=>H.querySelector(`.${Q}`).value;cA(t,{organisation:I("ent-org"),cle:I("ent-cle"),nom:I("ent-nom"),slogan:I("ent-slogan"),couleur:I("ent-teinte")})?(me(sa(t)),R("entreprise"),e.parler(`Désormais, je travaille pour ${sa(t).nom}.`,"lumineuse")):(O.innerHTML="",O.appendChild(ce('<p class="savoir-msg">Cette clé n’ouvre rien pour ce nom-là — vérifie le nom exact de l’organisation et la clé, bloc par bloc.</p>')))});const ae=ce(`<div class="savoir-fiche">
      <p class="savoir-note">Nath Entreprise pour une école, une ONG, une équipe — toute l’équipe habillée, un seul prix :</p>
      <div class="savoir-ligne"><input type="number" class="ent-nb" min="1" placeholder="Nombre de personnes à équiper" aria-label="Nombre de personnes" /><button class="ent-devis">Estimer</button></div>
      <div class="ent-devis-out"></div>
    </div>`);ae.querySelector(".ent-devis").addEventListener("click",()=>{const I=Number(ae.querySelector(".ent-nb").value),U=ae.querySelector(".ent-devis-out");if(U.innerHTML="",!Number.isFinite(I)||I<=0){U.appendChild(ce('<p class="savoir-msg">Entre d’abord le nombre de personnes à équiper.</p>'));return}const Q=IA(I),pe=Q.mensuel===null?`<b>${Qe(Q.palier)}</b> — ${Qe(fm(null))} : parle-nous de ton réseau, on trouvera le juste chiffre.`:`<b>${Qe(Q.palier)}</b> — ${Qe(fm(Q.mensuel))} par mois pour toute l’équipe, soit environ ${Math.round(Q.mensuel/I).toLocaleString("fr-FR")} F par personne. Et plus vous êtes nombreux, moins chaque tête coûte.`;U.appendChild(ce(`<p class="savoir-msg">${pe}</p>`)),U.appendChild(ce('<p class="savoir-note">Accord direct avec Nath-Tech (mobile money), puis la clé exacte de ton organisation. Le gratuit de chacun reste entier, toujours.</p>'))}),r.append(H,O,ae)}return me(sa(t)),n}const rd="nath",f_=1,XA=["nath.","nuage."];function h_(t){return XA.some(e=>t.startsWith(e))}function YA(t){const e={};for(let n=0;n<t.length;n++){const i=t.key(n);if(i&&h_(i)){const r=t.getItem(i);r!==null&&(e[i]=r)}}return JSON.stringify({coffre:rd,version:f_,donnees:e})}function JA(t){try{const e=JSON.parse(t);return!e||typeof e!="object"||e.coffre!==rd||typeof e.version!="number"||e.version>f_||!e.donnees||typeof e.donnees!="object"?null:{coffre:rd,version:e.version,donnees:e.donnees}}catch{return null}}function KA(t,e){const n=JA(e);if(!n)return 0;let i=0;for(const[r,s]of Object.entries(n.donnees))h_(r)&&typeof s=="string"&&(t.setItem(r,s),i++);return i}const p_="nath.trad.carnet";function ma(t){return ed(t.getItem(p_))}function ZA(t,e,n,i){const r=td(i),s=ls(ma(t),e,n,r);return s.length===0||t.setItem(p_,JSON.stringify(s)),s}function QA(t,e,n){const i=td(e),r=ma(n).filter(a=>td(a.langue)===i),s=[...$v(i),...r];return Hv(t,i,s)}function e4(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function _m(t,e,n){const i=Math.max(0,Math.min(e,t.length));return t.map(r=>({f:r,k:e4(`${n}|${r.id}`)})).sort((r,s)=>r.k-s.k).slice(0,i).map(r=>r.f)}function t4(t){const e=t.length,n=t.filter(i=>i.juste).length;return{corrects:n,total:e,score:e?n/e:0}}function n4(t,e=30){return Math.max(0,t)*Math.max(0,e)}function i4(t){return t>=.9?"Excellent, tu tiens ton examen.":t>=.7?"Bien joué, tu y es presque.":t>=.5?"C’est en bonne voie, continue sur ta lancée.":"On reprend calmement : les cartes les plus solides reviennent plus tôt."}const Po=[{id:"couture",nom:"Couture",emoji:"🧵",resume:"Coudre un vêtement qui tombe bien, du premier essayage à la dernière boutonnière.",taches:[{titre:"Prendre les mesures justes",gestes:["Tour de poitrine au niveau le plus fort, sans serrer","Tour de taille au creux naturel","Tour de hanches au plus large","Hauteur d’épaule jusqu’à l’ourlet voulu"]},{titre:"Décatir et couper le tissu",gestes:["Laver ou vaporiser selon la fibre pour que le tissu ne bouge plus après couture","Épingler le patron en suivant la lisière et le droit-fil","Couper d’un seul geste, ciseaux bien à plat contre le tissu"]},{titre:"Assembler les grandes coutures",gestes:["Faire un bâti (points larges à la main) pour un premier essayage","Piquer à la machine en laissant 1,5 cm de marge autour du patron","Cranter les courbes (petits traits en V) pour qu’elles posent plat"]},{titre:"Ourler et finitions",gestes:["Surfiler le bord (zigzag ou overlock) pour empêcher l’effilochage","Ourlet replié deux fois, repassé avant d’être cousu","Coudre boutons et boutonnières à la main pour un rendu net"]},{titre:"Repasser et vérifier la tombe",gestes:["Repasser à l’envers sur une surface plate","Vérifier que les coutures ne tirent pas en portant le vêtement","Couper les fils qui dépassent, un dernier coup de vapeur"]}],glossaire:[{mot:"lisière",sens:"bord du rouleau, la ligne droite du tissu"},{mot:"droit-fil",sens:"direction parallèle à la lisière — couper de travers fait tourner le vêtement"},{mot:"bâti",sens:"couture provisoire à grands points, défaite après essayage"},{mot:"ourlet",sens:"bord replié et cousu, en bas d’une manche ou d’une jupe"},{mot:"surfil",sens:"petit point qui empêche le tissu de s’effilocher"},{mot:"crantés",sens:"petits traits en V dans une courbe pour qu’elle pose à plat"},{mot:"pince",sens:"petit pli cousu pour cintrer la taille"},{mot:"empiècement",sens:"pièce de tissu rapportée, à l’épaule ou à la poitrine"}],pieges:[{enoncé:"Le bazin et le wax ne décatissent pas comme le coton",eviter:"Vaporiser et laisser sécher à plat AVANT de couper ; sinon le vêtement tourne au premier lavage."},{enoncé:"Oublier la marge de couture autour du patron",eviter:"Toujours 1,5 cm autour, 3 cm pour un ourlet long ; tracer la marge sur le tissu AVANT de couper."},{enoncé:"Piquer à la machine sans essayage préalable",eviter:"Faire un bâti et essayer d’abord ; on défait une couture provisoire, on ne défait pas un vêtement coupé trop court."},{enoncé:"Couper en diagonale sans vérifier le droit-fil",eviter:"Poser le tissu sur une table plate, aligner la lisière avec un bord de table, contrôler à chaque pièce."}]},{id:"boulangerie",nom:"Boulangerie",emoji:"🥖",resume:"Faire un pain qui lève bien et croustille, du pétrissage à la sortie du four.",taches:[{titre:"Peser et pétrir",gestes:["Farine, eau, sel, levure — au gramme près, pas au verre","Pétrir environ 10 minutes jusqu’à une pâte lisse et élastique","La pâte doit se décoller des doigts en fin de pétrissage"]},{titre:"Pointage (première pousse)",gestes:["Boule dans un récipient légèrement huilé","Couver d’un linge humide ou d’un film","Une à deux heures à température ambiante, jusqu’à doubler de volume"]},{titre:"Façonnage",gestes:["Chasser l’air du centre vers les bords (dégazer)","Former une boule ou un bâtard à surface bien tendue","Entailler le dessus avec une lame, geste franc et rapide"]},{titre:"Apprêt (seconde pousse)",gestes:["Sur plaque farinée ou dans un banneton côté fariné en l’air","30 minutes à 1 heure : la pâte rebondit lentement sous le doigt","Ne pas attendre qu’elle s’affaisse — c’est trop tard"]},{titre:"Cuisson",gestes:["Four à 240 °C, lèchefrite d’eau bouillante en bas pour la buée","Enfourner puis verser un verre d’eau pour créer le choc de vapeur","20 à 25 minutes : croûte dorée, fond qui sonne creux"]}],glossaire:[{mot:"pointage",sens:"première pousse, après le pétrissage"},{mot:"apprêt",sens:"seconde pousse, après le façonnage"},{mot:"levain",sens:"pâte-mère naturelle (farine et eau fermentées), remplace la levure"},{mot:"banneton",sens:"osier qui porte la pâte pendant l’apprêt et marque ses rainures"},{mot:"lame",sens:"petit rasoir incliné pour entailler le pain"},{mot:"grigne",sens:"belle entaille ouverte à la cuisson, signe d’un bon pétri"},{mot:"dégazer",sens:"chasser l’air de la pâte entre les deux pousses"},{mot:"coup de buff",sens:"entaille unique d’un bâtard pour guider l’ouverture"}],pieges:[{enoncé:"Sel et levure en contact direct",eviter:"Doser le sel d’un côté, la levure de l’autre, les mélanger via la farine — le sel tue la levure au contact."},{enoncé:"Eau trop chaude au pétrissage",eviter:"L’eau doit être fraîche à tiède (jamais au-dessus de 40 °C) ; vérifier au poignet avant de verser."},{enoncé:"Ouvrir le four dans les quinze premières minutes",eviter:"La buée et le choc thermique font la grigne — attendre au moins 15 minutes avant d’entrouvrir."},{enoncé:"Pâte qui retombe en fin d’apprêt",eviter:"C’est que la pousse a été trop longue ; enfourner immédiatement, et raccourcir la prochaine fois."}]},{id:"electricite",nom:"Électricité",emoji:"🔌",resume:"Câbler et sécuriser une installation domestique — disjoncteurs, prises, éclairage — sans se mettre en danger.",taches:[{titre:"Lire le plan et compter les circuits",gestes:["Séparer éclairage, prises et gros appareils (chauffe-eau, four, clim)","Noter la section des fils et le calibre du disjoncteur pour chaque circuit","Repérer où passe la terre avant de percer un mur"]},{titre:"Couper et vérifier avant de toucher",gestes:["Disjoncteur général sur « Off » — pas seulement le circuit concerné","Vérifier avec un testeur sans contact sur chaque conducteur","Travailler à deux quand c’est possible : l’un veille, l’autre agit"]},{titre:"Poser le tableau et les différentiels",gestes:["Un disjoncteur par circuit : 10 A lumière, 16 A prises, 20-32 A gros appareils","Un interrupteur différentiel 30 mA en tête de groupe — c’est ce qui coupe au contact humain","Terre reliée à un piquet enterré, section au moins 6 mm²"]},{titre:"Câbler une prise ou un point lumineux",gestes:["Rouge/marron/noir = phase ; bleu = neutre ; vert-jaune = terre","Serrer chaque fiche au couple indiqué, avec un tournevis isolé","Tester au multimètre : 220-240 V entre phase et neutre"]},{titre:"Mettre sous tension et tester",gestes:["Un circuit à la fois en remontant les disjoncteurs","Contrôler chaque prise : phase, neutre, terre dans le bon ordre","Faire vérifier par un électricien certifié avant livraison"]}],glossaire:[{mot:"disjoncteur",sens:"protège le circuit contre surcharge et court-circuit ; se rearme après déclenchement"},{mot:"différentiel 30 mA",sens:"coupe dès qu’une fuite part vers la terre — c’est le dispositif qui sauve"},{mot:"phase",sens:"le conducteur « qui tue », apporte le courant"},{mot:"neutre",sens:"le conducteur de retour, bleu"},{mot:"terre",sens:"vert-jaune qui évacue une fuite vers le sol, et protège la personne"},{mot:"section",sens:"aire du cuivre en mm² ; plus le circuit est long ou chargé, plus elle monte"},{mot:"testeur sans contact",sens:"crayon qui sonne près d’un conducteur sous tension"},{mot:"liaison équipotentielle",sens:"relier toutes les masses métalliques d’une même pièce à la terre"}],pieges:[{enoncé:"Travailler « juste vite » sans couper",eviter:"Couper le général ET vérifier au testeur sur chaque conducteur avant de toucher. Les accidents n’attendent pas."},{enoncé:"Oublier la terre dans une pièce d’eau",eviter:"Salle de bain, cuisine, extérieur : terre obligatoire à chaque prise + liaison équipotentielle des masses métalliques."},{enoncé:"Section du fil mal assortie au disjoncteur",eviter:"1,5 mm² ↔ 10-16 A ; 2,5 mm² ↔ 16-20 A ; 4 mm² ↔ 25 A ; 6 mm² ↔ 32 A. Le disjoncteur protège le fil, pas l’inverse."},{enoncé:"Fiche serrée « à l’œil »",eviter:"Un desserrage fait un arc, un point chaud, un départ de feu. Serrer au couple du fabricant avec un tournevis isolé."}]},{id:"cuisine-senegalaise",nom:"Cuisine sénégalaise",emoji:"🍲",pays:["SN"],resume:"Réussir le thiéboudienne, le yassa et le mafé — riz qui tient, sauce qui a du goût.",taches:[{titre:"Préparer le thiéboudienne (ceeb u jën)",gestes:["Tremper et rincer le riz (bruku) pour ôter l’amidon : il tiendra à la cuisson.","Piler piment, oignon, ail et persil pour la base de sauce (majeun).","Faire saisir brièvement le poisson (thiof, capitaine) pour le tenir ferme.","Laisser mijoter la sauce avec les légumes : carotte, chou, aubergine, manioc."]},{titre:"Mariner le yassa",gestes:["Presser généreusement le citron ; mélanger oignon émincé, moutarde, un peu d’arachide.","Laisser reposer poulet ou poisson au moins 2 h ; une nuit, c’est mieux.","Faire fondre les oignons doucement, sans les brûler."]},{titre:"Conduire le mafé",gestes:["Cuire la pâte d’arachide à petit feu, en remuant sans arrêt (ça attache vite).","Ajouter le bouillon progressivement jusqu’à la « rosée » qui remonte en surface.","Mettre la viande (bœuf, mouton) tôt pour qu’elle fonde à la cuisson."]},{titre:"Cuire le riz sans le coller",gestes:["Goûter et rectifier l’assaisonnement avant d’ajouter le riz.","Riz en pluie, bouillon à hauteur, cuisson à couvert, sans remuer.","Finir à feu doux pour que les grains restent entiers."]},{titre:"Servir et accompagner",gestes:["Verser la sauce sur le riz, ne pas la mélanger dans le chaudron.","Servir avec ataya (thé à la menthe) et fruits coupés."]}],glossaire:[{mot:"ceeb u jën",sens:"thiéboudienne : riz cuit dans la sauce au poisson, plat national"},{mot:"majeun",sens:"base pilée de piment, oignon, ail qui donne le goût à la sauce"},{mot:"bruku",sens:"riz brisé parfumé, trempé et rincé avant cuisson"},{mot:"niébé",sens:"haricots à œil noir, base du thiéboudienne « niebé-pé »"},{mot:"thiof",sens:"poisson noble (épigone), pièce de choix du ceeb u jën"},{mot:"yassa",sens:"plat mariné citron-oignon, poulet (yassa poulets) ou poisson"},{mot:"mafé",sens:"sauce à la pâte d’arachide avec viande ou poisson"},{mot:"ataya",sens:"thé à la menthe, servi en trois verres de plus en plus sucré"}],pieges:[{enoncé:"Riz collant au thiéboudienne",eviter:"Rincer et tremper le riz pour ôter l’amidon, puis ne plus remuer après l’ébullition."},{enoncé:"Pâte d’arachide brûlée dans le mafé",eviter:"Ne jamais laisser la pâte sans remuer : feu doux, cuillère en bois, bouillon dès que ça épaissit."},{enoncé:"Yassa trop acide",eviter:"Ne pas noyer le citron : l’équilibrer avec oignon fondu, moutarde et une pincée de sucre."},{enoncé:"Manioc encore dur dans la sauce",eviter:"Le manioc cuit plus longtemps que la carotte : le mettre en premier, la carotte en dernier."}]},{id:"premiers-soins",nom:"Premiers soins",emoji:"🚑",resume:"Protéger, alerter, secourir — les gestes qui sauvent en attendant les urgences.",taches:[{titre:"Protéger la zone",gestes:["Couper le courant si accident électrique, écarter la source si feu.","Mettre des gants si disponibles ; ne jamais toucher du sang sans protection.","Ne déplacer la victime que s’il y a un surdanger immédiat (feu, effondrement)."]},{titre:"Alerter les secours",gestes:["Appeler le 15 (médecine d’urgence), le 18 (pompiers), le 112 (numéro unique).","Donner : lieu précis, nature du problème, nombre de victimes, conscient ou non.","Ne pas raccrocher avant que le régulateur vous le dise."]},{titre:"Réanimation cardio-pulmonaire (adulte)",gestes:["Victime qui ne répond pas et ne respire pas normalement.","30 compressions au milieu du sternum, 5 à 6 cm de profondeur, 100 à 120 par minute.","Puis 2 insufflations (front-menton, pincer le nez) ; si non formé, compressions seules en continu."]},{titre:"Position latérale de sécurité (inconscient qui respire)",gestes:["Bras du côté à l’équerre, plier la jambe opposée.","Basculer sur le côté en tirant sur le genou.","Tête légèrement penchée en arrière pour laisser passer l’air."]},{titre:"Étouffement (adulte conscient)",gestes:["5 claques dans le dos, entre les omoplates.","5 compressions abdominales (Heimlich) : poing sous le sternum, serré vers le haut.","Alterner jusqu’à expulsion, ou perte de conscience → alors RCP."]}],glossaire:[{mot:"PSE",sens:"Protéger, Secourir, Expliquer : le schéma officiel des premiers secours"},{mot:"RCP",sens:"réanimation cardio-pulmonaire : compressions pour faire circuler le sang"},{mot:"PLS",sens:"position latérale de sécurité : pour une personne inconsciente qui respire"},{mot:"DSA",sens:"défibrillateur automatisé ; les instructions se lisent seules, ne pas avoir peur"},{mot:"hémorragie",sens:"saignement abondant : compresser fort, ne pas poser de garrot sauf cas extrême"},{mot:"brûlure grave",sens:"plus grande qu’une paume, ou sur visage/mains/parties génitales → urgences"},{mot:"convulsion",sens:"secousses involontaires : ne rien mettre dans la bouche, protéger la tête"},{mot:"malaise",sens:"toute victime qui change de comportement : allonger, parler, appeler le 15"}],pieges:[{enoncé:"Mettre les doigts dans la bouche d’un convulsant",eviter:"Ne jamais introduire d’objet ni de doigt : protéger la tête et attendre la fin de la crise."},{enoncé:"Donner à boire à une victime inconsciente",eviter:"Ne jamais donner à boire (ni à manger) : risque de fausse route vers les poumons."},{enoncé:"Tirer sur un membre cassé",eviter:"Ne jamais réduire une fracture : immobiliser en l’état et alerter les secours."},{enoncé:"Retirer un objet planté",eviter:"Ne pas l’extraire : le stabiliser autour avec des bandages et laisser faire les secours."}]},{id:"cuisine-afrique-ouest",nom:"Cuisine d’Afrique de l’Ouest",emoji:"🍛",pays:["CI","ML","BF","GN","BJ","TG","GH","NG","CM","MR"],resume:"Banku, attiéké, foutou, jollof — la cuisine de tous les jours, du Golfe de Guinée au Sahel.",taches:[{titre:"Réussir le banku (Ghana, Togo, Bénin, CI)",gestes:["Fermer la pâte maïs + manioc la veille pour qu’elle lève légèrement.","Cuire dans l’eau bouillante en remuant sans arrêt jusqu’à ce que ça se détache de la casserole.","Former des boules à la main mouillée, servir aussitôt."]},{titre:"Préparer l’attiéké (Côte d’Ivoire)",gestes:["Essorer soigneusement la semoule de manioc fermentée avant la cuisson vapeur.","Cuire à la vapeur 15 à 20 min, remuer une fois à mi-parcours.","Servir avec poisson grillé, oignon, tomate, piment et citron."]},{titre:"Piler le foutou / foufou",gestes:["Cuire igname ou plantain très tendre : trop ferme, ça ne pile pas.","Piler au mortier jusqu’à obtenir une pâte lisse, en tournant.","Former une boule compacte, saucer abondamment."]},{titre:"Conduire le jollof rice",gestes:["Faire revenir oignon, gingembre, piment dans l’huile, puis verser la tomate/poivron mixés.","Laisser réduire la sauce avant d’ajouter le riz ; bouillon à hauteur.","Feu doux, couvercle, et ne pas remuer : le goût vient du fond légèrement accroché."]},{titre:"Assaisonner sans masquer",gestes:["Bouillon en poudre avec parcimonie ; goûter avant d’en rajouter.","Piment entier dans la sauce plutôt que moulu — on peut le retirer.","Terminer avec un filet de citron ou une pâte de piment frais."]}],glossaire:[{mot:"banku",sens:"pâte fermentée maïs + manioc, plat de Ghana, Togo, Bénin et du sud ivoirien"},{mot:"attiéké",sens:"semoule de manioc fermentée, typique de la Côte d’Ivoire"},{mot:"foutou / foufou",sens:"igname ou plantain pilé, avec sauce arachide ou gombo"},{mot:"jollof rice",sens:"riz tomate-piment mijoté, cousin ouest-africain du thiéboudienne"},{mot:"ndolé",sens:"sauce arachide et feuilles amères, plat camerounais"},{mot:"saka-saka / pondu",sens:"feuilles de manioc cuites en sauce épaisse"},{mot:"garba",sens:"attiéké + thon frit + oignon/piment, snack ivoirien"},{mot:"alloco",sens:"banane plantain frite, accompagnement universel"}],pieges:[{enoncé:"Banku granuleux",eviter:"Ne pas verser la pâte dans l’eau froide : eau bouillante et remuer sans arrêt jusqu’à ce que la pâte se détache des parois."},{enoncé:"Attiéké collant",eviter:"Ne pas noyer de vapeur : essorer assez avant la cuisson et ne tasser la semoule dans le panier."},{enoncé:"Foutou qui ne pile pas",eviter:"Ne pas piler de l’igname à demi cuite : prolonger la cuisson jusqu’à tendreté complète."},{enoncé:"Jollof remué en continu",eviter:"Ne jamais remuer pendant la cuisson : le goût vient du riz qui attache légèrement au fond."}]},{id:"crise-survie",nom:"Crise & survie",emoji:"🆘",resume:"Quand l’hôpital, l’eau courante ou le frigo ne sont plus là : les gestes de base.",taches:[{titre:"Rendre l’eau potable",gestes:["Filtrer si l’eau est trouble (tissu propre), puis laisser décanter 30 min.","Faire bouillir 1 minute à gros bouillons (3 minutes en altitude), refroidir à couvert.","Sans feu : diluer quelques gouttes d’eau de javel sans additif, attendre 30 minutes."]},{titre:"Soigner une plaie sans plateau technique",gestes:["Se laver les mains, mettre des gants si disponibles.","Rincer abondamment à l’eau potable ou au sérum, sans frotter.","Couvrir d’un linge propre changé chaque jour ; surveiller rougeur, pus, fièvre."]},{titre:"Hygiène de fortune",gestes:["Creuser une latrine à plus de 30 m de la source d’eau, en aval.","Lavage des mains au savon ou à la cendre avant de manger et après les toilettes.","Trier les ordures ; brûler ou enterrer ce qui pourrit."]},{titre:"Conserver sans réfrigérateur",gestes:["Salaison, séchage au soleil ou enfumage pour viandes et poissons.","Fermentation lacto en bocal propre pour les légumes, sous eau salée.","Consommer sous 24 h tout ce qui est cuit à l’eau."]},{titre:"Organiser le rationnement",gestes:["Calculer l’eau : 3 L par personne et par jour (boisson + cuisine).","Stocker sec sur 3 à 7 jours : céréale, légumineuse, huile, sel, sucre.","Prioriser femmes enceintes, enfants, blessés et personnes âgées dans la distribution."]}],glossaire:[{mot:"SRO",sens:"sels de réhydratation orale : poudre + eau potable, contre la déshydratation"},{mot:"ébullition",sens:"faire bouillir à gros bouillons au moins 1 minute pour tuer les microbes"},{mot:"chloration",sens:"désinfecter l’eau avec de l’eau de javel sans additif, à dose précise"},{mot:"chaîne du froid",sens:"température maîtrisée du producteur au consommateur ; sans frigo, ne pas stocker"},{mot:"latrine",sens:"toilette de fortune, loin des sources d’eau, en aval"},{mot:"denrée non périssable",sens:"céréale, légumineuse sèche, miel, sel : longue conservation sans froid"},{mot:"ration de survie",sens:"quantité minimale pour tenir : eau + calories + sel"},{mot:"triage",sens:"classer les blessés par gravité pour traiter d’abord ceux qui peuvent être sauvés"}],pieges:[{enoncé:"Eau de javel concentrée directement",eviter:"Ne jamais boire de javel pure : toujours diluer, attendre 30 minutes, viser un léger chlore résiduel."},{enoncé:"Poudre, café ou terre sur une plaie",eviter:"Ne rien mettre dans une plaie ouverte : uniquement eau propre et pansement."},{enoncé:"SRO forcé chez une victime inconsciente",eviter:"Ne jamais forcer à boire un inconscient ; si les vomissements continuent, chercher un secours."},{enoncé:"Mélanger javel et ammoniaque",eviter:"Ne pas mélanger les produits ménagers entre eux : dégagement de gaz toxique."}]},{id:"approvisionnement",nom:"Approvisionnement",emoji:"📦",resume:"Anticiper les tensions : stock, fournisseurs, prix. Une méthode, pas une panique.",taches:[{titre:"Cartographier ses sources",gestes:["Lister par famille de produit : marché, grossiste, producteur, voisin.","Noter les délais de livraison et les jours de fermeture.","Identifier un fournisseur de repli pour chaque famille."]},{titre:"Construire un stock tampon",gestes:["Eau potable : 3 L par personne et par jour, dans un récipient alimentaire propre.","Sec : céréale, légumineuse, huile, sel, sucre, pour 3 à 7 jours.","Médicaments et hygiène essentielle : renouvellement sans rupture."]},{titre:"Diversifier les fournisseurs",gestes:["Au moins deux sources pour chaque denrée critique.","Alterner circuit court (producteur) et grossiste.","Étaler les achats dans le temps, éviter un seul jour « tout-ou-rien »."]},{titre:"Suivre les prix",gestes:["Cahier ou tableur : date, produit, prix d’achat, lieu.","Fixer un seuil d’alerte par produit (+30 % sur 30 jours).","Comparer le prix de revient réel, pas seulement le prix affiché."]},{titre:"Préserver la chaîne du froid",gestes:["Charger du plus solide au plus fragile, produits sensibles en haut.","Sac isotherme + glace pour le trajet ; ouvrir le moins souvent.","À la maison, consommer d’abord ce qui a le plus chaud."]}],glossaire:[{mot:"stock tampon",sens:"quantité gardée en réserve pour absorber une tension ou une rupture"},{mot:"denrée non périssable",sens:"se conserve des mois sans froid : céréales, légumineuses sèches, sel"},{mot:"circuit court",sens:"achat direct au producteur ou avec un seul intermédiaire"},{mot:"fournisseur de repli",sens:"celui qu’on appelle quand le principal n’a plus"},{mot:"prix de revient",sens:"tout ce que le produit coûte vraiment : achat + transport + stockage + perte"},{mot:"seuil d’alerte",sens:"niveau de stock ou de prix qui déclenche un réapprovisionnement"},{mot:"résilience",sens:"capacité à continuer à fonctionner malgré une tension"}],pieges:[{enoncé:"Tout acheter d’un coup pour six mois",eviter:"Ne pas sur-stocker d’un seul coup : trésorerie bloquée, qualité dégradée, cible pour les cambrioleurs."},{enoncé:"Stocker de l’eau dans un bidon à carburant",eviter:"Ne jamais réutiliser un récipient ayant contenu du carburant ou un produit chimique."},{enoncé:"Dépendre d’un seul fournisseur",eviter:"Ne pas se mettre en otage d’une seule source : toujours avoir un repli prêt."},{enoncé:"Produits fragiles au fond du sac",eviter:"Ne pas écraser les sensibles : lourd en bas, fragile en haut."}]},{id:"coiffure",nom:"Coiffure & tressage",emoji:"💇‍♀️",resume:"Coiffer et tresser proprement, sans abîmer le cheveu ni la cliente.",taches:[{titre:"Consulter avant de toucher",gestes:["Regarder le cuir chevelu : pellicules, irritations, plaies, poux.","Demander les produits déjà utilisés et les allergies connues.","Annoncer le prix et la durée avant de commencer."]},{titre:"Laver et préparer",gestes:["Eau tiède, pas brûlante : le cuir sensible gonfle avec la chaleur.","Shampoing adapté au type de cheveu, masquer des longueurs.","Rincer abondamment, puis appliquer une crème sans rinçage."]},{titre:"Démêler sans casser",gestes:["Peigne à dents larges, mèche par mèche.","Commencer par les pointes, puis remonter vers les racines.","Tenir la mèche serrée à la base pour ne pas tirer le cuir."]},{titre:"Tresser une natte ou une vanille",gestes:["Trois brins égaux, tension régulière du début à la fin.","Pour une vanille, ajouter à chaque passage une mèche prise dessous.","Finir proprement : élastique doux, pas de traction excessive sur le front."]},{titre:"Finir et conseiller",gestes:["Une huile légère sur les pointes uniquement.","Conseiller un foulard ou une taie satinée la nuit pour tenir la forme.","Fixer le prochain rendez-vous d’entretien (4 à 6 semaines)."]}],glossaire:[{mot:"mèche",sens:"portion de cheveux séparée pour travailler proprement"},{mot:"raie",sens:"ligne tracée sur le crâne pour séparer les zones"},{mot:"vanille",sens:"natte collée longue et fine, appelée aussi tresse africaine"},{mot:"nappy",sens:"texture crépue naturelle, non défrisée ni texturée"},{mot:"défrisage",sens:"lissage chimique, à espacer de trois mois minimum"},{mot:"démêlant",sens:"crème qui facilite le peignage sans casser"},{mot:"soin du cuir",sens:"gommage, huile ou lotions appliqués sur la peau, pas sur les longueurs"},{mot:"coiffure protectrice",sens:"style qui met les pointes à l’abri des frottements (vanilles, twists, chignon)"}],pieges:[{enoncé:"Défriser sur un cuir irrité",eviter:"Ne jamais appliquer un défrisant sur un cuir irrité, qui pèle ou qui gratte : faire d’abord un test mèche et attendre la guérison."},{enoncé:"Tresser trop serré",eviter:"Ne pas tirer jusqu’à la douleur : si la cliente sent une traction vive, c’est mal posé. Le front et la nuque sont les zones les plus fragiles."},{enoncé:"Peigner un nœud depuis la racine",eviter:"Ne jamais commencer un démêlage par la racine : on casse le cheveu. Toujours des pointes vers le haut."},{enoncé:"Passer la tondeuse à sec sur une peau sèche",eviter:"Ne pas tondre une peau sèche ou irritée sans préparation : nettoyer, huiler ou gel, et lames propres et désinfectées."}]},{id:"reparation-telephones",nom:"Réparation téléphones",emoji:"📱",resume:"Dépanner un smartphone sans le casser, et sans se mettre en danger.",taches:[{titre:"Diagnostiquer avant d’ouvrir",gestes:["Tester écran, tactile, haut-parleur, micro, caméras, boutons, charge, Wi-Fi, réseau.","Noter les symptômes exacts avec le client ; une panne « écran noir » a cinq causes possibles.","Proposer un devis ouvert et chiffré seulement après ce test complet."]},{titre:"Ouvrir proprement",gestes:["Sauvegarder les données du client avant toute manipulation.","Chauffer le pourtour (tapis chauffant ou décapeur thermique doux) ou injecter de l’alcool isopropylique au niveau de la colle.","Utiliser une ventouse puis un médiator, vis triées et notées par position."]},{titre:"Remplacer un écran ou une batterie",gestes:["Déclipser d’abord la batterie, puis les nappes écran/tactile.","Poser un joint adhésif neuf ; ne pas réutiliser la colle d’origine.","Tester avant de refermer, pour éviter de rouvrir."]},{titre:"Micro-souder en sécurité",gestes:["Bracelet et tapis ESD obligatoires, fer à 320 ou 350 degrés, avec flux.","Travailler sous loupe, jamais à l’œil nu sur un composant de moins de 2 mm.","Ne jamais laisser un fer sous tension sans surveillance."]},{titre:"Refermer et restituer",gestes:["Remettre les joints, clipser sans forcer, revisser dans l’ordre inverse.","Faire un test complet devant le client : appels, charge, photo, audio.","Garantir la pièce et le geste : durée et conditions écrites."]}],glossaire:[{mot:"ESD",sens:"décharge électrostatique : invisible mais destructrice, bracelet et tapis obligatoires"},{mot:"nappe",sens:"connecteur plat qui relie l’écran ou les boutons à la carte mère"},{mot:"flex",sens:"cable interne très fin, se plie mais ne se casse pas (théoriquement)"},{mot:"PMOS",sens:"circuits de protection de la batterie lithium-ion"},{mot:"courant de fuite",sens:"consommation anormale mesurée sur alimentation de laboratoire, signe d’un court-jus"},{mot:"reconditionné",sens:"pièce de récupération testée et certifiée, moins chère que la pièce neuve"},{mot:"tapis chauffant",sens:"plaque qui chauffe une zone précise pour ramollir la colle d’un écran"},{mot:"sauvegarde",sens:"copie des données avant toute intervention, même mineure"}],pieges:[{enoncé:"Manipuler une batterie gonflée ou chaude",eviter:"Ne jamais percer, plier ni faire chauffer une batterie Li-ion gonflée : risque d’emballement thermique. L’évacuer en extérieur, la remplacer AVANT tout autre geste."},{enoncé:"Souder sans bracelet ESD",eviter:"Ne pas toucher une carte sans bracelet ou tapis antistatique : une décharge invisible tue un composant sans laisser de trace."},{enoncé:"Remonter avec la colle d’origine",eviter:"Ne jamais recoller sans joint neuf : étanchéité perdue, poussière, écran qui se décolle à la première chaleur."},{enoncé:"Chiffrer sans diagnostiquer",eviter:"Ne pas annoncer un prix avant d’avoir testé : une panne « écran noir » peut venir de la batterie, de la nappe, du connecteur, de la carte ou du logiciel."}]},{id:"marchage",nom:"Marchage",emoji:"🌾",resume:"Faire pousser des légumes qui se vendent : sol, eau, saison, marché.",taches:[{titre:"Préparer le sol",gestes:["Observer la terre : couleur, structure, vie (vers, racines). Une terre meuble est une bonne terre.","Apporter fumier mûr ou compost, jamais frais sur les racines.","Faire des planches larges de 80 à 120 cm, allées étroites : on marche sans tasser."]},{titre:"Semis et pépinière",gestes:["Semer en fonction de la saison et du cycle, pas de l’envie.","Profondeur : deux à trois fois la taille de la graine.","Arroser en pulvérisation fine jusqu’à la levée."]},{titre:"Repiquer au bon stade",gestes:["Attendre quatre à six feuilles vraies, tige ferme.","Piquer le soir ou quand le ciel est couvert.","Arroser au pied, sans noyer."]},{titre:"Irriguer et entretenir",gestes:["Pailler pour garder l’humidité et freiner les herbes.","Biner en surface plutôt que d’arroser plus.","Privilégier le goutte-à-goutte ou l’arrosage au pied, jamais sur les feuilles en plein soleil."]},{titre:"Récolter et vendre",gestes:["Cueillir tôt le matin, encore dans la fraîcheur.","Trier, retirer l’abîmé, présenter proprement.","Afficher le prix et l’origine : un client revient sur une réputation, pas sur un rabais."]}],glossaire:[{mot:"fumure organique",sens:"apport de compost ou fumier mûr, qui nourrit le sol sans brûler les racines"},{mot:"paillage",sens:"couche protectrice au pied : paille, feuilles, carton ; garde l’eau, freine les herbes"},{mot:"binage",sens:"griffer la surface pour aérer et retirer les jeunes herbes"},{mot:"rotation",sens:"changer la famille de culture chaque saison sur la même planche"},{mot:"repiquage",sens:"déplacer la jeune plante de la pépinière vers la planche définitive"},{mot:"stade quatre feuilles",sens:"moment idéal pour repiquer la plupart des solanacées et cucurbitacées"},{mot:"goutte-à-goutte",sens:"irrigation localisée au pied, économe en eau et en maladies foliaires"},{mot:"culture sous abri",sens:"serre ou tunnel pour forcer hors saison ou protéger des pluies battantes"}],pieges:[{enoncé:"Repiquer en plein soleil",eviter:"Ne jamais repiquer en plein soleil ni en journée chaude : piquer le soir ou quand le ciel est couvert."},{enoncé:"Arroser une pépinière en jet direct",eviter:"Ne pas utiliser un jet fort sur une pépinière : on casse les tiges et on déplace les graines. Pulvérisation fine, toujours."},{enoncé:"La même famille au même endroit chaque année",eviter:"Ne pas cultiver chaque année tomates, aubergines ou piments au même endroit : le sol s’épuise et les maladies s’installent."},{enoncé:"Récolter sous le soleil haut",eviter:"Ne pas cueillir après dix heures : feuilles et fruits flétrissent avant le marché. Le matin, c’est tout."}]},{id:"maconnerie",nom:"Maçonnerie & bâtiment",emoji:"🧱",resume:"Monter un mur droit, d’aplomb et qui ne fissure pas.",taches:[{titre:"Implanter et tracer",gestes:["Cordeaux tendus, niveau à bulle, fils à plomb.","Contrôler l’équerrage avec la règle du triangle 3-4-5.","Reporter les cotes sur des repères fixes, pas sur la terre molle."]},{titre:"Fouiller et fonder",gestes:["Fouiller jusqu’au bon sol : hors terre végétale, hors remblai récent.","Béton de propreté, puis semelle armée dimensionnée au mur qu’elle porte.","Arase au niveau, contrôlée au cordeau sur toute la longueur."]},{titre:"Monter un mur",gestes:["Mortier dosé et gâché pour une heure maximum, pas plus.","Joints horizontaux d’environ un centimètre, vérifiés au cordeau tous les trois rangs.","Décaler systématiquement d’un demi-module entre deux rangs : c’est ce qui empêche la fissure verticale."]},{titre:"Ceinturer et daller",gestes:["Rien ne monte sans chaînage en haut : il reprend les efforts et évite les fissures de toiture.","Poteaux et poutres ferraillés selon le plan, pas au jugé.","Vibrer le béton de la dalle pour chasser l’air et éviter les nids de granulats."]},{titre:"Enduire et protéger",gestes:["Trois couches : gobetis d’accroche, corps de dressage, finition lissée.","Cure humide pendant au moins sept jours, surtout en saison sèche et venteuse.","Gouttières, débords et soubassements : l’eau non évacuée est la première cause des fissures."]}],glossaire:[{mot:"semelle",sens:"fondation filante en béton armé sous les murs porteurs"},{mot:"arase",sens:"surface supérieure parfaitement nivelée d’une fondation, avant de monter"},{mot:"chaînage",sens:"poutre béton armé qui ceinture un mur ou un bâtiment"},{mot:"hourdis",sens:"blocs (terracotta, béton) posés entre les poutrelles d’une dalle"},{mot:"gobetis",sens:"première couche d’enduit, riche en ciment, qui accroche le mortier"},{mot:"mortier bâtard",sens:"mélange chaux + ciment, plus souple et moins fissible que le ciment seul"},{mot:"demi-module",sens:"décalage d’une moitié de parpaing entre deux rangs successifs"},{mot:"équerrage 3-4-5",sens:"corde tendue en triangle 3/4/5 pour obtenir un angle droit parfait"}],pieges:[{enoncé:"Fonder dans la terre végétale",eviter:"Ne jamais asseoir une fondation sur terre végétale ou remblai récent : elle travaillera et le mur fissurera. Fouiller jusqu’au bon sol."},{enoncé:"Empiler des parpaings sans décalage",eviter:"Ne pas aligner les joints verticaux d’un rang à l’autre : le mur se fend en deux sous la charge. Toujours décaler d’un demi-module."},{enoncé:"Enduire d’un seul coup",eviter:"Ne pas appliquer trois centimètres de mortier en une passe : ça gondole et ça se décolle. Toujours trois couches fines, chaque couche prise."},{enoncé:"Couler une dalle sans vibrer",eviter:"Ne pas couler sans vibrer : les bulles créent des nids de granulats, points faibles sous la charge. Vibreur ponctuel, passe à passe."}]},{id:"peche-artisanale",nom:"Pêche artisanale",emoji:"🎣",resume:"Ramener du poisson frais, le conserver, et laisser l’eau repeupler.",taches:[{titre:"Préparer et vérifier le matériel",gestes:["Inspecter la seine avant de sortir : un trou perdu, c’est le poisson de la journée qui part.","Affûter les hameçons, vérifier les lignes et les flotteurs.","Lester les casiers et contrôler les entonnoirs d’entrée."]},{titre:"Lancer et poser",gestes:["Poser la seine parallèlement au bord, ramener depuis les eaux peu profondes.","Mouiller les casiers au crépuscule, baliser chaque pose avec un repère fixe.","Éviter les chenaux de passage des pirogues : on y déchire tout."]},{titre:"Prélever et trier",gestes:["Vider la seine rapidement, trier sans déchirer les mailles.","Remettre à l’eau les juvéniles et les femelles pleines d’œufs : c’est le poisson de l’année prochaine.","Évider et rincer la capture aussitôt à l’eau claire."]},{titre:"Conserver sans glace",gestes:["Saler en saumure ou enfumer le jour même : un poisson non traité est invendable le lendemain.","Étaler le poisson en couche fine, jamais entassé au soleil.","Protéger du moucheron avec un filet ou un toit de paille."]},{titre:"Réparer et ranger",gestes:["Faire sécher les filets étalés à l’ombre, jamais en boule humide.","Raperler les mailles cassées avec une aiguille et du fil identique.","Ranger les lignes enroulées sur du carton sec, loin du sel."]}],glossaire:[{mot:"seine",sens:"filet encirclant qu’on ramène à pied depuis le bord"},{mot:"maillage",sens:"grandeur des mailles du filet — elle décide ce qui passe ou reste pris"},{mot:"casier",sens:"piège rigide en forme de panier, posé au fond avec un appât"},{mot:"épervier",sens:"filet à lests qu’on lance en parachute depuis une pirogue"},{mot:"appât",sens:"aliment mis au piège ou à l’hameçon pour attirer le poisson"},{mot:"saumurage",sens:"conservation dans l’eau chargée de sel, en couche ou en fût"},{mot:"fumage",sens:"conservation par la fumée lente, sur claies au-dessus du feu"},{mot:"raperler",sens:"refaire une maille cassée au moyen d’une aiguille à filet"},{mot:"juvénile",sens:"jeune poisson pas encore arrivé à taille — il doit repartir à l’eau"}],pieges:[{enoncé:"Pêcher avec un maillage trop fin",eviter:"Ne jamais utiliser de mailles plus petites que la taille réglementaire : tu vides l’eau des juvéniles et la saison suivante il n’y a plus rien."},{enoncé:"Laisser la capture sous le soleil",eviter:"Ne pas traîner à vider et refroidir le poisson : l’altération commence en une heure et le prix de vente fond avec."},{enoncé:"Ranger le filet encore trempé",eviter:"Ne jamais remiser un filet humide : il pourrit, tache et casse au premier effort. Séchage à l’ombre avant rangement."},{enoncé:"Sortir seul sur l’eau",eviter:"Ne jamais partir pêcher seul sans gilet ou bouée : une embarcation chavirée sans témoin, c’est l’accident qu’on ne raconte pas."}]},{id:"elevage",nom:"Élevage (volaille & petits animaux)",emoji:"🐔",resume:"Faire grandir des bêtes saines jusqu’au poids de vente, sans hécatombe.",taches:[{titre:"Démarrer la bande",gestes:["Source de chaleur allumée avant l’arrivée des poussins : ils se regroupent sous la lampe s’il fait trop froid.","Litière sèche au sol, changée dès qu’elle est humide.","Eau fraîche et abreuvoirs bas à portée du bec dès la première heure."]},{titre:"Nourrir et abreuver",gestes:["Ration adaptée à l’âge : démarrage, croissance, finition.","Laver les abreuvoirs chaque jour, jamais de ration moisie.","Nourir à heure fixe pour repérer les appétits qui chutent."]},{titre:"Entretenir le bâtiment",gestes:["Vidange et désinfection complètes entre deux bandes.","Enclos ou cage de quarantaine dès le premier animal malade.","Ventiler : l’ammoniac des fientes brûle les poumons ; une fente d’air vaut mieux qu’un courant d’air."]},{titre:"Vacciner",gestes:["Suivre le calendrier local (Newcastle, Gumboro) noté dans un cahier.","Vaccin vivant dans de l’eau propre et non chlorée, donné le matin.","Ne vacciner que des animaux en bonne santé : un vaccin sur un malade aggrave."]},{titre:"Engraisser et vendre",gestes:["Ration de finition les deux dernières semaines pour le poids et l’aspect.","Peser avant de fixer le prix : on ne vend pas au jugé.","Écouler au moment des fêtes et des marchés, jamais en urgence après une mortalité."]}],glossaire:[{mot:"bande",sens:"lot d’animaux élevés ensemble, du démarrage à la vente"},{mot:"litière",sens:"couche absorbante au sol — copeaux, paille hachée — qu’on garde sèche"},{mot:"abreuvoir",sens:"récipient qui donne de l’eau propre en continu"},{mot:"Newcastle",sens:"maladie virale respiratoire de la volaille, très mortelle, évitée par la vaccination"},{mot:"Gumboro",sens:"maladie virale des jeunes poussins qui casse leurs défenses, évitée par la vaccination"},{mot:"quarantaine",sens:"isolement des nouveaux ou malades loin du groupe"},{mot:"ration de finition",sens:"aliment plus riche donné avant la vente pour le poids et l’aspect"},{mot:"mortalité",sens:"nombre de bêtes mortes sur une période — le premier indicateur à noter"}],pieges:[{enoncé:"Entasser les animaux",eviter:"Ne jamais dépasser les densités conseillées : la chaleur et l’ammoniac montent, les maladies circulent, la mortalité explose."},{enoncé:"Vacciner dans de l’eau sale ou chlorée",eviter:"Ne jamais passer un vaccin vivant dans de l’eau de javel ou croupie : le produit est détruit, la bande reste protégée en apparence seulement."},{enoncé:"Mélanger sans isoler",eviter:"Ne jamais mettre de nouveaux animaux dans le groupe sans quelques jours de quarantaine : ils importent la maladie sans le montrer."},{enoncé:"Vendre des bêtes malades",eviter:"Ne jamais vendre une bête malade ou morte : tu perds le client, et la maladie repart avec le panier."}]},{id:"sante-communautaire",nom:"Santé communautaire",emoji:"🩺",resume:"Empêcher la maladie au village et repérer vite les signes qui conduisent au centre.",taches:[{titre:"Boire sans danger",gestes:["Faire bouillir l’eau à gros bouillons dix minutes avant de la boire.","Stocker l’eau propre dans un fût couvert, la puiser avec un bol propre — jamais les mains ni le jerrycan dedans.","En cas de doute sur une eau de puits, la traiter puis la laisser reposer."]},{titre:"Latrines et eaux usées",gestes:["Latrine à plus de dix mètres de tout puits ou point d’eau, en amont.","Évacuer les eaux de vaisselle vers un puisard ou un jardin, jamais vers le creux où jouent les enfants.","Entretenir : propre le matin, on y retourne le soir."]},{titre:"Combattre les moustiques",gestes:["Dormir sous une moustiquaire imprégnée, rentrée sous le matelas.","Vider une fois par semaine tout ce qui retient l’eau : vieux pots, pneus, gouttières.","Couvrir bras et jambes à la tombée du jour."]},{titre:"Hygiène des mains et des aliments",gestes:["Laver les mains au savon ou à la cendre avant de manger, après la latrine, avant de cuisiner.","Couvrir la nourriture, protéger de la poussière et des mouches.","Laver fruits et légumes à l’eau potable avant de les manger crus."]},{titre:"Reconnaître et référer",gestes:["Signes qui imposent le centre de santé : incapacité à boire, vomissements qui ne s’arrêtent pas, convulsions, respiration difficile, sang, somnolence anormale.","Référer sans attendre le lendemain : un transport préparé (caisse, entente avec le conducteur) fait gagner des heures.","Noter les dates des symptômes pour les raconter au personnel de santé."]},{titre:"Soins courants sans danger",gestes:["Donner du SRO (soluté de réhydratation orale) dès la première diarrhée, par petites gorgées, en continu.","Continuer à nourrir et à allaiter pendant la maladie : un corps affaibli se rétablit moins vite.","Laver une plaie à l’eau propre courante, couvrir d’un linge propre — sans rien poser dessus qui ne soit pas sûr."]}],glossaire:[{mot:"SRO",sens:"soluté de réhydratation orale — le sachet dosé à diluer dans une bouteille d’eau propre"},{mot:"réhydrater",sens:"faire remonter l’eau perdue par la diarrhée ou la fièvre, par petites gorgées fréquentes"},{mot:"vecteur",sens:"animal qui transporte la maladie d’un corps à l’autre — moustique, mouche, rat"},{mot:"référer",sens:"conduire une personne malade au centre de santé quand le village ne suffit plus"},{mot:"poste de santé",sens:"structure de soin la plus proche, premier maillon avant l’hôpital"},{mot:"puisard",sens:"trou rempli de graviers où les eaux usées s’infiltrent sans croupir"},{mot:"moustiquaire imprégnée",sens:"filet traité anti-moustique, efficace à condition de ne pas le laver au détergent"}],pieges:[{enoncé:"Soigner par les antibiotiques achetés au hasard",eviter:"Ne jamais donner d’antibiotique sans prescription : on ne guérit rien, et on fabrique des germes que plus aucun médicament ne combat."},{enoncé:"Mal préparer le SRO",eviter:"Ne jamais ajouter sucre ou sel au mélange dosé : trop concentré, il aggrave la déshydratation. Un sachet, une bouteille d’eau propre, rien de plus."},{enoncé:"Attendre le dernier jour pour référer",eviter:"Ne pas attendre que l’enfant ne boive plus pour partir au centre : l’heure perdue transforme une guérison en deuil."},{enoncé:"Laisser l’eau croupir autour de la case",eviter:"Ne jamais laisser d’eau stagnante près des maisons : un vieux pot rempli, c’est un élevage de moustiques assuré."}]},{id:"cordonnerie",nom:"Cordonnerie",emoji:"👞",resume:"Réparer chaussures et sacs pour qu’ils tiennent encore deux ans.",taches:[{titre:"Diagnostiquer et chiffrer",gestes:["Regarder semelle, tige, doublure et fermetures avant de promettre quoi que ce soit.","Distinguer ce qui se reprend de ce qui est fini, et le dire franchement.","Convenir du prix et du délai avant de commencer : le client qui sait revient."]},{titre:"Déposer et préparer",gestes:["Retirer ancienne semelle et talon, dégrader le fond.","Nettoyer et sécher la tige : rien ne colle sur du cuir mouillé ou croûteux de boue.","Choisir la matière de reprise selon l’usage : marche, école, travail de chantier."]},{titre:"Coudre le cuir",gestes:["Perforer à l’alêne, passer le fil ciré aux deux aiguilles en couture croisée.","Garder un point régulier : la beauté du travail se compte aux points par centimètre.","Dégraisser et dégrossir les surfaces avant tout encollage."]},{titre:"Semelles et talons",gestes:["Encoller fin, laisser prendre, puis assembler sous pression — pas à la main nue.","Clouer ou presser la semelle, rogner le bord au tranchet.","Reconstituer le talon : garnissage, semelle de talon clouée, patinage du bord."]},{titre:"Finir et rendre",gestes:["Crémer, lustrer, passer un coup de patine sur les bords.","Faire essayer vite : un point qui gêne se reprend en boutique, pas une semaine après.","Expliquer l’entretien au client : le métier se juge à la durée de vie de la réparation."]}],glossaire:[{mot:"alêne",sens:"outil pointu en fer pour percer le cuir avant d’y passer le fil"},{mot:"trépointe",sens:"bande de cuir cousue au fond de la chaussure, sur laquelle on fixe la semelle"},{mot:"forme",sens:"moule en bois ou en plastique qui tient la chaussure pendant la réparation"},{mot:"encollage",sens:"application de la colle en couche fine sur les deux surfaces à assembler"},{mot:"tranchet",sens:"couteau de cordonnier pour rogner et parer le cuir"},{mot:"talonnette",sens:"petit rapport de caoutchouc collé sous le talon pour le protéger ou le rehausser"},{mot:"patine",sens:"produit qui colore et fait briller le bord d’une semelle"},{mot:"surpiqûre",sens:"couture visible qui renforce ou décore un bord"}],pieges:[{enoncé:"Coller du lisse sur du lisse",eviter:"Ne jamais coller deux surfaces lisses : rien ne tient. Dégrader les deux faces, dépoussiérer, encoller fin, laisser prendre avant d’assembler."},{enoncé:"Pointer l’alêne vers sa main",eviter:"Ne jamais percer en direction de la main qui tient le cuir : l’alêne part dans la paume. On perce sur l’établi, la main en arrière."},{enoncé:"Remonter une tige craquelée",eviter:"Ne pas poser une semelle neuve sur une tige foutue : le client la reprendra la semaine suivante et perdra la mémoire de ton travail. Le dire avant."},{enoncé:"Travailler la colle forte enfermé",eviter:"Ne jamais encoller dans une pièce fermée sans air : les vapes de colle montent à la tête et abîment les poumons. Une fente d’air, toujours."}]},{id:"plomberie",nom:"Plomberie",emoji:"🔧",resume:"Arrêter une fuite pour de bon, déboucher sans abîmer, poser un joint qui tient.",taches:[{titre:"Couper et vider",gestes:["Fermer le robinet d’arrêt général avant toute intervention.","Ouvrir le point bas pour vider la canalisation, seau et chiffon sous l’ouvrage.","Prévoir une lampe : on répare ce qu’on voit."]},{titre:"Faire un joint qui tient",gestes:["Brosser le filetage mâle, enlever rouille et vieux filasse.","Enrouler le téflon dans le sens du serrage, trois tours serrés sur un filetage propre.","Visser à la main, puis un quart de tour à la clé — pas plus."]},{titre:"Déboucher sans détruire",gestes:["Ventouse d’abord, simple et propre.","Démonter le siphon au-dessus d’un seau, le nettoyer, vérifier le joint avant de remonter.","Furet si ça résiste ; jamais de produits successifs qui attaquent les tuyaux."]},{titre:"Remplacer au bon calibre",gestes:["Clapet, joint de robinet, flotteur de chasse : démonter proprement.","Emporter la pièce ôtée au magasin pour trouver le calibre exact.","Remonter propre, clé en main, sans forcer sur le plastique."]},{titre:"Tester et facturer",gestes:["Rouvrir l’eau lentement, chasse d’air comprise.","Passer un papier jetable sur chaque joint : une trace trahit la micro-fuite.","Détailler les pièces sur la facture : la confiance du client vaut plus que la réparation."]}],glossaire:[{mot:"filetage",sens:"pas hélicoïdal taillé au bout du tuyau, mâle dehors ou femelle dedans"},{mot:"téflon",sens:"ruban plastique blanc qu’on enroule sur un filetage pour le rendre étanche"},{mot:"siphon",sens:"coude rempli d’eau qui bloque les remontées d’odeur"},{mot:"robinet d’arrêt",sens:"vanne générale qui coupe l’eau de toute l’installation"},{mot:"clapet",sens:"petite pièce qui ferme le passage de l’eau sous la pression du doigt du robinet"},{mot:"flotteur",sens:"pièce qui monte avec l’eau dans la chasse et coupe l’arrivée au bon niveau"},{mot:"furet",sens:"long ressort flexible qui gratte le bouchon de l’intérieur du tuyau"},{mot:"PER",sens:"tube plastique souple des installations modernes, sensible à la chaleur et aux produits forts"}],pieges:[{enoncé:"Serrer comme un forgeron",eviter:"Ne jamais serrer à outrance : on éclate l’écrou ou on écrase le joint, et ça fuira le jour même. Un quart de tour après le serrage à la main suffit."},{enoncé:"Verser de l’acide dans du plastique",eviter:"Ne jamais débourrer au produit agressif un tube PER ou un flexible usé : il attaque les joints et provoque une fuite dans le mur. Le furet fait le travail."},{enoncé:"Laisser goutter « pour l’instant »",eviter:"Ne pas laisser un robinet qui goutte : trois litres perdus par jour, la porcelaine tachée, et le joint qui se met à fuir de partout."},{enoncé:"Ouvrir sans avoir coupé",eviter:"Ne jamais démonter un raccord avant d’avoir vérifié que l’eau est coupée : l’inondation arrive plus vite qu’on ne court au compteur."}]},{id:"peinture",nom:"Peinture en bâtiment",emoji:"🎨",resume:"Peindre un mur net qui reste net des années : la préparation fait le travail.",taches:[{titre:"Préparer le support",gestes:["Gratter ce qui s’écaille, lessiver, laisser sécher à fond.","Dépoussiérer, puis reboucher fissures et trous à l’enduit, araser à la lame.","Un mur bien préparé garde deux fois plus longtemps qu’une couche de plus."]},{titre:"Protéger les abords",gestes:["Ruban de masquage sur huisseries et prises, bâche au sol sanglée.","Déposer les plaques d’interrupteurs plutôt que de peindre autour.","Délimiter avant de commencer : les reprises se voient toujours."]},{titre:"Sous-coucher",gestes:["Choisir la sous-couche adaptée : plâtre, ancien, extérieur.","Faire les contours au pinceau avant le rouleau.","La sous-couche fixe le fond et économise la peinture de finition."]},{titre:"Poser la finition",gestes:["Peindre en croisé — aller-retour vertical puis horizontal — puis lisser dans un seul sens.","Charger le rouleau, étaler sans appuyer, ne pas repasser sur une amorce sèche.","Deux couches fines valent mieux qu’une épaisse qui fait des coulures."]},{titre:"Ranger et reprendre",gestes:["Nettoyer pinceaux et rouleaux avant que ça ne sèche.","Étiqueter les pots avec la pièce et la date : la reprise de six mois après retrouve la teinte exacte.","Reprendre les masques après séchage, à la lame fine."]}],glossaire:[{mot:"sous-couche",sens:"première couche qui fixe le support et régularise l’absorption"},{mot:"enduit",sens:"pâte qui rebouche trous et fissures avant de peindre"},{mot:"croisé",sens:"pose en deux directions perpendiculaires pour couvrir sans épaisseur"},{mot:"coulure",sens:"bourrelet de peinture qui a glissé sur un mur trop chargé"},{mot:"reprise",sens:"retouche localisée — elle se voit si la teinte ou le brillant diffèrent"},{mot:"diluant",sens:"produit qui fluidifie la peinture — toujours celui indiqué par le pot"},{mot:"mat",sens:"finition sans brillance, qui cache les défauts mais se nettoie moins bien"},{mot:"lessivage",sens:"lavage du mur pour retirer graisse et poussière avant peinture"}],pieges:[{enoncé:"Peindre sur un mur humide",eviter:"Ne jamais peindre un mur qui suinte ou qui vient d’être lavé à grande eau : la finition cloque et s’écaille en quelques semaines. Sécher d’abord, trouver la cause de l’humidité."},{enoncé:"Sauter la sous-couche",eviter:"Ne pas poser la finition directement sur un plâtre neuf ou un ancien farinant : l’accroche se fait mal et la teinte boit par taches. Sous-couche toujours."},{enoncé:"Diluer trop pour économiser",eviter:"Ne jamais dépasser la dilution indiquée sur le pot : trop liquide, la peinture coule et ne couvre pas — on en remet trois couches au lieu de deux."},{enoncé:"Travailler en plein soleil",eviter:"Ne jamais peindre une façade brûlante : la couche sèche trop vite, marque le rouleau et cloque. Travailler le matin ou le soir, à l’ombre."}]},{id:"menuiserie",nom:"Menuiserie bois",emoji:"🪚",resume:"Assembler le bois droit : l’équerre, le traçage et l’essence juste font la moitié du travail.",taches:[{titre:"Choisir et acheter le bois",gestes:["Prendre une planche selon son usage futur : dur pour les pieds de table, sec pour l’ameublement intérieur.","Regarder le fil du bois et refuser les planches gauches ou gercées — elles bougeront quand même chez toi.","Compter 15 % de largeur en plus pour le rabotage et les coupes."]},{titre:"Tracer juste",gestes:["Équerre et crayon plat : tracer la coupe, pas la scie — l’épaisseur de la scie se paie en millimètres perdus.","Reporter la même mesure sur les deux pièces jumelles avant de couper, jamais pièce par pièce.","Vérifier l’équerre elle-même contre un angle connu avant de lui faire confiance."]},{titre:"Scier et raboter",gestes:["Scier hors du trait, côté chute : on approche le trait en rabotant, jamais en sciant large.","Raboter dans le sens du fil ; si ça arrache, retourner la pièce ou pousser plus doucement.","Un coup de ponce entre deux rabotages : la main sent la planche devenue droite avant l’œil."]},{titre:"Assembler",gestes:["Assemblage tenon-mortaise ou à fausse languette pour les cadres : la colle seule ne tient pas un meuble qui bouge.","Pré-percer avant de visser près du bout : le bois fend là où on n’a pas percé.","Serrer à blanc avant de coller — l’assemblage doit fermer sans colle ; la colle ne fait que figer un ajustement déjà bon."]},{titre:"Finition qui dure",gestes:["Poncer en montée : grain grossier puis moyen puis fin, sans brûler les étapes.","Dépoussiérer avant l’huile ou le vernis ; deux couches fines passées dans le fil valent mieux que trois épaisses.","Laisser sécher à l’abri de la poussière — une finition collante attrape tout ce qui vole."]}],glossaire:[{mot:"équerre",sens:"outil à angle droit qui vérifie et trace les coupes à 90°"},{mot:"raboter",sens:"aplanir la surface d’une planche au rabot ou à la machine"},{mot:"tenon",sens:"langue de bois taillée en bout de pièce, qui entre dans la mortaise"},{mot:"mortaise",sens:"creux taillé dans une pièce pour recevoir le tenon"},{mot:"fil du bois",sens:"direction des fibres ; on scie et rabote en le respectant"},{mot:"gerce",sens:"fente dans une planche séchée trop vite — elle travaille avec l’humidité"},{mot:"chant",sens:"tranche étroite d’une planche, souvent plus fragile que la face"},{mot:"ponce",sens:"user la surface au papier de verre pour l’aplanir et l’ouvrir à la finition"}],pieges:[{enoncé:"Visser dans le bois brut sans pré-percer",eviter:"Ne jamais visser près du bout d’une planche sans avant-trou : le bois fend, la pièce est perdue. Pré-percer diamètre de la tige."},{enoncé:"Coller un assemblage qui force mal",eviter:"Ne pas serrer un tenon qui entre de travers en espérant que la reprise arrangerait : il casserait à l’usage. Ajuster à blanc avant toute colle."},{enoncé:"Stocker le bois à même le sol",eviter:"Ne jamais laisser des planches posées sur la terre ou le béton nu : elles boivent l’humidité et gauchissent. Les caler sur tasseaux, à l’abri des pluies."},{enoncé:"Poncer à contre-fil",eviter:"Ne pas poncer ou finir en travers des fibres : les rayures ressortent à la première couche d’huile. Toujours dans le fil."}]},{id:"transformation-alimentaire",nom:"Transformation alimentaire",emoji:"🫙",resume:"Transformer la saison en produits qui se gardent et se vendent : jus, confitures, poudres, bocaux propres.",taches:[{titre:"Trier avant de transformer",gestes:["Écarter les fruits abîmés ou mols : la chaleur ne répare pas un défaut d’avant — la pourriture passe dans le pot.","Laver à l’eau propre en deux bassines : la première décolle, la seconde rince.","Travailler par petites fournées : la qualité d’un gros chaudron baisse toujours."]},{titre:"Cuire et réduire",gestes:["Confiture : cuire en ébullition franche en écumant, jusqu’à la nappe — la goutte sur l’assiette froide dit stop.","Réduire le feu dès l’ébullition : ce qui attache au fond donne le goût de brûlé à toute la marmite.","Peser le sucre ou le sel selon la recette du départ, jamais « à l’œil » au milieu de la cuisson."]},{titre:"Conditionner propre",gestes:["Bocaux et couvercles ébouillantés, séchés à l’envers sur torchon propre — le microbe entre par le bord.","Remplir chaud, fermer tout de suite, retourner : le vide se forme et le couvercle claque en refroidissant.","Essuyer chaque pot avant l’étiquette : une étiquette sur gras se décolle et fait tâche chez la cliente."]},{titre:"Étiqueter honnêtement",gestes:["Date de fabrication et durée raisonnable de garde sur chaque pot : la péremption d’un produit maison se décide, pas se devine.","Lister les ingrédients dans l’ordre de poids — l’acheteur allergique a le droit de savoir.","Numéro de lot sur tout : un jour où un pot pose problème, on retire le lot, pas la réputation entière."]},{titre:"Stocker et vendre",gestes:["Local sec, sombre et frais ; la lumière et la chaleur fanent couleur et goût avant la date écrite.","Sortir le plus ancien en premier — la rotation est la moitié du commerce.","Goûter un pot de chaque lot avant la vente : on ne vend pas sa propre production sans l’avoir goûtée."]}],glossaire:[{mot:"bocal",sens:"pot de verre à fermeture hermétique pour conserver"},{mot:"ébullition",sens:"frémissement bouillant de la masse — le moment où l’on surveille le plus"},{mot:"écumer",sens:"retirer l’écume qui monte en cuisant, impuretés qui gâtent le goût"},{mot:"péremption",sens:"date jusqu’où le produit se vend et se consomme sans risque"},{mot:"étiquette",sens:"carte du produit : ingrédients, date, lot — elle engage le vendeur"},{mot:"vide (mise en)",sens:"aspiration formée en refroidissant qui claque le couvercle et protège le pot"},{mot:"lot",sens:"quantité fabriquée ensemble, repérable par un numéro pour retirer seulement ce qui coince"},{mot:"sèche",sens:"état d’un produit réduit en poudre ou lamelle, gardé à l’abri de l’humidité"}],pieges:[{enoncé:"Vendre des bocaux au couvercle bombé",eviter:"Ne jamais vendre un pot dont le couvercle claque ou gonfle : signe de fermentation partie dans le bocal. Le jeter, comprendre pourquoi, corriger la cuisson ou le remplissage."},{enoncé:"Réutiliser un couvercle de jus du marché",eviter:"Ne pas se fier à un couvercle déjà serti : le joint a vécu, le vide ne se refera pas. Le couvercle est à usage unique, le pot se garde."},{enoncé:"Étiqueter « environ 6 mois » sans date",eviter:"Ne jamais écrire une durée sans dater la fabrication : chez l’acheteur, le doute finit à la poubelle — et la confiance aussi."},{enoncé:"Travailler sale « parce que ça bout »",eviter:"Ne pas croire tout réglé parce que la cuisson tue les microbes : la contamination se fait après, au remplissage et aux mains. Cheveux couverts, torchons propres, ongles nets."}]},{id:"apiculture",nom:"Apiculture",emoji:"🐝",resume:"Des colonies solides et un miel propre : on visite avec de la fumée, on récolte sans casser la ruche.",taches:[{titre:"Installer la ruche",gestes:["Emplacement au lever du soleil, à l’abri du vent fort, loin des poules et des bassins d’eau stagnante.","Ruche posée sur des cales à vingt centimètres du sol, entrée orientée au sud : l’humidité du sol est le premier ennemi.","Deux colonies plutôt qu’une : ce qui arrive à l’une ne tue pas l’année."]},{titre:"Visiter sans casser",gestes:["Fumée douce à l’enfumoir avant d’ouvrir — deux pulsations, attendre, ouvrir. La colonie énervée se punit elle-même.","Soulever les cadres par les deux extrémités, après les avoir décollés au couteau, jamais arrachés du centre.","Visite courte : cinq minutes le matin chaud ; on cherche la reine, le couvain, les réserves — pas à tout retourner."]},{titre:"Surveiller la santé",gestes:["Compter les cadres de couvain à chaque visite : qui diminue deux fois de suite a un problème à trouver.","Regarder le plancher : tas de petites feuilles = varroa, miel collant aux pieds = loque ou dysenterie — noter et en parler au technicien apicole.","Nourrir si les réserves finissent avant la grande floraison : sirop ou pâte, jamais de miel récolté d’une autre ruche malade."]},{titre:"Gérer l’essaim",gestes:["Repérer les cellules royales au bord des cadres avant la sortie : une ruche qui essaime perd la moitié de sa force de miel.","Essaim parti : le récupérer à la fumée dans une caisse, le loger dans une ruche visitée — il vaut de l’or, la colonie toute faite.","Repérer la fièvre d’essaimage avant les récoltes : une caisse-piège à trois mètres de la ruche mère retient l’essaim."]},{titre:"Récolter propre",gestes:["Récolter quand les opercules de cire sont bouchés aux deux tiers : en dessous, le miel fermente dans le pot.","Chasser les abeilles doucement à la fumée, jamais au feu ni au carburant.","Extraire dans un local fermé et propre, filtrer, laisser reposer la mousse avant de mettre en pots."]}],glossaire:[{mot:"ruche",sens:"maison de la colonie — corps pour le couvain, hausses pour le miel"},{mot:"enfumoir",sens:"pot à fumée douce qui calme la colonie avant la visite"},{mot:"cadre",sens:"baguette de bois portant la cire, mobile dans la ruche — ce qu’on visite"},{mot:"couvain",sens:"zone d’œufs et larves, le cœur de la colonie"},{mot:"essaim",sens:"départ d’une vieille reine avec la moitié des ouvrières — la ruche se duplique"},{mot:"opercule",sens:"opercule de cire qui ferme l’alvéole de miel mûr — le signal de récolte"},{mot:"varroa",sens:"acarien parasite affaiblissant la colonie ; se voit au plancher et aux ailes"},{mot:"hausse",sens:"étage du dessus réservé au miel de récolte"}],pieges:[{enoncé:"Récolter un miel pas operculé",eviter:"Ne jamais extraire tant que les alvéoles ne sont pas bouchées des deux tiers : l’eau restante fait fermenter le pot chez le client. Un miel qui mousse après vente est un miel récolté trop tôt."},{enoncé:"Fumer à brûler pour « faire sortir les abeilles »",eviter:"Ne pas noyer la ruche de fumée épaisse et brûlante : elle salit le miel, affole la colonie et peut la faire abandonner. Deux pulsations douces suffisent."},{enoncé:"Prendre du miel d’une ruche malade pour nourrir une autre",eviter:"Ne rien transférer d’une colonie suspecte à une saine : loque et spores voyagent dans le miel. Nourrir au sirop, jamais au miel d’emprunt."},{enoncé:"Visiter en pleine pluie ou grand froid",eviter:"Ne jamais ouvrir une ruche quand il pleut ou quand il fait froid : le couvain se refroidit et les butineuses mouillées ne rentrent pas. On attend le matin chaud et sec."}]},{id:"gestion-boutique",nom:"Gestion de boutique",emoji:"🏪",resume:"Une petite boutique qui gagne : stock qui tourne, caisse qui ferme, marge calculée avant l’achat.",taches:[{titre:"Acheter en calculant",gestes:["Décider l’achat selon la rotation : ce qui dort six semaines ne se rachète pas, même solde.","Calculer la marge avant de fixer le prix de vente — prix d’achat + transport + casse + bénéfice voulu.","Payer cash ce qui tourne vite, ne jamais dormir à crédit sur du stock lent."]},{titre:"Ranger le stock",gestes:["Tout article a une place connue d’un employé même absent du jour : étiquette de zone sur l’étagère.","Le plus ancien devant — premier entré, premier sorti —, les dates de péremption en rang et contrôlées chaque semaine.","Sécher le sol, surélever les cartons, chasser les rats avant qu’ils choisissent tes sacs."]},{titre:"Tenir la caisse",gestes:["Fond de caisse compté et noté à chaque ouverture, fermé et compté à chaque fermeture — l’écart du jour s’explique le soir, jamais le mois d’après.","Ticket ou registre pour toute sortie d’argent, même la « petite dette » du voisin.","Séparer la caisse de la poche : l’argent de la boutique ne paie pas le déjeuner du vendeur."]},{titre:"Faire l’inventaire sans pleurer",gestes:["Inventaire tournant : une famille de produits par semaine vaut mieux qu’un comptage total annuel qui fait peur.","Compter à deux — l’un dicte, l’autre écrit — et comparer avec le carnet d’entrées-sorties.","Le manquant se note avec la date et la zone : ce qui se répète trois fois n’est pas une erreur, c’est une fuite."]},{titre:"Fidéliser et encaisser vite",gestes:["Files courtes : la cliente qui attend dix minutes revient moins que celle qui repart avec son achat.","Le carnet de dettes des bons payeurs seulement, avec plafond noté et relance à échéance.","Propreté, prix visibles, sourires : trois fois rien, et la boutique gagne sur la concurrence du coin."]}],glossaire:[{mot:"stock",sens:"marchandise possédée — de l’argent qui dort tant qu’il ne tourne pas"},{mot:"caisse",sens:"lieu et registre de l’argent encaissé ; se compte à l’ouverture et à la fermeture"},{mot:"inventaire",sens:"comptage physique du stock, comparé au carnet"},{mot:"marge",sens:"différence entre prix de vente et coût complet — c’est elle qui paie le loyer et le vendeur"},{mot:"rotation",sens:"vitesse à laquelle un article se vend et se remplace"},{mot:"fond de caisse",sens:"réserve de monnaie rendue, comptée chaque jour, jamais dépensée"},{mot:"casse",sens:"produit abîmé ou périmé — un coût réel à payer dans la marge"},{mot:"crédit-client",sens:"vente à tempérament écrite, plafonnée et relancée — pas une habitude silencieuse"}],pieges:[{enoncé:"Payer ses courses dans la caisse",eviter:"Ne jamais confondre l’argent de la boutique avec sa poche : le trou se creuse sans bruit et la fermeture comptable devient un mensonge. Se verser un salaire noté, même modeste."},{enoncé:"Dormir à crédit fournisseur",eviter:"Ne pas accumuler les impayés chez les grossistes pour remplir les rayons : le crédit coupé du jour au lendemain vide la boutique. Un paiement d’avance qui tourne vaut mieux que deux dettes qui dorment."},{enoncé:"Vendre à perte pour « faire le prix »",eviter:"Ne jamais descendre sous le coût complet en espérant le rattraper sur la quantité : la marge ne se rattrape pas toute seule, la trésorerie meurt poliment."},{enoncé:"Reporter l’inventaire à plus tard chaque semaine",eviter:"Ne rien attendre de l’année prochaine : les écarts découverts tard ne se corrigent plus. Une famille comptée par semaine, tout de suite."}]},{id:"soudure",nom:"Soudure et métal",emoji:"⚡",resume:"Souder solide et sûr : masque, masse, métal propre — la beauté de l’arc est dans la préparation.",taches:[{titre:"Préparer la place",gestes:["Local ventilé, sol sans rien qui prend feu — copeaux, carton et essence sont les trois incendies de l’atelier.","Gants et manches longues, masque teinté avant d’allumer : l’œil abîmé par l’arc se paie des années.","Vieux pneus et bidons fermés ne se soudent jamais — ils explosent à la chaleur, remplis de gaz invisibles."]},{titre:"Préparer le métal",gestes:["Brosser ou meuler la zone à souder jusqu’au brillant : rouille et peinture font une soudure poreuse qui casse sans bruit.","Ajuster les pièces serrées au pointage avant de passer l’arc complet — la dilatation change tout entre deux points distants.","Choisir le diamètre de baguette selon l’épaisseur : sur une tôle fine, une baguette trop forte la perce."]},{titre:"Tenir l’arc",gestes:["Allumer en frottant ou en tapant, arc court et régulier : la distance de l’électrode tient dans le son — un grésillement posé, pas un crépitement nerveux.","Avancer lentement, laisser le bain de fusion remplir ; le cordon doit avoir des écailles régulières.","S’arrêter net, laisser figer avant de gratter le laitier : un cordon tapé trop tôt se fissure."]},{titre:"Souder la tôle mince",gestes:["Points rapprochés et pauses : la tôle fine chauffe et se perce en trois secondes de trop.","Caler un cuivre ou une baguette froide derrière la zone comme dissipateur quand c’est possible.","Sur tôles de carrosserie, gouttes successives et marteau à planer battront toujours l’arc continu d’un débutant."]},{titre:"Finir et contrôler",gestes:["Gratter le laitier, brosser, regarder le cordon : trous, morsures sur les bords ou soufflures = reprise, pas de camouflage.","Frapper au marteau une soudure ratée ne la sauve pas — meuler et refaire à froid.","Marquer les pièces de sécurité (châssis, supports de charge) avec la date et la reprise : un jour un humain montera dessus."]}],glossaire:[{mot:"arc",sens:"décharge électrique qui fond le métal entre l’électrode et la pièce"},{mot:"baguette",sens:"électrode enrobée qui amène le métal d’apport — le choix du diamètre se paie"},{mot:"laitier",sens:"croûte de flux sur le cordon, à gratter pour contrôler"},{mot:"cordon",sens:"trace de métal fondu — ses écailles disent le geste"},{mot:"masque",sens:"écran teinté protégeant yeux et visage des rayons et des étincelles"},{mot:"étincelle",sens:"projection en fusion — elle part loin et allume ce qu’elle touche"},{mot:"tôle",sens:"feuille de métal fine, la plus délicate à souder sans percer"},{mot:"pointage",sens:"petits points d’arc qui figent les pièces en place avant la soudure complète"}],pieges:[{enoncé:"Souder sans masque ou avec un verre clair",eviter:"Ne jamais regarder l’arc à l’œil nu, même « deux secondes » : la brûlure de rétine met des heures à se déclarer et des jours à passer. Le masque se met avant l’allumage."},{enoncé:"Souder un bidon ou pneu fermé",eviter:"Ne rien souder d’un récipient ayant contenu essence, gaz ou huile sans l’avoir rempli d’eau et ouvert des deux côtés : la vapeur explose à l’arc, couvercle compris."},{enoncé:"Souder sur peinture ou rouille « pour aller vite »",eviter:"Ne pas poser l’arc sur métal sale : les gaz de peinture et l’oxyde rendent le cordon poreux et le masque protège mal des fumées. Meuler d’abord."},{enoncé:"Travailler dans une pièce fermée sans air",eviter:"Ne jamais souder porte et fenêtre closes : les fumées métalliques montent et donnent la fièvre des fondeurs le soir même. Ventiler, ou travailler dehors sous abri."}]},{id:"produits-entretien",nom:"Savons et produits d’entretien",emoji:"🧼",resume:"Fabriquer propre et vendre honnête : savon, lessive et désinfectants dosés, gantés, étiquetés.",taches:[{titre:"Savon solide",gestes:["Huile + soude, dosage pesé à la balance : en dessous le savon ne lave pas, au-dessus il brûle la peau.","Soude toujours versée dans l’eau, jamais l’inverse — la réaction chauffe et projette.","Travail gants et lunettes, hors de portée des enfants et des animaux, dans un air qu’on ne respire pas."]},{titre:"Lessive liquide",gestes:["Cendre tamisée ou cristaux, eau chaude, dose mesurée en bouteilles marquées, pas en poignées.","Savon râpé finement dissous d’abord, le reste ajouté ensuite — les grumeaux bouchent le flacon et dégoûtent l’acheteur.","Laisser maturer et séparer avant d’embouteiller : ce qui sort tiède du chaudron n’a pas encore sa force."]},{titre:"Désinfectants et javellisés",gestes:["Un seul produit de désinfection à la fois, jamais de mélange maison hasardeux — eau de Javel + acide ou ammoniaque dégage des gaz qui prennent à la gorge.","Dilution notée sur le bidon et date de préparation : la Javel affaiblie désinfecte mal et trompe tout le monde.","Flacons d’origine étiquetés ou bouteilles alimentaires jamais réutilisées pour du produit ménager."]},{titre:"Étiqueter et vendre",gestes:["Nom, usage, précautions (gant, ne pas boire, tenir des enfants) et date sur chaque flacon — un produit du marché a les mêmes devoirs qu’un industriel.","Vendre à l’essai petite quantité d’abord : un savon qui gratte la peau se corrige avant d’inonder le quartier.","Garder un pot témoin de chaque lot, noté : un client mécontent repart avec une preuve, pas avec une dispute."]},{titre:"Stocker et durer",gestes:["Local sec et sombre, soude et acides séparés, jamais au soleil ni près du feu.","Le savon maison se garde sec et sur grille — un savon dans du plastique suant se couvre de taches et se vend mal.","Premier fabriqué, premier vendu : la rotation s’applique aux bidons comme aux pots."]}],glossaire:[{mot:"soude",sens:"base qui transforme l’huile en savon — corrosive, pesée et gantée"},{mot:"savon",sens:"produit de lavage obtenu huile + base, durci et maturé"},{mot:"lessive",sens:"eau de nettoyage alcaline, maison à partir de cendre ou cristaux"},{mot:"cendre",sens:"résidu de combustion tamisé, source d’alcali pour lessiver"},{mot:"javel",sens:"désinfectant à base de chlore, dilué et daté — jamais mélangé"},{mot:"dosage",sens:"quantité pesée, écrite et répétée — le cœur de la qualité maison"},{mot:"gant",sens:"protection des mains, obligatoire à la manipulation et conseillée à l’usage vendu"},{mot:"maturer",sens:"laisser reposer jusqu’à ce que le produit prenne sa force"}],pieges:[{enoncé:"Mélanger javel et autre produit « pour plus fort »",eviter:"Ne jamais mélanger la Javel avec un acide (détartrant, vinaigre) ou de l’ammoniaque : le gaz dégagé brûle les yeux et la gorge en quelques secondes. Un produit, un moment, aéré."},{enoncé:"Verser l’eau sur la soude",eviter:"Ne jamais verser l’eau dans la soude : toujours la soude dans l’eau, lentement — l’inverse fait bouillir et projette une base qui marque la peau."},{enoncé:"Vendre un savon qui vient de couler",eviter:"Ne pas sortir du moule avant la fin de la cure : un savon de quelques jours irrite la peau et coule à l’eau. Le client jugera mauvais ce qui est seulement trop jeune."},{enoncé:"Réemployer des bouteilles alimentaires pour produits ménagers",eviter:"Ne jamais laisser un ménage sans étiquette sur un contenant qui a contenu à boire : les intoxications par confusion existent. Bouteilles marquées ou flacons de produit."}]}];function xm(t){return Po.find(e=>e.id===t)??null}function bm(t,e){if(!e)return t.slice();const n=e.toUpperCase();return t.filter(i=>!i.pays||i.pays.includes(n))}const Sm=["crise-survie","approvisionnement"];function ym(t){const e=[],n=[];for(const i of Sm){const r=t.find(s=>s.id===i);r&&e.push(r)}for(const i of t)Sm.includes(i.id)||n.push(i);return[...e,...n]}function Ef(t,e){const n=t.length;if(n===0)throw new Error("cycle: tableau vide");const i=Number.isFinite(e)?Math.floor(e):0;return t[(i%n+n)%n]}function Mm(t,e){return Ef(t.taches,e)}function r4(t,e){return Ef(t.glossaire,e)}function s4(t,e){return Ef(t.pieges,e)}const m_="nath.metiers.progression";function g_(t){const e=t.getItem(m_);if(!e)return{};try{const n=JSON.parse(e);if(!n||typeof n!="object")return{};const i={};for(const[r,s]of Object.entries(n))typeof s=="number"&&Number.isFinite(s)&&s>=0&&(i[r]=Math.floor(s));return i}catch{return{}}}function Em(t,e){return g_(e)[t]??0}function a4(t,e){const n=g_(e),i=(n[t]??0)+1;return n[t]=i,e.setItem(m_,JSON.stringify(n)),i}const Tf=[{code:"SN",nom:"Sénégal",emoji:"🇸🇳",monnaie:"FCFA",langues:["fr","wo"],urgence:{police:"17",pompiers:"18",samu:"15",commun:"112"}},{code:"ML",nom:"Mali",emoji:"🇲🇱",monnaie:"FCFA",langues:["fr","bm"],urgence:{police:"17",pompiers:"18",samu:"15"}},{code:"CI",nom:"Côte d’Ivoire",emoji:"🇨🇮",monnaie:"FCFA",langues:["fr"],urgence:{police:"17",pompiers:"180",samu:"150"}},{code:"BF",nom:"Burkina Faso",emoji:"🇧🇫",monnaie:"FCFA",langues:["fr"],urgence:{police:"17",pompiers:"18",samu:"1100"}},{code:"GN",nom:"Guinée",emoji:"🇬🇳",monnaie:"GNF",langues:["fr","ff"],urgence:{police:"17",pompiers:"114",samu:"111"}},{code:"BJ",nom:"Bénin",emoji:"🇧🇯",monnaie:"FCFA",langues:["fr"],urgence:{police:"117",pompiers:"118",samu:"112"}},{code:"TG",nom:"Togo",emoji:"🇹🇬",monnaie:"FCFA",langues:["fr"],urgence:{police:"117",pompiers:"118",samu:"111"}},{code:"NE",nom:"Niger",emoji:"🇳🇪",monnaie:"FCFA",langues:["fr","ha"],urgence:{police:"17",pompiers:"18",samu:"15"}},{code:"GH",nom:"Ghana",emoji:"🇬🇭",monnaie:"GHS (cédi)",langues:["en"],urgence:{police:"191",pompiers:"192",samu:"193",commun:"112"}},{code:"NG",nom:"Nigeria",emoji:"🇳🇬",monnaie:"₦ (naira)",langues:["en","pcm","yo","ha"],urgence:{police:"112",pompiers:"199",samu:"767"}},{code:"CM",nom:"Cameroun",emoji:"🇨🇲",monnaie:"FCFA",langues:["fr","en"],urgence:{police:"17",pompiers:"118",samu:"112"}},{code:"MA",nom:"Maroc",emoji:"🇲🇦",monnaie:"MAD (dirham)",langues:["fr","ar"],urgence:{police:"19",pompiers:"15",samu:"15"}},{code:"FR",nom:"France",emoji:"🇫🇷",monnaie:"€",langues:["fr"],urgence:{police:"17",pompiers:"18",samu:"15",commun:"112"}}];function v_(t){if(!t)return null;const e=t.toUpperCase();return Tf.find(n=>n.code===e)??null}const o4="Numéros donnés à titre indicatif — confirmez-les auprès des autorités locales.",Tm={pays:"",crise:!1,choixExplicite:!1},__="nath.metiers.contexte";function x_(t){return typeof t=="string"&&v_(t)!==null}function Am(t){const e=t.getItem(__);if(!e)return{...Tm};try{const n=JSON.parse(e);return{pays:x_(n.pays)?n.pays:"",crise:n.crise===!0,choixExplicite:n.choixExplicite===!0}}catch{return{...Tm}}}function wm(t,e){const n={pays:x_(e.pays)?e.pays:"",crise:e.crise===!0,choixExplicite:e.choixExplicite===!0};t.setItem(__,JSON.stringify(n))}function l4(t){for(const e of t){if(typeof e!="string")continue;const n=/[-_]([A-Za-z]{2})(?:$|[-_])/.exec(e);if(!n)continue;const i=n[1].toUpperCase();if(Tf.some(r=>r.code===i))return i}return""}function Cm(t,e){return t.pays?t.pays:t.choixExplicite?"":l4(e)}const u4=new Set(["de","du","des","le","la","les","un","une","et","ou","a","au","aux","en","dans","pour","avec","sans","sur","sous","chez","plus","très","peu","beaucoup","quelques","some","the","of","with","je","j ai","ai","il","elle","on","nous","vous","ils","y","est","sont","faire","mettre"]),c4=t=>t.replace(/œ/g,"oe").replace(/æ/g,"ae");function ga(t){const n=c4(dt(t)).split(" ").filter(i=>i.length>1&&!u4.has(i)&&!/^\d+$/.test(i)).join(" ");return n.length>3&&/s$/.test(n)?n.slice(0,-1):n}function Ba(t){const e=[],n=new Set;for(const i of t.split(/[,;/\n]|\s+et\s+/i)){const r=ga(i);!r||n.has(r)||(n.add(r),e.push(r))}return e}function d4(t){const e=/(\d+)/.exec(t);if(!e)return 1;const n=Number(e[1]);return Number.isFinite(n)&&n>0&&n<=99?Math.floor(n):1}async function Ll(t){const e=t.question.trim(),n=t.endpoint.trim().replace(/\/+$/,"");if(!n||!e||!t.consigne.trim())return null;try{const i=await t.fetchImpl(`${n}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...t.modele?{modele:t.modele}:{},messages:[{role:"system",content:`${t.consigne}
Tu réponds toujours en français.`},{role:"user",content:e}]})});if(!i.ok)return null;const r=await i.json(),s=r?.result?.response??r?.response,a=typeof s=="string"?s.trim():"";return a&&a.length<=(t.max??800)?a:null}catch{return null}}const b_=[{id:"ome",nom:"Omelette des voisins",type:"dîner",minutes:10,ingredients:["oeuf","oignon","tomate","huile"]},{id:"sal",nom:"Salade croque-frais",type:"encas",minutes:5,ingredients:["concombre","tomate","citron","huile"]},{id:"rib",nom:"Riz sauté du soir",type:"dîner",minutes:15,ingredients:["riz","oeuf","oignon","carotte","huile"]},{id:"pou",nom:"Poulet tomate et riz",type:"plat",minutes:45,ingredients:["poulet","tomate","oignon","riz","huile"]},{id:"poi",nom:"Poisson braisé, citron et piment",type:"plat",minutes:35,ingredients:["poisson","citron","piment","oignon","huile"]},{id:"nie",nom:"Niébé en sauce",type:"plat",minutes:50,ingredients:["niebe","oignon","tomate","huile","piment"]},{id:"tho",nom:"Riz au thon express",type:"dîner",minutes:12,ingredients:["thon","riz","oignon","tomate"]},{id:"ign",nom:"Igname pilée, sauce verte",type:"plat",minutes:40,ingredients:["igname","epinard","piment","oignon"]},{id:"pat",nom:"Purée de patate douce",type:"accompagnement",minutes:25,ingredients:["patate","lait","beurre","sucre"]},{id:"sem",nom:"Semoule aux légumes",type:"plat",minutes:20,ingredients:["semoule","carotte","oignon","huile","tomate"]},{id:"gat",nom:"Gâteau simple de la maison",type:"dessert",minutes:45,ingredients:["farine","sucre","oeuf","lait","huile"]},{id:"cre",nom:"Crème banane et cacao",type:"dessert",minutes:10,ingredients:["banane","lait","cacao","sucre"]},{id:"smoothie",nom:"Smoothie mangue-orange",type:"boisson",minutes:5,ingredients:["mangue","orange","lait","sucre"]},{id:"jus",nom:"Jus de gingembre citronné",type:"boisson",minutes:15,ingredients:["gingembre","citron","sucre","eau"]},{id:"the",nom:"Thé à la menthe",type:"boisson",minutes:8,ingredients:["the","menthe","sucre","eau"]},{id:"pouletfa",nom:"Poulet rôti aux quatre épices",type:"plat",minutes:70,ingredients:["poulet","ail","gingembre","piment","huile"]},{id:"sau",nom:"Sauce tomate arachide",type:"sauce",minutes:35,ingredients:["tomate","arachide","oignon","piment","huile"]},{id:"yaour",nom:"Yaourt frais aux fruits",type:"dessert",minutes:5,ingredients:["yaourt","banane","miel"]},{id:"lap",nom:"Laitue trempée dans le chaud",type:"accompagnement",minutes:6,ingredients:["laitue","citron","huile","sel"]},{id:"paineu",nom:"Pain perdu sucré",type:"encas",minutes:10,ingredients:["pain","oeuf","lait","sucre"]}];function Rm(t){return Ba(t)}const f4=3;function S_(t,e){const n=new Set(t.flatMap(s=>Ba(String(s))));if(!n.size)return[];const i=Math.max(0,Math.floor(f4)),r=[];for(const s of b_){const a=s.ingredients.filter(l=>!n.has(l));!(s.ingredients.length-a.length)||a.length>i||r.push({plat:s,manquants:a})}return r.sort((s,a)=>s.manquants.length-a.manquants.length||s.plat.minutes-a.plat.minutes||s.plat.nom.localeCompare(a.plat.nom,"fr"))}function h4(t){const e=new Set(t.flatMap(i=>Ba(String(i)))),n=new Map;for(const i of S_(t).slice(0,3))for(const r of i.manquants)n.set(r,(n.get(r)??0)+1);return[...n.entries()].filter(([i])=>!e.has(i)).sort((i,r)=>r[1]-i[1]||i[0].localeCompare(r[0],"fr")).map(([i])=>i)}function p4(t){const e=Math.floor(t);return!Number.isFinite(e)||e<=0?[]:b_.filter(n=>n.minutes<=e).sort((n,i)=>n.minutes-i.minutes)}async function m4(t,e,n=fetch,i=""){return e.length<2?null:Ll({endpoint:t,modele:i,fetchImpl:n,max:800,consigne:"Tu es cuisinier et honnête. En français, en trois idées courtes, propose ce que ces ingrédients permettent de faire, avec le temps de cuisson et une astuce d’assaisonnement. N’invente pas d’ingrédient absent.",question:Ba(e.join(", ")).join(", ")})}const g4=[{nom:"Œuf",unite:"unité",kcal:78,p:6,g:1,l:5,alias:["oeuf","uf","oeufs"]},{nom:"Banane",unite:"unité",kcal:90,p:1,g:23,l:0,alias:["banane"]},{nom:"Pomme",unite:"unité",kcal:72,p:0,g:19,l:0,alias:["pomme"]},{nom:"Orange",unite:"unité",kcal:47,p:1,g:12,l:0,alias:["orange"]},{nom:"Mangue",unite:"unité",kcal:60,p:1,g:15,l:0,alias:["mangue"]},{nom:"Tomate",unite:"unité",kcal:18,p:1,g:4,l:0,alias:["tomate"]},{nom:"Concombre",unite:"unité",kcal:12,p:1,g:2,l:0,alias:["concombre"]},{nom:"Carotte",unite:"unité",kcal:25,p:1,g:6,l:0,alias:["carotte"]},{nom:"Oignon",unite:"unité",kcal:40,p:1,g:9,l:0,alias:["oignon"]},{nom:"Pain",unite:"tranche",kcal:80,p:3,g:15,l:1,alias:["pain","tranche"]},{nom:"Riz cuit",unite:"portion",kcal:130,p:3,g:28,l:0,alias:["riz","garba"]},{nom:"Pâtes cuites",unite:"portion",kcal:157,p:6,g:31,l:1,alias:["pate","spaghetti"]},{nom:"Semoule",unite:"portion",kcal:157,p:6,g:33,l:0,alias:["semoule","couscous"]},{nom:"Igname",unite:"portion",kcal:118,p:2,g:27,l:0,alias:["igname","patate"]},{nom:"Niébé cuit",unite:"portion",kcal:120,p:8,g:21,l:0,alias:["niebe","haricot","lentille"]},{nom:"Poulet cuit",unite:"portion",kcal:165,p:31,g:0,l:4,alias:["poulet","volaille"]},{nom:"Poisson cuit",unite:"portion",kcal:135,p:20,g:0,l:5,alias:["poisson","capitaine","tilapia"]},{nom:"Thon en boîte",unite:"unité",kcal:116,p:26,g:0,l:1,alias:["thon"]},{nom:"Arachide",unite:"cuillère",kcal:94,p:4,g:3,l:8,alias:["arachide","cacahuede","cacahuete"]},{nom:"Lait",unite:"verre",kcal:60,p:3,g:5,l:3,alias:["lait"]},{nom:"Yaourt",unite:"pot",kcal:59,p:10,g:4,l:0,alias:["yaourt","yogourt","lait fermente"]},{nom:"Fromage",unite:"portion",kcal:115,p:7,g:1,l:9,alias:["fromage","vache"]},{nom:"Huile",unite:"cuillère",kcal:119,p:0,g:0,l:14,alias:["huile"]},{nom:"Beurre",unite:"cuillère",kcal:102,p:0,g:0,l:12,alias:["beurre","margarine"]},{nom:"Sucre",unite:"cuillère",kcal:48,p:0,g:12,l:0,alias:["sucre","miel"]},{nom:"Farine de blé",unite:"cuillère",kcal:38,p:1,g:8,l:0,alias:["farine"]},{nom:"Cacao",unite:"cuillère",kcal:12,p:1,g:1,l:1,alias:["cacao","chocolat"]},{nom:"Épinard",unite:"assiette",kcal:23,p:3,g:4,l:0,alias:["epinard","feu","légume vert"]},{nom:"Laitue",unite:"assiette",kcal:8,p:1,g:1,l:0,alias:["laitue","salade"]},{nom:"Avocat",unite:"unité",kcal:80,p:1,g:4,l:7,alias:["avocat","caiman"]}];function v4(t){const e=ga(t);return e?g4.find(n=>ga(n.nom)===e||(n.alias??[]).some(i=>ga(i)===e))??null:null}const Qi=t=>Math.round(t*10)/10;function _4(t){const e=t.split(/[,;/\n]|\s+et\s+/i).map(s=>s.trim()).filter(Boolean),n=[],i=[];for(const s of e){const a=v4(s);if(!a){const l=ga(s);l&&!i.includes(l)&&i.push(l);continue}const o=a.unite==="unité"?d4(s):1;n.push({nom:a.nom,quantite:o,kcal:Qi(a.kcal*o),p:Qi(a.p*o),g:Qi(a.g*o),l:Qi(a.l*o)})}const r=n.reduce((s,a)=>({kcal:s.kcal+a.kcal,p:s.p+a.p,g:s.g+a.g,l:s.l+a.l}),{kcal:0,p:0,g:0,l:0});return{articles:n,inconnus:i,total:{kcal:Qi(r.kcal),p:Qi(r.p),g:Qi(r.g),l:Qi(r.l)}}}const x4={leger:"Peu de choses sur l’assiette : ajoute un féculent ou une poignée de légumineuses pour tenir la journée.",correct:"Bel équilibre. Pense à la verdure et à l’eau avant de quitter la table.",copieux:"Beaucoup d’énergie d’un coup : marche vingt minutes et garde le reste pour le prochain repas."};function b4(t){const e=Number.isFinite(t.kcal)?t.kcal:0,n=e<400?"leger":e<=800?"correct":"copieux";return{equilibre:n,mot:x4[n]}}async function S4(t,e,n=fetch,i=""){const r=Ba(e).length?e.trim():"";return r?Ll({endpoint:t,modele:i,fetchImpl:n,max:800,consigne:"Tu es nutritionniste de quartier, en français. En trois phrases, dis ce qui manque ou ce qui est de trop dans cette assiette, et un seul remplacement simple à portée de main. Pas de chiffre inventé, pas de diagnostic.",question:r.slice(0,800)}):null}const y4=12,Lm=180,M4=t=>{const e=t.replace(/\s+/g," ").trim(),n=e.length>Lm?`${e.slice(0,Lm).replace(/\s\S*$/,"")}…`:e;if(!n)return"";const i=/[.!?…]$/.test(n)?n:`${n}.`;return i.charAt(0).toUpperCase()+i.slice(1)};function E4(t){return t.split(new RegExp("(?<=[.!?;])\\s+|\\n+")).map(e=>e.trim()).filter(e=>e.length>=y4&&e.split(" ").length>=3)}function Pm(t,e=5){const n=E4(t);if(!n.length)return[];const i=Math.max(1,Math.floor(e)),r=new Set,s=[];for(let a=0;a<n.length&&s.length<i;a++){const o=M4(n[a]),l=dt(o);!o||r.has(l)||(r.add(l),s.push(o))}return s}function Dm(t){return t.map(e=>e.trim()).filter(Boolean).map(e=>{const n=e.split(" ").slice(0,6).join(" ");return{verso:n.length>58?`${n.slice(0,58).replace(/\s\S*$/,"")}…`:n,recto:e}})}async function T4(t,e,n=fetch,i=""){const r=e.trim();return r.length<40?null:Ll({endpoint:t,modele:i,fetchImpl:n,max:900,consigne:"Tu résumes en français, en 4 ou 5 puces courtes commençant par « - », uniquement ce que le texte affirme. Pas d’introduction, pas de conclusion, pas d’inventaire de ce que tu as fait.",question:r.slice(0,6e3)})}function A4(t){const e=t.split(/\n+/).map(r=>r.trim()).filter(Boolean),n=[],i=[];for(const r of e)(/[?？]/.test(r)?n:i).push(r);return{donnees:i,questions:n}}function Nm(t){const e=t.trim();return[`Relis la question${e?` « ${e} »`:""} une première fois, puis souligne exactement ce qui est demandé.`,"Écris à part toutes les données utiles, avec leurs unités : ce que l’énoncé donne, rien de plus.","Choisis la règle, la formule ou le principe qui relie ces données à ce que tu cherches.","Fais le calcul une ligne par opération, sans rien sauter : une ligne, un signe, un résultat.","Vérifie : l’unité attendue est-elle là, l’ordre de grandeur est-il raisonnable, le sens de la réponse tient-il ?","Rédige une réponse complète en une phrase, et garde la trace pour la refaire dans trois jours."]}async function w4(t,e,n=fetch,i=""){const r=e.trim();return r?Ll({endpoint:t,modele:i,fetchImpl:n,max:1200,consigne:"Tu es un professeur patient. Explique la résolution en français, en six étapes courtes numérotées, une ligne par opération, puis termine par une phrase de vérification. N'invente aucune donnée qui manque.",question:r.slice(0,2e3)}):null}const _o=[{nom:"Inspire",secondes:4},{nom:"Retiens",secondes:7},{nom:"Expire",secondes:8}],Im=[{nom:"Inspire",secondes:4},{nom:"Retiens",secondes:4},{nom:"Expire",secondes:4},{nom:"Retiens",secondes:4}];function Yo(t){return t.reduce((e,n)=>e+Math.max(0,Math.floor(n.secondes)),0)}function Iu(t){const e=[];let n=0;for(const i of t){const r=Math.max(0,Math.floor(i.secondes));r&&(e.push({nom:i.nom,debut:n,fin:n+r}),n+=r)}return e}function C4(t,e){const n=Yo(t);if(!n)return{nom:"",reste:0};const i=(Math.floor(e)%n+n)%n;for(const s of Iu(t))if(i>=s.debut&&i<s.fin)return{nom:s.nom,reste:s.fin-i};return{nom:Iu(t)[Iu(t).length-1].nom,reste:0}}function R4(t,e,n){const i=Yo(e),r=Math.max(1,Math.floor(n))*i*1e3,s=Math.max(0,Math.floor(t));if(!i||s>=r)return{cycle:Math.max(1,Math.floor(n)),phase:"Fini",reste:0,fini:!0};const a=i*1e3,o=Math.floor(s/a)+1,l=Math.floor(s%a/1e3),{nom:u,reste:c}=C4(e,l);return{cycle:o,phase:u,reste:c,fini:!1}}const y_="nath.souffle",Fu={sessions:0,secondes:0},sd=t=>typeof t=="number"&&Number.isFinite(t)&&t>0?Math.floor(t):0;function M_(t){try{const e=t.getItem(y_);if(!e)return{...Fu};const n=JSON.parse(e);return!n||typeof n!="object"?{...Fu}:{sessions:sd(n.sessions),secondes:sd(n.secondes)}}catch{return{...Fu}}}function L4(t,e){const n=M_(t),i={sessions:n.sessions+1,secondes:n.secondes+sd(e?.secondes)};return t.setItem(y_,JSON.stringify(i)),i}const P4="Sans drapeau";function D4(t){const e=new Map;for(const r of t){if(!r||typeof r.id!="string")continue;const s=(r.domaine??"").trim()||P4,a=e.get(s);a?a.push(r.id):e.set(s,[r.id])}const n=[...e.values()].reduce((r,s)=>r+s.length,0);return n?[...e.entries()].map(([r,s])=>({nom:r,nombre:s.length,part:Math.round(s.length/n*1e3)/10,ids:s})).sort((r,s)=>s.nombre-r.nombre||r.nom.localeCompare(s.nom,"fr")):[]}const Af="nath.outils.favoris";function Fm(t,e){try{const n=JSON.parse(t.getItem(Af)??"[]");return Array.isArray(n)?n.filter(i=>typeof i=="string"&&e.includes(i)):[]}catch{return[]}}function N4(t,e){const n=I4(t),i=n.includes(e)?n.filter(r=>r!==e):[...n,e];return t.setItem(Af,JSON.stringify(i)),i}function I4(t){try{const e=JSON.parse(t.getItem(Af)??"[]");return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function F4(t,e){const n=e.filter(i=>t.includes(i));return{tete:n,reste:t.filter(i=>!n.includes(i))}}const Um=t=>{const e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstElementChild},Le=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),Om={jour:"Aujourd’hui",flamme:"Flamme",frigo:"Frigo",assiette:"Assiette",journal:"Journal",tuteur:"Tuteur",souffle:"Souffle",resume:"Résumé",carte:"Carte",langues:"Langues",examen:"Examen",metiers:"Métiers",coffre:"Coffre"};function U4(t){const e=xf(),n=Um('<button class="outils-btn" title="Ma boîte à outils" aria-label="Ouvrir la boîte à outils">🧰</button>'),i=Um(`
    <div class="outils-paneau" hidden role="dialog" aria-label="Boîte à outils">
      <div class="outils-tete">
        <div class="outils-onglets"></div>
        <button class="outils-fermer" title="Fermer" aria-label="Fermer">×</button>
      </div>
      <div class="outils-corps"></div>
    </div>`);document.body.append(n,i);const r=i.querySelector(".outils-corps");let s="jour",a="",o="",l="",u=null,c="",d=[],f="",m="",v="",_=_o,g=3,h=null,M=0,T=null,A="wolof",R="",C="",w="",B="",x=null,y="",D="",J=null,G={},$=null,ee=Po[0]?.id??"",K=!1;const j=()=>navigator.onLine?"":'<p class="outils-note">Hors-ligne : tout ce que tu vois ici continue de fonctionner.</p>',ie=()=>!!Zt(t).trim(),ye=te=>Fm(t,[te]).includes(te);function me(te){N4(t,te),Ye()}function Ae(){const te=Am(t),ne=navigator.languages?.length?Array.from(navigator.languages):[navigator.language??""],b=ym(bm(Po,Cm(te,ne))),p=xm(ee)??b[0],E=p?{metier:{pack:p.nom,tache:Mm(p,Em(p.id,t)).titre}}:{},P=dn(t).reduce((Me,ge)=>Me+jo(ge,Date.now()).aRevoir,0),q=t_(nd),k=xA({...E,revisions:P,decouverte:q?{titre:q.titre,resume:q.resume}:null,usage:vA(t)});r.innerHTML=`
      <div class="oi-carte">
        ${k.map(Me=>`<p class="${Me==="Aujourd’hui"?"oi-titre":"oi-note"}">${Le(Me)}</p>`).join("")}
      </div>${j()}`}function V(){const te=a_(t),ne=kA(te.xp),b=Math.round(zA(te.xp)*100);r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">🔥 ${te.streak} jour${te.streak>1?"s":""} de suite</p>
        <p class="oi-note">Record : ${te.meilleur} jour${te.meilleur>1?"s":""} · ${te.xp} points · niveau ${ne} — ${Le(qA(ne))}</p>
        <div class="oi-barre"><i style="width:${b}%"></i></div>
        <p class="oi-note">${b} % du chemin vers le niveau ${ne+1}.</p>
        <div class="oi-actions">
          <button data-xp="10">Je révise aujourd’hui (+10)</button>
          <button data-xp="25">J’ai fini un paquet (+25)</button>
        </div>
        <p class="oi-note">Chaque fiche revue dans le coin d’études ajoute aussi ses points, toute seule.</p>
      </div>${j()}`,r.querySelectorAll("[data-xp]").forEach(p=>{p.addEventListener("click",()=>{l_(t,Number(p.dataset.xp)),V()})})}function O(){const te=Rm(a),ne=S_(te),b=h4(te);r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-frigo">Ce que j’ai sous la main</label>
        <textarea id="oi-frigo" class="oi-champ" rows="2" placeholder="2 œufs, tomate, riz, oignon…">${Le(a)}</textarea>
        <div class="oi-actions">
          ${e.sttDisponible?'<button data-act="micro" data-cible="frigo">🎤 Dictater</button>':""}
          <button data-act="vingt">Dîner en 20 minutes</button>
          ${ie()?'<button data-act="cereau">Demander une idée</button>':""}
        </div>
        ${te.length?`<p class="oi-note">Je retiens : ${te.map(Le).join(", ")}.</p>`:""}
        <div data-zone></div>
      </div>${j()}`;const p=r.querySelector("#oi-frigo");p.addEventListener("input",()=>{a=p.value,O();const P=r.querySelector("#oi-frigo");P.focus(),P.setSelectionRange(P.value.length,P.value.length)});const E=r.querySelector("[data-zone]");ne.length?E.innerHTML='<p class="oi-titre2">Ce que je peux faire</p>'+ne.slice(0,6).map(P=>`<div class="oi-ligne"><span>${Le(P.plat.nom)} · ${P.plat.minutes} min</span>
            <small>${P.manquants.length?`manque : ${P.manquants.map(Le).join(", ")}`:"j’ai tout"}</small></div>`).join(""):te.length&&(E.innerHTML='<p class="oi-note">Rien sur la carte avec ces seuls mots — ajoute un féculent, un légume ou une protéine.</p>'),b.length&&(E.innerHTML+=`<p class="oi-titre2">Liste de courses</p><p class="oi-cours">${b.map(Le).join(" · ")}</p>`),r.querySelector('[data-act="vingt"]')?.addEventListener("click",()=>{a=p4(20).map(P=>P.ingredients.slice(0,2).join(", ")).slice(0,3).join(", "),O()}),Z(r.querySelector('[data-act="micro"]'),p,P=>{a=P,O()}),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async P=>{const q=P.currentTarget;q.disabled=!0,q.textContent="Je réfléchis…";const k=await m4(Zt(t),Rm(a),fetch,Cr(t));E.innerHTML+=k?`<p class="oi-titre2">Une idée en plus</p><p class="oi-reponse">${Le(k)}</p>`:'<p class="oi-note">Pas de réponse venue — la carte du frigo reste utilisable hors-ligne.</p>',q.disabled=!1,q.textContent="Demander une idée"})}function H(){const te=_4(o),ne=b4(te.total);r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-assiette">Ce que je mange</label>
        <textarea id="oi-assiette" class="oi-champ" rows="2" placeholder="2 œufs, riz, poulet, banane…">${Le(o)}</textarea>
        <div class="oi-actions">${e.sttDisponible?'<button data-act="micro" data-cible="assiette">🎤 Dictater</button>':""}
        ${ie()?'<button data-act="cereau">Avis du grand cerveau</button>':""}</div>
        ${te.articles.length?`
          <table class="oi-table"><thead><tr><th>Aliment</th><th>Qté</th><th>kcal</th><th>P</th><th>G</th><th>L</th></tr></thead>
          <tbody>${te.articles.map(p=>`<tr><td>${Le(p.nom)}</td><td>${p.quantite}</td><td>${p.kcal}</td><td>${p.p}</td><td>${p.g}</td><td>${p.l}</td></tr>`).join("")}</tbody>
          <tfoot><tr><td>Total</td><td></td><td>${Math.round(te.total.kcal)}</td><td>${te.total.p}</td><td>${te.total.g}</td><td>${te.total.l}</td></tr></tfoot></table>
          <p class="oi-verdict oi-${ne.equilibre}">${Le(ne.mot)}</p>`:'<p class="oi-note">Écris ce que tu manges : l’estimation vient aussitôt, sans réseau.</p>'}
        ${te.inconnus.length?`<p class="oi-note">Je ne connais pas encore : ${te.inconnus.map(Le).join(", ")}.</p>`:""}
        <div data-zone></div>
      </div>${j()}`;const b=r.querySelector("#oi-assiette");b.addEventListener("input",()=>{o=b.value,H();const p=r.querySelector("#oi-assiette");p.focus(),p.setSelectionRange(p.value.length,p.value.length)}),Z(r.querySelector('[data-act="micro"]'),b,p=>{o=p,H()}),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async p=>{const E=p.currentTarget,P=r.querySelector("[data-zone]");E.disabled=!0,E.textContent="Je regarde…";const q=await S4(Zt(t),o,fetch,Cr(t));P.innerHTML=q?`<p class="oi-reponse">${Le(q)}</p>`:'<p class="oi-note">Aucun avis n’est revenu ; le calcul ci-dessus reste valable.</p>',E.disabled=!1,E.textContent="Avis du grand cerveau"})}function ae(){const te=pa(t),ne=gm(te,f).slice(0,30);r.innerHTML=`
      <div class="oi-carte">
        <input id="oi-jreq" class="oi-champ" type="search" placeholder="Retrouver une note (les accents ne comptent pas)" value="${Le(f)}" />
        <input id="oi-jtitre" class="oi-champ" type="text" placeholder="Titre de la découverte" value="${Le(m)}" />
        <textarea id="oi-jtexte" class="oi-champ" rows="2" placeholder="Ce que j’ai compris…">${Le(v)}</textarea>
        <div class="oi-actions">
          <button data-act="noter">Noter</button>
          <button data-act="cartes">En faire des cartes</button>
          <button data-act="exporter">📄 Exporter</button>
          ${e.sttDisponible?'<button data-act="micro" data-cible="jtexte">🎤 Dictater</button>':""}
        </div>
        <p class="oi-note">${te.length} note${te.length>1?"s":""} gardée${te.length>1?"s":""} sur cet appareil.</p>
        <div class="oi-liste">${ne.map(P=>`<div class="oi-ligne" data-id="${Le(P.id)}"><span><strong>${Le(P.titre)}</strong>
              <small> · ${new Date(P.at).toLocaleDateString("fr-FR")} · ${Le(P.origine)}</small></span>
              <button data-act="del" title="Effacer">×</button></div>
              <p class="oi-pet">${Le(P.texte)}</p>`).join("")||'<p class="oi-note">Rien pour l’instant — la prochaine découverte tient sur deux lignes.</p>'}</div>
        <div data-zone></div>
      </div>${j()}`;const b=r.querySelector("#oi-jreq");b.addEventListener("input",()=>{f=b.value,ae(),r.querySelector("#oi-jreq").focus()});const p=r.querySelector("#oi-jtitre");p.addEventListener("input",()=>m=p.value);const E=r.querySelector("#oi-jtexte");E.addEventListener("input",()=>v=E.value),r.querySelector('[data-act="noter"]').addEventListener("click",()=>{d_(t,{titre:m,texte:v,origine:"outil"}),m="",v="",ae()}),r.querySelector('[data-act="cartes"]').addEventListener("click",()=>{const P=jA(gm(pa(t),f)),q=Pe("Mon journal",P);r.querySelector("[data-zone]").insertAdjacentHTML("beforeend",`<p class="oi-reponse">${q?`${q} carte${q>1?"s":""} ajoutée${q>1?"s":""} au paquet « Mon journal » — révise-les dans le coin d’études.`:"Rien à cartographier : écris au moins une note."}</p>`)}),Z(r.querySelector('[data-act="micro"]'),E,()=>{v=E.value}),r.querySelector('[data-act="exporter"]')?.addEventListener("click",()=>{const P=$A(pa(t)),q=`nath-journal-${new Date().toISOString().slice(0,10)}.txt`;try{const k=URL.createObjectURL(new Blob([P],{type:"text/plain;charset=utf-8"})),Me=document.createElement("a");Me.href=k,Me.download=q,Me.click(),URL.revokeObjectURL(k)}catch{r.querySelector("[data-zone]").innerHTML=`<p class="oi-note">La téléchargière refuse ce navigateur — le voilà en texte clair, à copier.</p><textarea class="oi-champ" rows="6" readonly>${Le(P)}</textarea>`}}),r.querySelectorAll('[data-act="del"]').forEach(P=>{P.addEventListener("click",()=>{HA(t,P.closest(".oi-ligne")?.dataset.id??""),ae()})})}function I(){const te=A4(l);r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-tut">Ma question, mon énoncé</label>
        <textarea id="oi-tut" class="oi-champ" rows="3" placeholder="Résoudre 3x + 5 = 20 — ou recopier l’énoncé ligne par ligne.">${Le(l)}</textarea>
        <div class="oi-actions">
          <button data-act="plan">Le plan, stylo en main</button>
          ${e.sttDisponible?'<button data-act="micro" data-cible="tut">🎤 Dictater</button>':""}
          ${e.ttsDisponible?'<button data-act="lire">🔊 Me lire le plan</button>':""}
          ${ie()?'<button data-act="cereau">Faire résoudre</button>':""}
        </div>
        ${te.questions.length?`<p class="oi-note">Ce qu’on te demande : ${te.questions.map(Le).join(" · ")}</p>`:""}
        <div data-zone>${u?`<p class="oi-reponse">${Le(u)}</p>`:""}</div>
      </div>${j()}`;const ne=r.querySelector("#oi-tut");ne.addEventListener("input",()=>{l=ne.value});const b=r.querySelector("[data-zone]");r.querySelector('[data-act="plan"]').addEventListener("click",()=>{const p=Nm(l);b.innerHTML=`<p class="oi-titre2">Le plan</p><ol class="oi-pas">${p.map(E=>`<li>${Le(E)}</li>`).join("")}</ol>`}),r.querySelector('[data-act="lire"]')?.addEventListener("click",()=>{e.parler(Nm(l).join(" . "),"posee")}),Z(r.querySelector('[data-act="micro"]'),ne,p=>{l=p}),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async p=>{const E=p.currentTarget;E.disabled=!0,E.textContent="Je cherche…";const P=await w4(Zt(t),l,fetch,Cr(t));u=P,b.innerHTML=P?`<p class="oi-titre2">Résolution</p><p class="oi-reponse">${Le(P)}</p>`:'<p class="oi-note">Rien n’est revenu — le plan hors-ligne fonctionne quand même.</p>',E.disabled=!1,E.textContent="Faire résoudre"})}function U(){const te=M_(t),ne=Yo(_),b=Math.round(te.secondes/60),p=te.secondes<60?`${te.secondes} seconde${te.secondes>1?"s":""}`:`${b} minute${b>1?"s":""}`;r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">Respirer à ${_===_o?"4-7-8":"au carré"} · ${g} cycles · ${ne*g} s</p>
        <div class="oi-souffle"><i></i><span data-phase="">${h===null?"Prêt":""}</span></div>
        <div class="oi-actions">
          <button data-ry="478"${_===_o?' class="actif"':""}>4-7-8</button>
          <button data-ry="carre"${_===Im?' class="actif"':""}>Carré</button>
          <button data-cy="3"${g===3?' class="actif"':""}>3</button>
          <button data-cy="5"${g===5?' class="actif"':""}>5</button>
          <button data-cy="8"${g===8?' class="actif"':""}>8</button>
          <button data-act="go">${h===null?"Commencer":"Arrêter"}</button>
        </div>
        <p class="oi-note">${te.sessions} séance${te.sessions>1?"s":""} au repos · ${p} respirées.</p>
        <p class="oi-note">Le minuteur tourne dans l’appareil, sans son obligatoire : tu peux fermer les yeux.</p>
      </div>${j()}`,r.querySelectorAll("[data-ry]").forEach(E=>E.addEventListener("click",()=>{h===null&&(_=E.dataset.ry==="carre"?Im:_o,U())})),r.querySelectorAll("[data-cy]").forEach(E=>E.addEventListener("click",()=>{h===null&&(g=Number(E.dataset.cy)||3,U())})),r.querySelector('[data-act="go"]').addEventListener("click",()=>{if(h!==null){Q(!0);return}M=Date.now();const E=r.querySelector('[data-act="go"]');E.textContent="Arrêter",h=window.setInterval(()=>{const P=R4(Date.now()-M,_,g);if(P.fini){Q(!0);return}const q=r.querySelector("[data-phase]"),k=r.querySelector(".oi-souffle i");q&&(q.textContent=`${P.phase} · ${P.reste} · cycle ${P.cycle}/${g}`);const Me=P.phase==="Inspire"?1:P.phase==="Retiens"?.92:.55;k&&(k.style.transform=`scale(${Me})`)},200)})}function Q(te){h!==null&&window.clearInterval(h),h=null;const ne=te?Math.min(Yo(_)*g,Math.round((Date.now()-M)/1e3)):0;ne>=3&&L4(t,{secondes:ne}),U()}function pe(){r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-res">Colle ou dicte un texte</label>
        <textarea id="oi-res" class="oi-champ" rows="4" placeholder="Cours, article, message long…">${Le(c)}</textarea>
        <div class="oi-actions">
          <button data-act="puces">Résumer ici (hors-ligne)</button>
          ${e.sttDisponible?'<button data-act="micro" data-cible="res">🎤 Dictater</button>':""}
          ${e.ttsDisponible?'<button data-act="lire">🔊 Lire</button>':""}
          ${ie()?'<button data-act="cereau">Résumer avec le grand cerveau</button>':""}
          <button data-act="cartes">En faire des cartes</button>
        </div>
        <div data-zone>${d.length?`<ol class="oi-pas">${d.map(b=>`<li>${Le(b)}</li>`).join("")}</ol>`:""}</div>
      </div>${j()}`;const te=r.querySelector("#oi-res");te.addEventListener("input",()=>c=te.value);const ne=r.querySelector("[data-zone]");r.querySelector('[data-act="puces"]').addEventListener("click",()=>{d=Pm(c,5),ne.innerHTML=d.length?`<ol class="oi-pas">${d.map(b=>`<li>${Le(b)}</li>`).join("")}</ol>`:'<p class="oi-note">Trop court pour être coupé en puces — ajoute quelques phrases.</p>'}),r.querySelector('[data-act="lire"]')?.addEventListener("click",()=>{e.parler(d.length?d.join(" . "):c.slice(0,400),"posee")}),Z(r.querySelector('[data-act="micro"]'),te,b=>c=b),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async b=>{const p=b.currentTarget;p.disabled=!0,p.textContent="Je lis…";const E=await T4(Zt(t),c,fetch,Cr(t));d=E?E.split(/\n+/).map(P=>P.replace(/^[-•*]\s*/,"").trim()).filter(Boolean):[],ne.innerHTML=d.length?`<ol class="oi-pas">${d.map(P=>`<li>${Le(P)}</li>`).join("")}</ol>`:'<p class="oi-note">Rien n’est revenu — le bouton « Résumer ici » marche sans réseau.</p>',p.disabled=!1,p.textContent="Résumer avec le grand cerveau"}),r.querySelector('[data-act="cartes"]').addEventListener("click",()=>{const b=d.length?Dm(d):Dm(Pm(c,5)),p=Pe("Résumés",b);ne.insertAdjacentHTML("beforeend",`<p class="oi-reponse">${p?`${p} carte${p>1?"s":""} dans le paquet « Résumés ».`:"Résume d’abord (bouton hors-ligne) pour obtenir des cartes."}</p>`)})}function le(){const te=nd,ne=D4(te),b=T?ne.find(E=>E.nom===T)??null:null,p=b?te.filter(E=>b.ids.includes(E.id)):[];r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">L’archipel des savoirs · ${te.length} notices</p>
        <div class="oi-iles">${ne.map(E=>`<button class="oi-ile${E.nom===T?" actif":""}" data-ile="${Le(E.nom)}" style="--p:${Math.max(6,Math.round(E.part))}%"><span>${Le(E.nom)}</span><small>${E.nombre} · ${E.part}%</small></button>`).join("")}</div>
        ${b?`<p class="oi-titre2">${Le(b.nom)}</p><div class="oi-grille">${p.map(E=>`<div class="oi-puce"><strong>${Le(E.titre)}</strong><p>${Le(E.resume)}</p></div>`).join("")}</div>`:'<p class="oi-note">Choisis une île : ses notices s’ouvrent ici, même sans réseau. Les étoiles et la recherche t’attendent dans le coin d’études.</p>'}
      </div>${j()}`,r.querySelectorAll("[data-ile]").forEach(E=>E.addEventListener("click",()=>{T=E.dataset.ile??null,le()}))}function Pe(te,ne){const b=ne.filter(P=>P.verso.trim()&&P.recto.trim());if(!b.length)return 0;let p=dn(t).find(P=>P.nom===te);if(p||(p=ss(t,te)??void 0),!p)return 0;let E=0;for(const P of b)ca(t,p.id,P.verso,P.recto)&&E++;return E}function Z(te,ne,b){const p=te;!p||!e.sttDisponible||p.addEventListener("click",()=>{p.disabled=!0,p.textContent="🎤 Je t’écoute…",e.ecouter(E=>{const P=Yv(E),q=Jv(P?`${P.de}, ${P.a}`:E);ne.value=q,b(q),p.disabled=!1,p.textContent="🎤 Dictater"})})}const oe=[["wolof","Wolof"],["nouchi","Nouchi"],["anglais","Anglais"],["espagnol","Espagnol"],["arabe","Arabe"],["chinois","Chinois"]];function fe(){const te=ma(t);r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">&#128483;&#65039; Parler ta langue</p>
        <p class="oi-note">Traduire un mot, une petite phrase — ici, même sans réseau. Ce que tu apprends ici reste sur ton appareil et voyage avec ton coffre.</p>
        <div class="oi-actions">
          ${oe.map(([E,P])=>`<button data-lg="${E}"${E===A?' class="actif"':""}>${P}</button>`).join("")}
        </div>
        <label class="oi-libelle" for="oi-lg-mot">Le mot ou la phrase, en français</label>
        <input id="oi-lg-mot" class="oi-champ" type="text" placeholder="ex. merci, de l’eau, ma maison" value="${Le(R)}" />
        <div class="oi-actions">
          <button data-act="dire">Traduire</button>
          ${e.ttsDisponible?'<button data-act="lire">&#128266; Me le dire</button>':""}
        </div>
        <div data-res>${x?`<p class="oi-reponse">${Le(x.resultat??"Je ne sais pas encore ce mot.")}</p>${x.manques.length?`<p class="oi-note">Il me manque : ${x.manques.map(Le).join(", ")} — donne-le moi en dessous.</p>`:""}`:""}</div>
        <p class="oi-titre2">Lui apprendre un mot</p>
        <input id="oi-lg-de" class="oi-champ" type="text" placeholder="en français (ex. voiture)" value="${Le(C)}" />
        <input id="oi-lg-a" class="oi-champ" type="text" placeholder="dans ta langue (ex. gaara)" value="${Le(w)}" />
        <div class="oi-actions"><button data-act="donner">Ajouter au carnet</button></div>
        ${B?`<p class="oi-note">${Le(B)}</p>`:""}
        <p class="oi-note">${te.length} mot${te.length>1?"s":""} appris${te.length>1?"s":""} de toi, gardés sur cet appareil.</p>
      </div>${j()}`;const ne=r.querySelector("#oi-lg-mot");ne.addEventListener("input",()=>R=ne.value);const b=r.querySelector("#oi-lg-de");b.addEventListener("input",()=>C=b.value);const p=r.querySelector("#oi-lg-a");p.addEventListener("input",()=>w=p.value),r.querySelectorAll("[data-lg]").forEach(E=>E.addEventListener("click",()=>{A=E.dataset.lg??"wolof",x=null,fe()})),r.querySelector('[data-act="dire"]').addEventListener("click",()=>{x=QA(R,A,t),fe()}),r.querySelector('[data-act="lire"]')?.addEventListener("click",()=>{x?.resultat&&e.parler(x.resultat,"posee")}),r.querySelector('[data-act="donner"]').addEventListener("click",()=>{const E=ma(t).length;ZA(t,C,w,A);const P=ma(t).length,q=C.trim();P>E?B=`C’est noté : « ${q} » se dit « ${w.trim()} ». Merci.`:q&&w.trim()?B=`Ta parole remplace l’ancienne pour « ${q} ».`:B="Il me faut le mot et sa traduction pour l’apprendre.",C="",w="",fe()})}function xe(){const te=dn(t);!y&&te.length&&(y=te[0].id);const ne=te.find(q=>q.id===y)??null,b=J??[],p=$!==null,E=ne?`<div class="oi-actions">${te.map(q=>`<button data-pq="${Le(q.id)}"${q.id===y?' class="actif"':""}>${Le(q.nom)} (${q.fiches.length})</button>`).join("")}</div>`:"",P=b.length?`<p class="oi-titre2">Ton sujet · ${b.length} cartes · vise ${n4(b.length)} s</p><div class="oi-liste">${b.map((q,k)=>`<div class="oi-ligne"><span><strong>${k+1}. ${Le(q.verso)}</strong></span><button data-mark="${Le(q.id)}"${G[q.id]?' class="actif"':""}>${G[q.id]?"Je savais":"À revoir"}</button></div>`+(p?`<p class="oi-pet">${Le(q.recto)}</p>`:"")).join("")}</div><div class="oi-actions"><button data-act="corriger">Voir mon résultat</button><button data-act="nouveau">Un autre sujet</button></div>`+(p?`<p class="oi-reponse">${$.corrects}/${$.total} · ${Math.round($.score*100)} % — ${Le(i4($.score))}</p>`:""):"";r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">&#128221; L’examen blanc</p>
        <p class="oi-note">Avant le vrai jour, teste-toi dans les mêmes conditions — ici, même sans réseau. Choisis un paquet, compose un sujet, souviens-toi, puis dis ce que tu savais.</p>
        ${te.length?E:'<p class="oi-note">Aucun paquet encore. Crée des fiches dans le coin d’études, ou envoie-en depuis le résumé.</p>'}
        ${ne&&!b.length?`<div class="oi-actions"><button data-act="composer"${ne.fiches.length<2?" disabled":""}>Composer un sujet (${Math.min(10,ne.fiches.length)} cartes)</button></div>${ne.fiches.length<2?'<p class="oi-note">Il faut au moins deux cartes dans ce paquet.</p>':""}`:""}
        ${P}
      </div>${j()}`,r.querySelectorAll("[data-pq]").forEach(q=>q.addEventListener("click",()=>{y=q.dataset.pq??y,J=null,G={},$=null,xe()})),r.querySelector('[data-act="composer"]')?.addEventListener("click",()=>{ne&&(D=`${ne.id}-${Date.now()}`,J=_m(ne.fiches,10,D),G={},$=null,xe())}),r.querySelector('[data-act="nouveau"]')?.addEventListener("click",()=>{ne&&(D=`${ne.id}-${Date.now()}`,J=_m(ne.fiches,10,D),G={},$=null,xe())}),r.querySelectorAll("[data-mark]").forEach(q=>q.addEventListener("click",()=>{const k=q.dataset.mark??"";G={...G,[k]:!G[k]},xe()})),r.querySelector('[data-act="corriger"]')?.addEventListener("click",()=>{b.length&&($=t4(b.map(q=>({id:q.id,juste:!!G[q.id]}))),xe())})}function de(){const te=Am(t),ne=navigator.languages?.length?Array.from(navigator.languages):[navigator.language??""],b=Cm(te,ne),p=ym(bm(Po,b));p.some(ve=>ve.id===ee)||(ee=p[0]?.id??"");const E=xm(ee)??p[0];if(!E){r.innerHTML='<div class="oi-carte"><p class="oi-note">Aucun pack métier pour l’instant.</p></div>';return}const P=Em(E.id,t),q=Mm(E,P),k=r4(E,P),Me=s4(E,P),ge=E.taches.map((ve,_e)=>`<p class="oi-pet"><strong>${_e+1}. ${Le(ve.titre)}</strong> — ${ve.gestes.map(Le).join(", ")}</p>`).join(""),Ue=p.map(ve=>`<button data-mt="${Le(ve.id)}"${ve.id===E.id?' class="actif"':""}>${ve.emoji} ${Le(ve.nom)}</button>`).join(""),We=[`<button data-pays=""${b===""?' class="actif"':""}>Tous</button>`,...Tf.map(ve=>`<button data-pays="${Le(ve.code)}"${b===ve.code?' class="actif"':""}>${ve.emoji} ${Le(ve.nom)}</button>`)].join(""),se=b?v_(b):null,be=se?`<p class="oi-titre2">Urgences ${se.emoji} ${Le(se.nom)}</p>
         <p class="oi-pet">Police ${Le(se.urgence.police)} · Pompiers ${Le(se.urgence.pompiers)} · SAMU ${Le(se.urgence.samu)}${se.urgence.commun?" · Numéro commun "+Le(se.urgence.commun):""}</p>
         <p class="oi-pet">${Le(o4)}</p>`:"",Ne=te.crise?"✓ Mode crise activé":"Mode crise (priorise survie & approvisionnement)";r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">&#129520; Un métier, un jour, un geste</p>
        <p class="oi-note">Apprends le métier comme on l’apprend sur le terrain : aujourd’hui une tâche, un mot exact, un piège à éviter. Hors-ligne, sans compte ; ta progression voyage avec le coffre.</p>
        <p class="oi-titre2">Pays</p>
        <div class="oi-actions">${We}</div>
        <div class="oi-actions"><button data-act="crise"${te.crise?' class="actif"':""}>${Ne}</button></div>
        ${be}
        <p class="oi-titre2">Le métier</p>
        <div class="oi-actions">${Ue}</div>
        <div class="oi-actions"><button data-act="toutes">${K?"⤺ Revenir au jour":"☰ Toutes les tâches"}</button></div>
        <p class="oi-note">${Le(E.resume)}</p>
        ${K?`<p class="oi-titre2">Tout le chantier — ${E.taches.length} tâches</p>${ge}`:`<p class="oi-titre2">Jour ${P+1} — la tâche du jour</p>
        <p><strong>${Le(q.titre)}</strong></p>
        <ul class="oi-liste">${q.gestes.map(ve=>`<li>• ${Le(ve)}</li>`).join("")}</ul>
        <p class="oi-titre2">Le mot juste</p>
        <p><strong>${Le(k.mot)}</strong> — ${Le(k.sens)}</p>
        <p class="oi-titre2">Le piège du jour</p>
        <p>${Le(Me.enoncé)}</p>
        <p class="oi-pet">Pour l’éviter : ${Le(Me.eviter)}</p>
        <div class="oi-actions"><button data-act="demain">Jour suivant</button></div>`}
      </div>${j()}`,r.querySelectorAll("[data-mt]").forEach(ve=>ve.addEventListener("click",()=>{ee=ve.dataset.mt??ee,de()})),r.querySelectorAll("[data-pays]").forEach(ve=>ve.addEventListener("click",()=>{const _e=ve.dataset.pays??"";wm(t,{...te,pays:_e,choixExplicite:!0}),de()})),r.querySelector('[data-act="crise"]')?.addEventListener("click",()=>{wm(t,{...te,crise:!te.crise}),de()}),r.querySelector('[data-act="demain"]')?.addEventListener("click",()=>{a4(E.id,t),de()}),r.querySelector('[data-act="toutes"]')?.addEventListener("click",()=>{K=!K,de()})}function Oe(){r.innerHTML=`
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
      </div>${j()}`;const te=r.querySelector("#oi-coffre"),ne=r.querySelector("[data-zone]"),b=p=>{ne.innerHTML=`<p class="oi-note">${Le(p)}</p>`};r.querySelector('[data-act="emporter"]')?.addEventListener("click",()=>{te.value=YA(t),b("Tes affaires tiennent dans ce texte. Copie-le et garde-le pour toi — personne d’autre n’y lit quoi que ce soit.")}),r.querySelector('[data-act="copier"]')?.addEventListener("click",async()=>{if(!te.value.trim()){b("D’abord « Emporter mes affaires », puis copie.");return}try{await navigator.clipboard.writeText(te.value),b("Copié. Colle-le là où tu veux le garder.")}catch{te.focus(),te.select(),b("Tout est sélectionné — copie-le à la main.")}}),r.querySelector('[data-act="reposer"]')?.addEventListener("click",()=>{const p=KA(t,te.value);b(p>0?`${p} affaire${p>1?"s":""} remise${p>1?"s":""} en place. Recharge la page pour tout retrouver.`:"Rien à reposer ici : ce texte n’est pas un coffre valide.")})}const L={jour:Ae,flamme:V,frigo:O,assiette:H,journal:ae,tuteur:I,souffle:U,resume:pe,carte:le,langues:fe,examen:xe,metiers:de,coffre:Oe};function Ye(){const te=i.querySelector(".outils-onglets"),ne=Object.keys(Om),b=Fm(t,ne),{tete:p,reste:E}=F4(ne,b),P=dn(t).reduce((k,Me)=>k+jo(Me,Date.now()).aRevoir,0),q=k=>Om[k]+(k==="journal"?e_(P):"");te.innerHTML=[...p,...E].map(k=>`<button data-ot="${k}"${k===s?' class="actif"':""}>${Le(q(k))}<i data-fav="${k}" title="Mettre en favori — ou le retirer" aria-hidden="true">${ye(k)?"★":"☆"}</i></button>`).join(""),te.querySelectorAll("button[data-ot]").forEach(k=>{k.addEventListener("click",()=>Je(k.dataset.ot??"jour"))}),te.querySelectorAll("[data-fav]").forEach(k=>{k.addEventListener("click",Me=>{Me.stopPropagation(),me(k.dataset.fav??"")})})}function Je(te){s=te,Ye(),h!==null&&te!=="souffle"&&Q(!1),r.innerHTML="",gA(t,te),L[te]()}return Ye(),n.addEventListener("click",()=>{i.hidden=!i.hidden,i.hidden?$o("outils"):(Kv("outils"),Je(s))}),i.querySelector(".outils-fermer").addEventListener("click",()=>{h!==null&&Q(!1),i.hidden=!0,$o("outils")}),window.addEventListener("online",()=>{i.hidden||Je(s)}),window.addEventListener("offline",()=>{i.hidden||Je(s)}),n}function O4(t,e){return{eclair:(t==="tension"?.45:t==="tristesse"?.12:0)*(.3+.7*e),filer:e*.4}}function B4(t,e){let n=0,i=.85,r=.15,s=!1,a="le ciel respire";t===0||t===1?(i=.95,a=t===0?"ciel dégagé":"à peine voilé"):t===2?(i=.8,a="nuages passagers"):t===3?(i=.55,r=.25,a="ciel couvert"):t===45||t===48?(i=.35,r=.1,n=.08,a="brouillard"):t>=51&&t<=57?(n=.35,i=.45,a="bruine"):t>=61&&t<=67?(n=t===65||t===67?.8:.55,i=.4,a="pluie"):t>=71&&t<=77?(n=.45,i=.65,a="neige"):t>=80&&t<=82?(n=t===82?.9:.6,i=.4,r=.3,a="averses"):t===85||t===86?(n=.5,i=.6,a="neiges"):t>=95&&t<=99&&(s=!0,n=.9,i=.3,r=.7,a="orage");const o=Math.min(1,r+Math.min(.4,Math.max(0,e)/100));return{pluie:n,turbulence:o,luminosite:i,orage:s,libelle:a}}async function k4(t,e,n){try{const i="https://api.open-meteo.com/v1/forecast?latitude="+encodeURIComponent(String(t))+"&longitude="+encodeURIComponent(String(e))+"&current=weather_code,wind_speed_10m",r=await n(i);if(!r.ok)return null;const s=await r.json(),a=s?.current?.weather_code;if(typeof a!="number")return null;const o=typeof s.current.wind_speed_10m=="number"?s.current.wind_speed_10m:0;return B4(a,o)}catch{return null}}async function q4(t,e){if(!t)return null;try{const n=await e(`${t.replace(/\/+$/,"")}/lieu`,{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"});if(!n.ok)return null;const i=await n.json();if(!i?.lieu)return null;const r=Number(i.lieu.latitude),s=Number(i.lieu.longitude);return!Number.isFinite(r)||!Number.isFinite(s)?null:{latitude:r,longitude:s}}catch{return null}}function z4(t){const e=t.match(/assets\/index-[\w-]+\.js/);return e?e[0].split("/").pop()??null:null}function V4(t,e){return!!t&&t!==e}const E_="nath.mise-a-jour.ecartee";function G4(t,e){try{return t.getItem(E_)===e}catch{return!1}}function H4(t,e){try{t.setItem(E_,e)}catch{}}async function j4(t,e){try{const n=e.includes("?")?"&":"?",i=await t(`${e}${n}revoir=${Date.now()}`,{cache:"no-store"});return i.ok?z4(await i.text()):null}catch{return null}}function $4(){return import.meta.url.split("/").pop()?.split("?")[0]??""}function W4(t,e,n=6e4){return t===0||e-t>=n}function X4(t,e){const n=document.createElement("div");n.className="maj-puce visible",n.setAttribute("role","status"),n.setAttribute("aria-live","polite");const i=()=>{H4(e,t),n.remove()};n.addEventListener("keydown",a=>{a.key==="Escape"&&i()});const r=document.createElement("button");r.type="button",r.className="maj-agir",r.textContent="Nouvelle version prête — recharger",r.title="Rien ne se recharge tout seul : appuie quand tu veux changer de version",r.addEventListener("click",()=>window.location.reload());const s=document.createElement("button");s.type="button",s.className="maj-refus",s.textContent="×",s.setAttribute("aria-label","Ne pas recharger maintenant"),s.title="Pour cette version-là, on n’y revient plus",s.addEventListener("click",i),n.append(r,s),document.body.append(n)}function Y4(t=fetch){if(typeof document>"u")return;const e=window.location.href.split("?")[0],n=$4();if(!n)return;const i={getItem:o=>{try{return sessionStorage.getItem(o)}catch{return null}},setItem:(o,l)=>{try{sessionStorage.setItem(o,l)}catch{}}};let r=!1,s=0;const a=async()=>{if(r)return;const o=Date.now();if(!W4(s,o))return;s=o;const l=await j4(t,e);!V4(l,n)||!l||G4(i,l)||(r=!0,X4(l,i))};window.setTimeout(()=>{a()},8e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&a()})}J_(location.search)?Q_(document.body):J4();function J4(){const t=document.getElementById("scene"),e=py(t),n=my();n.seed=localStorage.getItem("nuage.seed")??crypto.randomUUID(),localStorage.setItem("nuage.seed",n.seed);const i={cameraOn:!1,micOn:!1};xy(w=>{n.breath=Math.max(n.breath,w)}).then(w=>{i.micOn=w});const r=document.getElementById("cam"),s=gE(),a=new pE(r,localStorage,w=>{n.emotion=s(mE(w))},w=>{i.cameraOn=w,r.classList.toggle("video-actif",w)}),o=typeof navigator<"u"&&!!navigator.mediaDevices?.getUserMedia,l=document.getElementById("etat"),u=yE(n.seed);let c=[.5,.5];ME(t,(w,B)=>{c=[w,B]}),EE(w=>{n.breath=Math.max(n.breath,Math.abs(w))}),WT(()=>({emotion:n.emotion,breath:n.breath,timeOfDay:n.timeOfDay,seed:u.musiqueSeed,bpm:n.bpm,cameraOn:i.cameraOn,micOn:i.micOn}),{cameraDisponible:o,estOuverte:()=>a.ouverte,basculer:()=>a.basculer(),changerFace:()=>a.basculerFace(),consentement:oE}),WA(localStorage),U4(localStorage),setInterval(()=>{const w=O4(n.emotion,Oh(n).night);(n.cielReel?.orage&&Math.random()<.4||Math.random()<w.eclair)&&e.eclair(),Math.random()<w.filer&&e.filer(.08+Math.random()*.75,.7+Math.random()*.25)},15e3);const d=document.createElement("button");d.className="ciel-btn",d.type="button",d.textContent="⛅",d.title="Le ciel réel — laisser respirer au nuage le temps de chez toi",d.setAttribute("aria-label","Laisser au nuage le temps réel de chez toi"),document.body.append(d);let f=0,m=!1;async function v(w,B){const x=await k4(w,B,fetch);x&&(n.cielReel=x,d.classList.add("actif"),d.title=`Dehors, ${x.libelle} — le nuage respire avec lui`)}d.addEventListener("click",()=>{if(f){window.clearInterval(f),f=0,m=!1,n.cielReel=null,d.classList.remove("actif"),d.title="Le ciel réel — laisser respirer au nuage le temps de chez toi";return}if(m=!0,!navigator.geolocation){_();return}navigator.geolocation.getCurrentPosition(w=>{m&&(v(w.coords.latitude,w.coords.longitude),f=window.setInterval(()=>{v(w.coords.latitude,w.coords.longitude)},6e5))},()=>{_()},{enableHighAccuracy:!1,timeout:1e4,maximumAge:6e5})});async function _(){const w=await q4(Zt(localStorage),fetch);if(!w){d.classList.remove("actif");return}m&&(await v(w.latitude,w.longitude),window.clearInterval(f),f=window.setInterval(()=>{v(w.latitude,w.longitude)},6e5))}let g=!1;const h=document.createElement("button");h.className="musique-btn",h.type="button",h.setAttribute("aria-label","La musique de l’aura — l’endormir ou la réveiller"),document.body.append(h);function M(){const w=wo(localStorage);h.textContent=w?"🔇":"🎵",h.classList.toggle("eteinte",w),h.classList.toggle("actif",!w&&g),h.title=w?"La musique dort — appuie pour l’éveiller":"La musique de l’aura — appuie pour l’endormir",h.setAttribute("aria-pressed",String(!w))}h.addEventListener("click",()=>{PE(localStorage)?Xp():(LE(),g||(g=Wp(u.musiqueSeed))),M()}),wo(localStorage)&&Xp(),M(),t.addEventListener("pointerdown",w=>{const B=t.getBoundingClientRect();e.tap((w.clientX-B.left)/B.width,1-(w.clientY-B.top)/B.height),g||(g=Wp(u.musiqueSeed),M())});const T=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),A=[];setInterval(()=>{const w=SE(r,T);w!=null&&(A.push(w),A.length>80&&A.shift(),n.bpm=bE(A,8))},125);let R=performance.now();function C(w){const B=Math.min(.05,(w-R)/1e3);R=w;const x=new Date;if(n.timeOfDay=(x.getHours()+x.getMinutes()/60)/24,n.breath=Math.max(0,n.breath-B*.5),n.bpm){const y=Math.sin(Date.now()/(6e4/n.bpm)*2*Math.PI);n.breath=Math.max(n.breath,.08*y+.08)}if(pA()){requestAnimationFrame(C);return}e.apply(Oh(n),c),e.setBpm(n.bpm),e.frame(B),CE(n.emotion),RE(n.breath),l.textContent=g?`aura : ${u.nom} · humeur : ${n.emotion} · souffle : ${n.breath*100|0}% · pouls : ${n.bpm?Math.round(n.bpm):"—"}`:wo(localStorage)?`aura : ${u.nom} · la musique dort — 🎵 pour la réveiller`:`aura : ${u.nom} · touche le ciel pour éveiller la musique`,requestAnimationFrame(C)}requestAnimationFrame(C),console.log("Nath Assist v1-alpha — ICF·Future by Nath-Tech"),Y4(fetch)}
