import"./assets/modulepreload-polyfill-3cfb730f.js";const r=document.querySelector(".feedback-form");let a={email:"",message:""};const s=()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e!==null){a=e;for(const t in e)e.hasOwnProperty(t)&&(r.elements[t].value=e[t])}};s();const l=e=>{const t=e.target.name,o=e.target.value;a[t]=o,localStorage.setItem("feedback-form-state",JSON.stringify(a))},m=e=>{e.preventDefault();const t=a.email.trim(),o=a.message.trim();if(t===""||o===""){alert("Fill please all fields");return}console.log(a),e.target.reset(),localStorage.removeItem("feedback-form-state"),a={email:"",message:""}};r.addEventListener("input",l);r.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers2.js.map