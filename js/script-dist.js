owl=$(".slides"),$(document).ready(function(){owl.owlCarousel({nav:!0,items:1,loop:!0,dots:!0})});var bigmap=document.getElementById("bigmap"),smallmap=document.getElementById("smallmap"),form=document.getElementById("write-to-us"),success=document.getElementById("item-added"),openFormBtn=document.getElementById("open-form"),tabsNav=document.querySelector(".tabs-nav"),maph=document.querySelector(".map-hidden");maph&&setTimeout(function(){maph.classList.remove("map-hidden")},1e3),smallmap&&smallmap.addEventListener("mouseover",function(){bigmap.style.display="block"}),openFormBtn&&openFormBtn.addEventListener("click",function(e){e.preventDefault(),form.style.display="block"});for(var i=0;document.getElementsByClassName("btn-close")[i];)document.getElementsByClassName("btn-close")[i].addEventListener("click",function(e){e.preventDefault();var t=this,n=t.parentNode;n.classList.contains("zoomIn")?(n.classList.remove("zoomIn"),n.classList.add("zoomOut"),setTimeout(function(){n.classList.remove("animated","zoomOut")},500)):n.style.display="none"}),i++;if(i=0,tabsNav)for(;tabsNav.children[i];)tabsNav.children[i].children[0].addEventListener("click",function(e){e.preventDefault();for(var t=document.querySelector(".tabs-nav"),n=document.querySelector(".tabs-body"),a=0;t.children[a];)t.children[a].classList.remove("active"),n.children[a].classList.remove("active"),a++;for(this.parentNode.classList.add("active"),a=0;t.children[a]&&!t.children[a].classList.contains("active");)a++;n.children[a].classList.add("active")}),i++;for(i=0;document.getElementsByClassName("btn-buy")[i];)document.getElementsByClassName("btn-buy")[i].addEventListener("click",function(e){e.preventDefault(),itemAdded.classList.add("animated","zoomIn"),document.getElementsByClassName("info-cart")[0].style.backgroundColor="#ee3643",cartCounter.innerHTML=parseInt(cartCounter.innerHTML)+1}),i++;for(i=0;document.getElementsByClassName("btn-bookmark")[i];)document.getElementsByClassName("btn-bookmark")[i].addEventListener("click",function(e){e.preventDefault(),bookmarkCounter.innerHTML=parseInt(bookmarkCounter.innerHTML)+1}),i++;
