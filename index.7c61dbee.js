!function(){var e=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,s=/\b[^0-9\W]+\b/g,a=document.querySelector(".js-contact-form"),i=document.querySelector(".js-contact-name-input"),t=document.querySelector(".js-contact-email-input"),l=document.querySelector(".js-contact-button"),c=document.querySelector(".js-contact-name-label"),d=document.querySelector(".js-contact-email-label");function v(){t.value.match(e)&&i.value.match(s)?l.disabled=!1:l.disabled=!0}a.addEventListener("submit",(function(e){e.preventDefault();var s=new FormData(e.currentTarget);console.log(s),e.currentTarget.reset(),l.disabled=!0,i.classList.remove("valid"),i.classList.remove("invalid"),c.classList.remove("valid"),c.classList.remove("invalid"),t.classList.remove("valid"),t.classList.remove("invalid"),d.classList.remove("valid"),d.classList.remove("invalid")})),i.addEventListener("input",(function(){i.classList.remove("valid"),i.classList.remove("invalid"),c.classList.remove("valid"),c.classList.remove("invalid"),i.value.match(s)?(i.classList.add("valid"),c.classList.add("valid")):(i.classList.add("invalid"),c.classList.add("invalid"));v()})),t.addEventListener("input",(function(){t.classList.remove("valid"),t.classList.remove("invalid"),d.classList.remove("valid"),d.classList.remove("invalid"),t.value.match(e)?(t.classList.add("valid"),d.classList.add("valid")):(t.classList.add("invalid"),d.classList.add("invalid"));v()})),i.addEventListener("input",(function(){""===i.value&&(i.classList.remove("valid"),i.classList.remove("invalid"),c.classList.remove("valid"),c.classList.remove("invalid"))})),t.addEventListener("input",(function(){""===t.value&&(t.classList.remove("valid"),t.classList.remove("invalid"),d.classList.remove("valid"),d.classList.remove("invalid"))}))}();
//# sourceMappingURL=index.7c61dbee.js.map