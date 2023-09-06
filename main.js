(()=>{"use strict";class e{constructor(e){this.title=e,this.list=[]}add(e){this.list.push(e)}}let t=0,c=[];class o{constructor(e,t,c,o,n=!1){this.title=e,this.desc=t,this.dueDate=c,this.priority=o,this.completed=n}set isCompleted(e){this.completed=e}}const n=function(){document.querySelector(".customProjForm").classList.remove("active"),document.querySelector(".projectName").value=""},s=function(e){const o=document.querySelector("#projectName"),n=c[e].title;o.textContent=n,t=e};let r=new e("Inbox");c.push(r),console.log(c),function(e,t,c){const o=document.querySelector(".addTask"),n=document.querySelector(".closeBtn"),s=document.querySelector(".taskForm");o.addEventListener("click",(()=>{s.classList.add("active")})),n.addEventListener("click",(()=>{s.classList.remove("active")}))}(),function(){const t=document.querySelector(".customProjBtn"),o=document.querySelector("button.close"),r=document.querySelector("button.add");t.addEventListener("click",(()=>{document.querySelector(".customProjForm").classList.add("active")})),o.addEventListener("click",(()=>{n()})),r.addEventListener("click",(t=>{t.preventDefault(),function(t){const o=document.querySelectorAll("[data-project]").length,n=document.querySelector(".customProjList"),r=document.querySelector("#projForm"),d=document.createElement("div"),l=document.createElement("button"),a=document.createElement("p");d.classList.add("customProj"),d.setAttribute("data-project",`${o}`),a.textContent=t;const u=new e(t);c.push(u),console.log(c),l.setAttribute("data-btn",`${o}`),l.textContent="X",d.appendChild(a),d.appendChild(l),a.addEventListener("click",(()=>{s(d.getAttribute("data-project"))})),l.addEventListener("click",(()=>{d.remove();let e=document.querySelectorAll("[data-project]");c.splice(o,1),console.log(c);for(let t=0;t<e.length;t++)e[t].setAttribute("data-project",t)})),n.insertBefore(d,r),console.log(c)}(document.querySelector(".projectName").value),n()}))}(),document.querySelector("#addTask").addEventListener("click",(()=>{!function(){let e=c[t],n=document.querySelector("#taskTitle").value,s=document.querySelector("#taskDesc").value,r=document.querySelector("#taskDate").value,d=document.querySelector("#taskPrior").value;""===r&&(r="No date");const l=new o(n,s,r,d),a=document.querySelector(".taskForm");var u;e.list.push(l),a.classList.remove("active"),console.log(e),u=e.list[0],document.querySelector("section").appendChild(function(e){const t=document.createElement("div");t.classList.add("task");const c=document.createElement("input");c.setAttribute("type","checkbox");const o=document.createElement("div"),n=document.createElement("div");n.classList.add("titlenpri");const s=document.createElement("span");s.classList.add("title"),s.textContent=e.title;const r=document.createElement("span");r.classList.add("prior");const d=document.createElement("img");d.src="images/star-fill.svg";do{r.appendChild(d)}while(e.priority<0);const l=document.createElement("span");l.classList.add("desc"),l.textContent=e.desc;const a=document.createElement("span");return a.classList.add("dueDate"),a.textContent=e.dueDate,n.appendChild(s),n.appendChild(r),o.appendChild(n),o.appendChild(l),o.appendChild(a),t.appendChild(c),t.appendChild(o),t}(u)),s="",r="",d=""}(),document.querySelector("#taskTitle").value="",document.querySelector("#taskDesc").value="",document.querySelector("#taskDate").value="",document.querySelector("#taskPrior").value="0"})),document.querySelector("#inbox").addEventListener("click",(()=>{s(0)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEIsTUFBTWtFLEVBQVVyRCxTQUFTZ0MsY0FBYyxPQUN2Q3FCLEVBQVFDLElBQU0sdUJBR2QsR0FDSVAsRUFBTVYsWUFBWWdCLFNBQ2RqRSxFQUFLTyxTQUpMLEdBTVIsTUFBTUYsRUFBT08sU0FBU2dDLGNBQWMsUUFDcEN2QyxFQUFLUyxVQUFVZixJQUFJLFFBQ25CTSxFQUFLZ0IsWUFBY3JCLEVBQUtLLEtBRXhCLE1BQU1xRCxFQUFPOUMsU0FBU2dDLGNBQWMsUUFhcEMsT0FaQWMsRUFBSzVDLFVBQVVmLElBQUksV0FDbkIyRCxFQUFLckMsWUFBY3JCLEVBQUtNLFFBRXhCMEQsRUFBS2YsWUFBWXJELEdBQ2pCb0UsRUFBS2YsWUFBWVUsR0FFakJJLEVBQUtkLFlBQVllLEdBQ2pCRCxFQUFLZCxZQUFZNUMsR0FDakIwRCxFQUFLZCxZQUFZUyxHQUNqQkcsRUFBUVosWUFBWWEsR0FDcEJELEVBQVFaLFlBQVljLEdBRWJGLENBQ1gsQ0FJd0JNLENBQVduRSxJQTlFL0JLLEVBQU8sR0FDUHFELEVBQU8sR0FDUEMsRUFBUSxFQUNaLENBWVFTLEdBQ0F4RCxTQUFTQyxjQUFjLGNBQWNHLE1BQVEsR0FDN0NKLFNBQVNDLGNBQWMsYUFBYUcsTUFBUSxHQUM1Q0osU0FBU0MsY0FBYyxhQUFhRyxNQUFRLEdBQzVDSixTQUFTQyxjQUFjLGNBQWNHLE1BQVEsR0FBRyxJQWJ0Q0osU0FBU0MsY0FBYyxVQUMvQmtCLGlCQUFpQixTQUFTLEtBQzVCZCxFQUFjLEVBQUUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCh0YXNrKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LnB1c2godGFzayk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5sZXQgY3VycmVudCA9IDA7XHJcbmxldCBwcm9qZWN0c0xpc3Q9IFtdO1xyXG5mdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UocHJvamVjdHMpIHtcclxuICAgIGlmKHByb2plY3RzLmxlbmd0aCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBwcm9qZWN0c2AsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RMUyhpbmRleCkge1xyXG4gICAgbGV0IHByb2ogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcm9qZWN0c2ApKTtcclxuICAgIHByb2ouc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHByb2plY3RzTGlzdCA9IHByb2o7XHJcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJvamVjdHNgLCBKU09OLnN0cmluZ2lmeShwcm9qKSk7XHJcbiAgICBwb3B1bGF0ZVN0b3JhZ2UocHJvamVjdHNMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV0cml2ZVN0b3JhZ2UoKSB7XHJcbiAgICBsZXQgcHJvaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByb2plY3RzYCkpO1xyXG4gICAgaWYocHJvaiAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlmKHByb2oubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IHByb2oubGVuZ3RoIC0gMTsgIGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb2pbaV0udGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tzID0gcHJvaltpXS5saXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRhc2tzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5hZGQodGFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1N0b3JhZ2UoKSB7XHJcbiAgICAvLyByZXRyaXZlU3RvcmFnZSgpXHJcblxyXG4gICAgY29uc3QgcHJvakxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1c3RvbVByb2pMaXN0XCIpO1xyXG4gICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VzdG9tUHJvakZvcm1cIik7XHJcbiAgICBsZXQgcHJvaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByb2plY3RzYCkpO1xyXG5cclxuICAgIGlmKHByb2oubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qLmxlbmd0aDsgaSsrKSB7ICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb2pbaV0udGl0bGU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tUHJvalwiKTtcclxuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgYCR7aX1gKTtcclxuICAgICAgICAgICAgICAgIGRpdi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJ0blwiLCBgJHtpfWApO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RMUyhpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBwcm9qTGlzdC5pbnNlcnRCZWZvcmUoZGl2LCBhZGRGb3JtKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgcG9wdWxhdGVTdG9yYWdlLCByZXRyaXZlU3RvcmFnZSwgcHJvamVjdHNMaXN0LCBzaG93U3RvcmFnZSwgZGVsZXRlUHJvamVjdExTLCBjdXJyZW50IH07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGlzQ29tcGxldGVkKGJvb2wpIHtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGJvb2w7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcclxuaW1wb3J0IHsgcG9wdWxhdGVTdG9yYWdlLCByZXRyaXZlU3RvcmFnZSwgcHJvamVjdHNMaXN0LCBkZWxldGVQcm9qZWN0TFMsIHNob3dTdG9yYWdlLCBjdXJyZW50IH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlLmpzXCI7XHJcblxyXG5jb25zdCBhZGRUYXNrRm9ybU9wZW5DbG9zZSA9IGZ1bmN0aW9uKG9wZW4sIGNsb3NlLCBmb3JtKSB7XHJcbiAgICBjb25zdCBvcGVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcGVuKTtcclxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbG9zZSk7XHJcbiAgICBjb25zdCBmb3JtQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihmb3JtKTtcclxuXHJcbiAgICAvL29wZW4gZm9ybSBmb3IgYWRkaW5nIHRhc2tcclxuICAgIG9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBmb3JtQm94LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICAgIC8vY2xvc2UgZm9ybSBmb3IgYWRkaW5nIHRhc2tcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZm9ybUJveC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG4vL2Nsb3NlIHByb2plY3QgYWRkIGZvcm1cclxuY29uc3QgY2xvc2VGb3JtID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b21Qcm9qRm9ybVwiKTtcclxuICAgIGFkZEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuXHJcbiAgICBsZXQgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdE5hbWVcIik7XHJcbiAgICBpbnB1dEZpZWxkLnZhbHVlID0gXCJcIlxyXG59XHJcblxyXG4vL29wZW4gcHJvamVjdCBhZGQgZm9ybVxyXG5jb25zdCBvcGVuRm9ybSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VzdG9tUHJvakZvcm1cIik7XHJcbiAgICBhZGRGb3JtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbi8vZ2V0IG51bWJlciBvZiBwcm9qZWN0c1xyXG5jb25zdCBnZXROZXdEYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBhbGxQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXByb2plY3RdXCIpOyBcclxuICAgIHJldHVybiBhbGxQcm9qLmxlbmd0aDtcclxufVxyXG5cclxuLy9hZGQgcHJvamVjdCB0byB0aGUgbGlzdFxyXG5jb25zdCBhZGRQcm9qZWN0ID0gZnVuY3Rpb24odGl0bGUpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gZ2V0TmV3RGF0YSgpO1xyXG4gICAgY29uc3QgcHJvakxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1c3RvbVByb2pMaXN0XCIpO1xyXG4gICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvakZvcm1cIik7XHJcblxyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjdXN0b21Qcm9qXCIpO1xyXG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBgJHtpbmRleH1gKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xyXG4gICAgcHJvamVjdHNMaXN0LnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0xpc3QpO1xyXG4gICAgLy8gcG9wdWxhdGVTdG9yYWdlKHByb2plY3RzTGlzdCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c0xpc3QpO1xyXG4gICAgLy8gc2hvd1N0b3JhZ2UoKTtcclxuXHJcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1idG5cIiwgYCR7aW5kZXh9YCk7XHJcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcclxuXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcclxuICAgIHAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjaGFuZ2VQcm9qZWN0KGRpdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpKTtcclxuICAgIH0pXHJcblxyXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZGl2LnJlbW92ZSgpO1xyXG4gICAgICAgIGxldCBhbGxEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXByb2plY3RdXCIpO1xyXG4gICAgICAgIHByb2plY3RzTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzTGlzdCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFsbERpdnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBhbGxEaXZzW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHByb2pMaXN0Lmluc2VydEJlZm9yZShkaXYsIGFkZEZvcm0pO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHNMaXN0KTtcclxufVxyXG5cclxuXHJcbi8vY29udHJvbCBhZGQgcHJvamVjdCBmcm9tIGJ1dHRvbnNcclxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b21Qcm9qQnRuXCIpO1xyXG4gICAgY29uc3QgY2xvc2VGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5jbG9zZVwiKVxyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGRcIik7XHJcblxyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgb3BlbkZvcm0oKTtcclxuICAgIH0pXHJcblxyXG4gICAgY2xvc2VGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY2xvc2VGb3JtKCk7XHJcbiAgICB9KVxyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBsZXQgaW5kZXggPSBnZXROZXdEYXRhKCk7XHJcbiAgICAgICAgbGV0IGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3ROYW1lXCIpO1xyXG4gICAgICAgIGFkZFByb2plY3QoaW5wdXRGaWVsZC52YWx1ZSk7XHJcbiAgICAgICAgY2xvc2VGb3JtKCk7XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qID0gcHJvamVjdHNMaXN0W2N1cnJlbnRdO1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrVGl0bGVcIikudmFsdWU7XHJcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Rlc2NcIikudmFsdWU7XHJcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0RhdGVcIikudmFsdWU7XHJcbiAgICBsZXQgcHJpb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tQcmlvclwiKS52YWx1ZTtcclxuICAgIGlmKGRhdGUgPT09IFwiXCIpe1xyXG4gICAgICAgIGRhdGUgPSBcIk5vIGRhdGVcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3IpO1xyXG4gICAgY29uc3QgZm9ybUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0Zvcm1cIik7XHJcbiAgICBjdXJyZW50UHJvai5saXN0LnB1c2gobmV3VGFzayk7XHJcbiAgICBmb3JtQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvaik7XHJcbiAgICBzaG93VGFzayhjdXJyZW50UHJvai5saXN0WzBdKTtcclxuICAgIGRlc2MgPSBcIlwiO1xyXG4gICAgZGF0ZSA9IFwiXCI7XHJcbiAgICBwcmlvciA9IFwiXCI7XHJcbn1cclxuXHJcbmNvbnN0IGluYm94Q29udHJvbGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luYm94XCIpO1xyXG4gICAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjaGFuZ2VQcm9qZWN0KDApO1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgYWRkVGFza0J0biA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUYXNrXCIpO1xyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkVGFzaygpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza1RpdGxlXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEZXNjXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEYXRlXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tQcmlvclwiKS52YWx1ZSA9IFwiMFwiO1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgY2hhbmdlUHJvamVjdCA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICBjb25zdCBwcm9qRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE5hbWVcIik7XHJcbiAgICBjb25zdCBwcm9qTmFtZSA9IHByb2plY3RzTGlzdFtpZF0udGl0bGU7XHJcbiAgICBwcm9qRGlzcGxheS50ZXh0Q29udGVudCA9IHByb2pOYW1lO1xyXG4gICAgY3VycmVudCA9IGlkO1xyXG5cclxufVxyXG5cclxuY29uc3QgcmVuZGVyVGFzayA9IGZ1bmN0aW9uKHRhc2spIHtcclxuICAgIGNvbnN0IHRhc2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFza0JveC5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZWRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNvbXBsZXRlZElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuXHJcbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2Mi5jbGFzc0xpc3QuYWRkKFwidGl0bGVucHJpXCIpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcblxyXG4gICAgY29uc3QgcHJpb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHByaW9yLmNsYXNzTGlzdC5hZGQoXCJwcmlvclwiKTtcclxuICAgIGNvbnN0IHN0YXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgc3RhckltZy5zcmMgPSBcImltYWdlcy9zdGFyLWZpbGwuc3ZnXCI7XHJcbiAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgZG8ge1xyXG4gICAgICAgIHByaW9yLmFwcGVuZENoaWxkKHN0YXJJbWcpO1xyXG4gICAgfSB3aGlsZSh0YXNrLnByaW9yaXR5IDwgaSk7XHJcblxyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgZGVzYy5jbGFzc0xpc3QuYWRkKFwiZGVzY1wiKTtcclxuICAgIGRlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2M7XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlRGF0ZVwiKTtcclxuICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XHJcblxyXG4gICAgZGl2Mi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBkaXYyLmFwcGVuZENoaWxkKHByaW9yKTtcclxuXHJcbiAgICBkaXYxLmFwcGVuZENoaWxkKGRpdjIpO1xyXG4gICAgZGl2MS5hcHBlbmRDaGlsZChkZXNjKTtcclxuICAgIGRpdjEuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICB0YXNrQm94LmFwcGVuZENoaWxkKGNvbXBsZXRlZElucHV0KTtcclxuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQoZGl2MSk7XHJcblxyXG4gICAgcmV0dXJuIHRhc2tCb3hcclxufVxyXG5cclxuY29uc3Qgc2hvd1Rhc2sgPSBmdW5jdGlvbih0YXNrKXtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKTtcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocmVuZGVyVGFzayh0YXNrKSk7XHJcbn1cclxuXHJcblxyXG4vL0RPREFKIFJFVFJJVkVQUk9KRUNUU1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBhZGRUYXNrRm9ybU9wZW5DbG9zZSwgYWRkUHJvamVjdEJ0biwgYWRkVGFza0J0bixpbmJveENvbnRyb2xsZXIgfTsiLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgcG9wdWxhdGVTdG9yYWdlLCByZXRyaXZlU3RvcmFnZSwgcHJvamVjdHNMaXN0LCBzaG93U3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQgeyBhZGRUYXNrRm9ybU9wZW5DbG9zZSwgYWRkUHJvamVjdEJ0biwgYWRkVGFza0J0biwgaW5ib3hDb250cm9sbGVyIH0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXIuanNcIjtcclxuXHJcbi8vIHNob3dTdG9yYWdlKCk7XHJcbi8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4vLyBwcm9qZWN0c0xpc3QgPSBbXTtcclxuXHJcbi8vIGxldCB0YXNrMSA9IG5ldyBUYXNrKFwiWmplc2NcIiwgXCJtdXN6ZSB6amVzYyBqdXRybyByYW5vXCIsIFwiMjAyMi0xMC0xM1wiLCAzKTtcclxuLy8gbGV0IHRhc2syID0gbmV3IFRhc2soXCJaamVzY1wiLCBcIm11c3plIHpqZXNjIGp1dHJvIHJhbm9cIiwgXCIyMDIyLTEwLTEzXCIsIDMpO1xyXG4vLyBsZXQgdGFzazMgPSBuZXcgVGFzayhcIlpqZXNjXCIsIFwibXVzemUgemplc2MganV0cm8gcmFub1wiLCBcIjIwMjItMTAtMTNcIiwgMyk7XHJcbi8vIGxldCB0YXNrNCA9IG5ldyBUYXNrKFwiWmplc2NcIiwgXCJtdXN6ZSB6amVzYyBqdXRybyByYW5vXCIsIFwiMjAyMi0xMC0xM1wiLCAzKTtcclxuLy8gbGV0IHRhc2s1ID0gbmV3IFRhc2soXCJaamVzY1wiLCBcIm11c3plIHpqZXNjIGp1dHJvIHJhbm9cIiwgXCIyMDIyLTEwLTEzXCIsIDMpO1xyXG5sZXQgSW5ib3ggPSBuZXcgUHJvamVjdChcIkluYm94XCIpO1xyXG5wcm9qZWN0c0xpc3QucHVzaChJbmJveCk7XHJcbi8vIGxldCBGb2N1cyA9IG5ldyBQcm9qZWN0KFwiZm9jdXNcIik7XHJcbi8vIEluYm94LmFkZCh0YXNrMSk7XHJcbi8vIEluYm94LmFkZCh0YXNrMik7XHJcbi8vIEluYm94LmFkZCh0YXNrMyk7XHJcbi8vIEZvY3VzLmFkZCh0YXNrNCk7XHJcbi8vIEZvY3VzLmFkZCh0YXNrNSk7XHJcbi8vIC8vIGxldCBFbXB0eSA9IG5ldyBQcm9qZWN0KFwiZW1wdHlcIik7XHJcbi8vIHByb2plY3RzTGlzdC5wdXNoKEZvY3VzKTtcclxuLy8gY29uc29sZS5sb2cocHJvamVjdHNMaXN0KTtcclxuLy8gcG9wdWxhdGVTdG9yYWdlKHByb2plY3RzTGlzdCk7XHJcbi8vIGNvbnNvbGUubG9nKEluYm94KTtcclxuY29uc29sZS5sb2cocHJvamVjdHNMaXN0KTtcclxuYWRkVGFza0Zvcm1PcGVuQ2xvc2UoXCIuYWRkVGFza1wiLCBcIi5jbG9zZUJ0blwiLCBcIi50YXNrRm9ybVwiKTtcclxuYWRkUHJvamVjdEJ0bigpO1xyXG5hZGRUYXNrQnRuKCk7XHJcbmluYm94Q29udHJvbGxlcigpO1xyXG4vLyBwb3B1bGF0ZVN0b3JhZ2UocHJvamVjdHNMaXN0KTtcclxuLy8gcmV0cml2ZVN0b3JhZ2UoKTsiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aXRsZSIsInRoaXMiLCJsaXN0IiwiYWRkIiwidGFzayIsInB1c2giLCJjdXJyZW50IiwicHJvamVjdHNMaXN0IiwiVGFzayIsImRlc2MiLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJjb21wbGV0ZWQiLCJpc0NvbXBsZXRlZCIsImJvb2wiLCJjbG9zZUZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ2YWx1ZSIsImNoYW5nZVByb2plY3QiLCJpZCIsInByb2pEaXNwbGF5IiwicHJvak5hbWUiLCJ0ZXh0Q29udGVudCIsIkluYm94IiwiY29uc29sZSIsImxvZyIsIm9wZW4iLCJjbG9zZSIsImZvcm0iLCJvcGVuQnRuIiwiY2xvc2VCdG4iLCJmb3JtQm94IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZFRhc2tGb3JtT3BlbkNsb3NlIiwiYWRkQnRuIiwiY2xvc2VGb3JtQnRuIiwiYWRkQnV0dG9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXgiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwicHJvakxpc3QiLCJhZGRGb3JtIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImRlbGV0ZUJ0biIsInAiLCJzZXRBdHRyaWJ1dGUiLCJuZXdQcm9qZWN0IiwiYXBwZW5kQ2hpbGQiLCJnZXRBdHRyaWJ1dGUiLCJhbGxEaXZzIiwic3BsaWNlIiwiaSIsImluc2VydEJlZm9yZSIsImFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnRuIiwiY3VycmVudFByb2oiLCJkYXRlIiwicHJpb3IiLCJuZXdUYXNrIiwidGFza0JveCIsImNvbXBsZXRlZElucHV0IiwiZGl2MSIsImRpdjIiLCJzdGFySW1nIiwic3JjIiwicmVuZGVyVGFzayIsImFkZFRhc2siXSwic291cmNlUm9vdCI6IiJ9