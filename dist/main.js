(()=>{"use strict";class t{constructor(t){this.title=t,this.list=[]}add(t){this.list.push(t)}}let e=[];const o=function(){document.querySelector(".customProjForm").classList.remove("active"),document.querySelector(".projectName").value=""};!function(){let o=localStorage.length;if(o>0)for(let c=0;c<=o/2;c++)if(localStorage.getItem(`project${c}`)){let o=localStorage.getItem(`project${c}`),r=JSON.parse(localStorage.getItem(`project${c}Tasks`)),n=new t(o);r.length>0&&r.forEach((t=>{n.add(t)})),e.push(n)}}(),function(t){if(t.length>0)for(let e=0;e<=t.length-1;e++)localStorage.setItem(`project${e}`,t[e].title),localStorage.setItem(`project${e}Tasks`,JSON.stringify(t[e].list))}(e),console.log(e),function(t,e,o){const c=document.querySelector(".addTask"),r=document.querySelector(".closeBtn"),n=document.querySelector(".taskForm");c.addEventListener("click",(()=>{n.classList.add("active")})),r.addEventListener("click",(()=>{n.classList.remove("active")}))}(),function(){const t=document.querySelector(".customProjBtn"),e=document.querySelector("button.close"),c=document.querySelector("button.add");t.addEventListener("click",(()=>{document.querySelector(".customProjForm").classList.add("active")})),e.addEventListener("click",(()=>{o()})),c.addEventListener("click",(()=>{(function(){let t=document.querySelectorAll("[data-project]").length,e=document.querySelector(".projectName");const o=document.querySelector(".customProjList"),c=document.querySelector(".customProjForm"),r=document.createElement("div"),n=document.createElement("button");r.classList.add("customProj"),r.setAttribute("data-project",`${t}`),r.textContent=e.value,n.setAttribute("data-btn",`${t}`),n.textContent="X",r.appendChild(n),n.addEventListener("click",(()=>{r.remove()})),o.insertBefore(r,c)})(),o()}))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQWUsTUFBTUEsRUFDakJDLFlBQVlDLEdBQ1JDLEtBQUtELE1BQVFBLEVBQ2JDLEtBQUtDLEtBQU8sRUFDaEIsQ0FFQUMsSUFBSUMsR0FDQUgsS0FBS0MsS0FBS0csS0FBS0QsRUFDbkIsRUNOSixJQUFJRSxFQUFjLEdDQWxCLE1BaUJNQyxFQUFZLFdBQ0VDLFNBQVNDLGNBQWMsbUJBQy9CQyxVQUFVQyxPQUFPLFVBRVJILFNBQVNDLGNBQWMsZ0JBQzdCRyxNQUFRLEVBQ3ZCLEdEYkEsV0FDSSxJQUFJQyxFQUFnQkMsYUFBYUMsT0FDakMsR0FBR0YsRUFBZ0IsRUFDZixJQUFJLElBQUlHLEVBQUksRUFBR0EsR0FBS0gsRUFBZ0IsRUFBSUcsSUFDcEMsR0FBR0YsYUFBYUcsUUFBUSxVQUFVRCxLQUFNLENBQ3BDLElBQUlFLEVBQWNKLGFBQWFHLFFBQVEsVUFBVUQsS0FDN0NHLEVBQVFDLEtBQUtDLE1BQU1QLGFBQWFHLFFBQVEsVUFBVUQsV0FDbERNLEVBQVUsSUFBSXhCLEVBQVFvQixHQUN2QkMsRUFBTUosT0FBUyxHQUNkSSxFQUFNSSxTQUFRbkIsSUFDVmtCLEVBQVFuQixJQUFJQyxFQUFLLElBR3pCRSxFQUFhRCxLQUFLaUIsRUFDdEIsQ0FHWixDRXhCQUUsR0ZGQSxTQUF5QkMsR0FDckIsR0FBR0EsRUFBU1YsT0FBUyxFQUNqQixJQUFJLElBQUlDLEVBQUksRUFBR0EsR0FBS1MsRUFBU1YsT0FBUyxFQUFHQyxJQUNyQ0YsYUFBYVksUUFBUSxVQUFVVixJQUFLUyxFQUFTVCxHQUFHaEIsT0FDaERjLGFBQWFZLFFBQVEsVUFBVVYsU0FBVUksS0FBS08sVUFBVUYsRUFBU1QsR0FBR2QsTUFHaEYsQ0VZQTBCLENBQWdCdEIsR0FFaEJ1QixRQUFRQyxJQUFJeEIsR0R0QmlCLFNBQVN5QixFQUFNQyxFQUFPQyxHQUMvQyxNQUFNQyxFQUFVMUIsU0FBU0MsY0NzQlIsWURyQlgwQixFQUFXM0IsU0FBU0MsY0NxQkcsYURwQnZCMkIsRUFBVTVCLFNBQVNDLGNDb0JpQixhRGpCMUN5QixFQUFRRyxpQkFBaUIsU0FBUyxLQUM5QkQsRUFBUTFCLFVBQVVQLElBQUksU0FBUyxJQUduQ2dDLEVBQVNFLGlCQUFpQixTQUFTLEtBQy9CRCxFQUFRMUIsVUFBVUMsT0FBTyxTQUFTLEdBRzFDLENDU0EyQixHRDBDc0IsV0FDbEIsTUFBTUMsRUFBUy9CLFNBQVNDLGNBQWMsa0JBQ2hDK0IsRUFBZWhDLFNBQVNDLGNBQWMsZ0JBQ3RDZ0MsRUFBWWpDLFNBQVNDLGNBQWMsY0FFekM4QixFQUFPRixpQkFBaUIsU0FBUyxLQTNDakI3QixTQUFTQyxjQUFjLG1CQUMvQkMsVUFBVVAsSUFBSSxTQTJDUixJQUdkcUMsRUFBYUgsaUJBQWlCLFNBQVMsS0FDbkM5QixHQUFXLElBRWZrQyxFQUFVSixpQkFBaUIsU0FBUyxNQXZDckIsV0FDZixJQUFJSyxFQU5ZbEMsU0FBU21DLGlCQUFpQixrQkFDM0I1QixPQU1YNkIsRUFBYXBDLFNBQVNDLGNBQWMsZ0JBRXhDLE1BQU1vQyxFQUFXckMsU0FBU0MsY0FBYyxtQkFDbENxQyxFQUFVdEMsU0FBU0MsY0FBYyxtQkFFakNzQyxFQUFNdkMsU0FBU3dDLGNBQWMsT0FDN0JDLEVBQVl6QyxTQUFTd0MsY0FBYyxVQUV6Q0QsRUFBSXJDLFVBQVVQLElBQUksY0FDbEI0QyxFQUFJRyxhQUFhLGVBQWdCLEdBQUdSLEtBQ3BDSyxFQUFJSSxZQUFjUCxFQUFXaEMsTUFFN0JxQyxFQUFVQyxhQUFhLFdBQVksR0FBR1IsS0FDdENPLEVBQVVFLFlBQWMsSUFFeEJKLEVBQUlLLFlBQVlILEdBRWhCQSxFQUFVWixpQkFBaUIsU0FBUyxLQUNoQ1UsRUFBSXBDLFFBQVEsSUFFaEJrQyxFQUFTUSxhQUFhTixFQUFLRCxFQUMvQixFQWlCUVEsR0FDQS9DLEdBQVcsR0FHbkIsQ0MxREFnRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHRhc2spIHtcclxuICAgICAgICB0aGlzLmxpc3QucHVzaCh0YXNrKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcblxyXG5sZXQgcHJvamVjdHNMaXN0PSBbXTtcclxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKHByb2plY3RzKSB7XHJcbiAgICBpZihwcm9qZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSBwcm9qZWN0cy5sZW5ndGggLSAxOyBpKyspe1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJvamVjdCR7aX1gLCBwcm9qZWN0c1tpXS50aXRsZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBwcm9qZWN0JHtpfVRhc2tzYCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNbaV0ubGlzdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmV0cml2ZVN0b3JhZ2UoKSB7XHJcbiAgICBsZXQgc3RvcmFnZUxlbmd0aCA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XHJcbiAgICBpZihzdG9yYWdlTGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gc3RvcmFnZUxlbmd0aCAvIDI7ICBpKyspIHtcclxuICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByb2plY3Qke2l9YCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcm9qZWN0JHtpfWApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgcHJvamVjdCR7aX1UYXNrc2ApKTtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYodGFza3MubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5hZGQodGFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IHBvcHVsYXRlU3RvcmFnZSwgcmV0cml2ZVN0b3JhZ2UsIHByb2plY3RzTGlzdCB9OyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuXHJcbmNvbnN0IGFkZFRhc2tGb3JtT3BlbkNsb3NlID0gZnVuY3Rpb24ob3BlbiwgY2xvc2UsIGZvcm0pIHtcclxuICAgIGNvbnN0IG9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wZW4pO1xyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsb3NlKTtcclxuICAgIGNvbnN0IGZvcm1Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm0pO1xyXG5cclxuICAgIC8vb3BlbiBmb3JtIGZvciBhZGRpbmcgdGFza1xyXG4gICAgb3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGZvcm1Cb3guY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgLy9jbG9zZSBmb3JtIGZvciBhZGRpbmcgdGFza1xyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBmb3JtQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbi8vY2xvc2UgcHJvamVjdCBhZGQgZm9ybVxyXG5jb25zdCBjbG9zZUZvcm0gPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1c3RvbVByb2pGb3JtXCIpO1xyXG4gICAgYWRkRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIGxldCBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0TmFtZVwiKTtcclxuICAgIGlucHV0RmllbGQudmFsdWUgPSBcIlwiXHJcbn1cclxuXHJcbi8vb3BlbiBwcm9qZWN0IGFkZCBmb3JtXHJcbmNvbnN0IG9wZW5Gb3JtID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b21Qcm9qRm9ybVwiKTtcclxuICAgIGFkZEZvcm0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxufVxyXG5cclxuLy9nZXQgbnVtYmVyIG9mIHByb2plY3RzXHJcbmNvbnN0IGdldE5ld0RhdGEgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGFsbFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtcHJvamVjdF1cIik7IFxyXG4gICAgcmV0dXJuIGFsbFByb2oubGVuZ3RoO1xyXG59XHJcblxyXG4vL2FkZCBwcm9qZWN0IHRvIHRoZSBsaXN0XHJcbmNvbnN0IGFkZFByb2plY3QgPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCBpbmRleCA9IGdldE5ld0RhdGEoKTtcclxuICAgIGxldCBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0TmFtZVwiKTtcclxuXHJcbiAgICBjb25zdCBwcm9qTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VzdG9tUHJvakxpc3RcIik7XHJcbiAgICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b21Qcm9qRm9ybVwiKTtcclxuXHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImN1c3RvbVByb2pcIik7XHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsIGAke2luZGV4fWApO1xyXG4gICAgZGl2LnRleHRDb250ZW50ID0gaW5wdXRGaWVsZC52YWx1ZTtcclxuXHJcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1idG5cIiwgYCR7aW5kZXh9YCk7XHJcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcclxuXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcclxuXHJcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBkaXYucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG4gICAgcHJvakxpc3QuaW5zZXJ0QmVmb3JlKGRpdiwgYWRkRm9ybSk7XHJcbn1cclxuXHJcblxyXG4vL2NvbnRyb2wgYWRkIHByb2plY3QgZnJvbSBidXR0b25zXHJcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VzdG9tUHJvakJ0blwiKTtcclxuICAgIGNvbnN0IGNsb3NlRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uY2xvc2VcIilcclxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYWRkXCIpO1xyXG5cclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG9wZW5Gb3JtKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNsb3NlRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNsb3NlRm9ybSgpO1xyXG4gICAgfSlcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGFkZFByb2plY3QoKTtcclxuICAgICAgICBjbG9zZUZvcm0oKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgYWRkVGFza0Zvcm1PcGVuQ2xvc2UsIGFkZFByb2plY3RCdG4gfTsiLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgcG9wdWxhdGVTdG9yYWdlLCByZXRyaXZlU3RvcmFnZSwgcHJvamVjdHNMaXN0IH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7IGFkZFRhc2tGb3JtT3BlbkNsb3NlLCBhZGRQcm9qZWN0QnRuIH0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXIuanNcIjtcclxuXHJcbnJldHJpdmVTdG9yYWdlKCk7XHJcbi8vIGxldCB0YXNrMSA9IG5ldyBUYXNrKFwiWmplc2NcIiwgXCJtdXN6ZSB6amVzYyBqdXRybyByYW5vXCIsIFwiMjAyMi0xMC0xM1wiLCAzKTtcclxuLy8gbGV0IHRhc2syID0gbmV3IFRhc2soXCJaamVzY1wiLCBcIm11c3plIHpqZXNjIGp1dHJvIHJhbm9cIiwgXCIyMDIyLTEwLTEzXCIsIDMpO1xyXG4vLyBsZXQgdGFzazMgPSBuZXcgVGFzayhcIlpqZXNjXCIsIFwibXVzemUgemplc2MganV0cm8gcmFub1wiLCBcIjIwMjItMTAtMTNcIiwgMyk7XHJcbi8vIGxldCB0YXNrNCA9IG5ldyBUYXNrKFwiWmplc2NcIiwgXCJtdXN6ZSB6amVzYyBqdXRybyByYW5vXCIsIFwiMjAyMi0xMC0xM1wiLCAzKTtcclxuLy8gbGV0IHRhc2s1ID0gbmV3IFRhc2soXCJaamVzY1wiLCBcIm11c3plIHpqZXNjIGp1dHJvIHJhbm9cIiwgXCIyMDIyLTEwLTEzXCIsIDMpO1xyXG4vLyBsZXQgSW5ib3ggPSBuZXcgUHJvamVjdChcImluYm94XCIpO1xyXG4vLyBwcm9qZWN0c0xpc3QucHVzaChJbmJveCk7XHJcbi8vIGxldCBGb2N1cyA9IG5ldyBQcm9qZWN0KFwiZm9jdXNcIik7XHJcbi8vIEluYm94LmFkZCh0YXNrMSk7XHJcbi8vIEluYm94LmFkZCh0YXNrMik7XHJcbi8vIEluYm94LmFkZCh0YXNrMyk7XHJcbi8vIEZvY3VzLmFkZCh0YXNrNCk7XHJcbi8vIEZvY3VzLmFkZCh0YXNrNSk7XHJcbi8vIC8vIGxldCBFbXB0eSA9IG5ldyBQcm9qZWN0KFwiZW1wdHlcIik7XHJcbi8vIHByb2plY3RzTGlzdC5wdXNoKEZvY3VzKTtcclxuLy8gY29uc29sZS5sb2cocHJvamVjdHNMaXN0KTtcclxucG9wdWxhdGVTdG9yYWdlKHByb2plY3RzTGlzdCk7XHJcbi8vIGNvbnNvbGUubG9nKEluYm94KTtcclxuY29uc29sZS5sb2cocHJvamVjdHNMaXN0KTtcclxuYWRkVGFza0Zvcm1PcGVuQ2xvc2UoXCIuYWRkVGFza1wiLCBcIi5jbG9zZUJ0blwiLCBcIi50YXNrRm9ybVwiKTtcclxuYWRkUHJvamVjdEJ0bigpOyJdLCJuYW1lcyI6WyJQcm9qZWN0IiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsInRoaXMiLCJsaXN0IiwiYWRkIiwidGFzayIsInB1c2giLCJwcm9qZWN0c0xpc3QiLCJjbG9zZUZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ2YWx1ZSIsInN0b3JhZ2VMZW5ndGgiLCJsb2NhbFN0b3JhZ2UiLCJsZW5ndGgiLCJpIiwiZ2V0SXRlbSIsInByb2plY3ROYW1lIiwidGFza3MiLCJKU09OIiwicGFyc2UiLCJwcm9qZWN0IiwiZm9yRWFjaCIsInJldHJpdmVTdG9yYWdlIiwicHJvamVjdHMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicG9wdWxhdGVTdG9yYWdlIiwiY29uc29sZSIsImxvZyIsIm9wZW4iLCJjbG9zZSIsImZvcm0iLCJvcGVuQnRuIiwiY2xvc2VCdG4iLCJmb3JtQm94IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZFRhc2tGb3JtT3BlbkNsb3NlIiwiYWRkQnRuIiwiY2xvc2VGb3JtQnRuIiwiYWRkQnV0dG9uIiwiaW5kZXgiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXRGaWVsZCIsInByb2pMaXN0IiwiYWRkRm9ybSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJkZWxldGVCdG4iLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYWRkUHJvamVjdCIsImFkZFByb2plY3RCdG4iXSwic291cmNlUm9vdCI6IiJ9