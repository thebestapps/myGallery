"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6494],{6494:(F,_,a)=>{a.r(_),a.d(_,{ViewItemPageModule:()=>q});var g=a(6895),m=a(433),s=a(5520),d=a(1407),t=a(8256),p=a(4072),f=a(6681);function x(i,o){if(1&i&&(t.TgZ(0,"div",19)(1,"h2",20),t._uU(2),t.qZA(),t.TgZ(3,"p",21),t._uU(4),t.qZA()()),2&i){const e=t.oxw();t.xp6(2),t.Oqu(e.selected_folder.folder_name),t.xp6(2),t.hij("",e.selected_folder.total_img," items")}}function u(i,o){1&i&&t._UZ(0,"ion-icon",22)}function h(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"ion-icon",23),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.deleteSelectedItem())}),t.qZA()}}function w(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"p",27),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.selectItem())}),t._uU(1,"Select items"),t.qZA()}}function v(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"p",27),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.selectItem())}),t._uU(1,"Unselect items"),t.qZA()}}function I(i,o){if(1&i&&(t.TgZ(0,"div",24)(1,"p",25),t._uU(2,"Settings"),t.qZA(),t.TgZ(3,"p",25),t._uU(4,"Favorites"),t.qZA(),t.YNc(5,w,2,0,"p",26),t.YNc(6,v,2,0,"p",26),t.TgZ(7,"p",25),t._uU(8,"Edit folder"),t.qZA()()),2&i){const e=t.oxw();t.xp6(5),t.Q6J("ngIf",!e.select_item),t.xp6(1),t.Q6J("ngIf",e.select_item)}}function P(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"img",28),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.active_grid("1"))}),t.qZA()}}function T(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"img",29),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.active_grid("1"))}),t.qZA()}}function Z(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"img",30),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.active_grid("2"))}),t.qZA()}}function k(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"img",31),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.active_grid("2"))}),t.qZA()}}function C(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"ion-col",33)(1,"div",34)(2,"div",35),t._UZ(3,"img",36),t.TgZ(4,"img",37),t.NdJ("click",function(){const r=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.edit_data(r))}),t.qZA()(),t.TgZ(5,"div",38)(6,"div",17)(7,"p",39),t._uU(8),t.qZA(),t.TgZ(9,"p",40),t._uU(10),t.qZA()(),t.TgZ(11,"div",41)(12,"ion-icon",42),t.NdJ("click",function(){const r=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.deleteData(r))}),t.qZA(),t._UZ(13,"img",43),t.qZA()()()()}if(2&i){const e=o.$implicit;t.xp6(3),t.Q6J("src",e.img,t.LSH),t.xp6(5),t.Oqu(e.data.title),t.xp6(2),t.Oqu(e.data.note)}}function M(i,o){if(1&i&&(t.TgZ(0,"ion-row"),t.YNc(1,C,14,3,"ion-col",32),t.ALo(2,"appFilter"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,e.photo_data,e.searchText))}}function V(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"input",49),t.NdJ("click",function(){t.CHM(e);const c=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.selectData(c))}),t.qZA()}}function O(i,o){if(1&i&&(t.TgZ(0,"ion-col",45)(1,"div",46),t.YNc(2,V,1,0,"input",47),t._UZ(3,"img",48),t.qZA()()),2&i){const e=o.$implicit,n=t.oxw(2);t.xp6(2),t.Q6J("ngIf",n.select_item),t.xp6(1),t.Q6J("src",e.img,t.LSH)}}function b(i,o){if(1&i&&(t.TgZ(0,"ion-row"),t.YNc(1,O,4,2,"ion-col",44),t.ALo(2,"appFilter"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,e.photo_data,e.searchText))}}const J=function(i){return{autoMargin:i}},z=[{path:"",component:(()=>{class i{constructor(e){this.config=e,this.photo_data=[],this.searchText="",this.small_grid_active=!0,this.large_grid_active=!1,this.folder_option=!1,this.select_item=!1,this.selectedItem=[]}ngOnInit(){}ionViewWillEnter(){this.selected_folder=this.config.selected_folder,this.photo_data=JSON.parse(this.config.storageGet("all_data").__zone_symbol__value)}edit_data(e){this.selectedId=e.id,this.config.navigate("upload-data"),this.config.editable_data=e}deleteData(e){this.selectedId=e.id;var n=this.photo_data.filter(c=>c.id!==e.id);this.photo_data=n,this.config.storageSave("all_data",this.photo_data)}active_grid(e){1==e&&(this.small_grid_active=!1,this.large_grid_active=!0),2==e&&(this.small_grid_active=!0,this.large_grid_active=!1)}back(){this.config.navigate("home")}more_options(){this.folder_option=!this.folder_option}selectItem(){this.select_item=!this.select_item,this.folder_option=!1}selectData(e){this.selectedItem.push(e)}deleteSelectedItem(){var e=this.photo_data.filter(n=>this.selectedItem.every(c=>c.id!==n.id));console.log(e),this.photo_data=e,this.config.storageSave("all_data",this.photo_data)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.v))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-view-item"]],decls:25,vars:13,consts:[[1,"header"],["name","arrow-back-outline",1,"left-arrow-icon",3,"click"],["class","title-content",4,"ngIf"],["name","share-social","class","three-dot-icon",4,"ngIf"],["name","trash","class","three-dot-icon",3,"click",4,"ngIf"],["name","ellipsis-vertical",1,"three-dot-icon",3,"ngClass","click"],["class","more-option-popup",4,"ngIf"],[1,"view-item-page"],[1,"flex-content"],[1,"photo-date-details"],[1,"date-txt"],[1,"day-txt"],[1,"photo-resize"],["src","../../../assets/icon/large-grid-img-active.svg","class","large-grid-icon",3,"click",4,"ngIf"],["src","../../../assets/icon/large-grid-img.svg","class","large-grid-icon",3,"click",4,"ngIf"],["src","../../../assets/icon/small-grid-img.svg","class","small-grid-icon",3,"click",4,"ngIf"],["src","../../../assets/icon/small-grid-img-active.svg","class","small-grid-icon",3,"click",4,"ngIf"],[1,"content"],[4,"ngIf"],[1,"title-content"],[1,"folder-name"],[1,"item-number"],["name","share-social",1,"three-dot-icon"],["name","trash",1,"three-dot-icon",3,"click"],[1,"more-option-popup"],[1,"option-txt"],["class","option-txt",3,"click",4,"ngIf"],[1,"option-txt",3,"click"],["src","../../../assets/icon/large-grid-img-active.svg",1,"large-grid-icon",3,"click"],["src","../../../assets/icon/large-grid-img.svg",1,"large-grid-icon",3,"click"],["src","../../../assets/icon/small-grid-img.svg",1,"small-grid-icon",3,"click"],["src","../../../assets/icon/small-grid-img-active.svg",1,"small-grid-icon",3,"click"],["size-xs","6","size-sm","6","size-md","6","size-lg","3","size-lx","3",4,"ngFor","ngForOf"],["size-xs","6","size-sm","6","size-md","6","size-lg","3","size-lx","3"],[1,"card"],[1,"img","content"],[1,"content-img",3,"src"],["src","../../../assets/icon/pencil-icon.svg",1,"edit-icon",3,"click"],[1,"txt-content"],[1,"tittle-txt"],[1,"note-txt"],[1,"img-grp"],["name","trash-outline",1,"delete-icon",3,"click"],["src","../../../assets/icon/home-mic-icon.svg",1,"mic-icon"],["size-xs","3","size-sm","3","size-md","6","size-lg","3","size-lx","3",4,"ngFor","ngForOf"],["size-xs","3","size-sm","3","size-md","6","size-lg","3","size-lx","3"],[1,"grid-content"],["type","checkbox","class","input-checkbox",3,"click",4,"ngIf"],[1,"grid-content-img",3,"src"],["type","checkbox",1,"input-checkbox",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"div",0)(3,"ion-icon",1),t.NdJ("click",function(){return n.back()}),t.qZA(),t.YNc(4,x,5,2,"div",2),t.YNc(5,u,1,0,"ion-icon",3),t.YNc(6,h,1,0,"ion-icon",4),t.TgZ(7,"ion-icon",5),t.NdJ("click",function(){return n.more_options()}),t.qZA()()()(),t.TgZ(8,"ion-content"),t.YNc(9,I,9,2,"div",6),t.TgZ(10,"div",7)(11,"div",8)(12,"div",9)(13,"p",10),t._uU(14,"6 Jan 2023"),t.qZA(),t.TgZ(15,"p",11),t._uU(16,"Wednesday"),t.qZA()(),t.TgZ(17,"div",12),t.YNc(18,P,1,0,"img",13),t.YNc(19,T,1,0,"img",14),t.YNc(20,Z,1,0,"img",15),t.YNc(21,k,1,0,"img",16),t.qZA()(),t.TgZ(22,"div",17),t.YNc(23,M,3,4,"ion-row",18),t.YNc(24,b,3,4,"ion-row",18),t.qZA()()()),2&e&&(t.xp6(4),t.Q6J("ngIf",n.selected_folder),t.xp6(1),t.Q6J("ngIf",n.select_item),t.xp6(1),t.Q6J("ngIf",n.select_item),t.xp6(1),t.Q6J("ngClass",t.VKq(11,J,0==n.select_item)),t.xp6(2),t.Q6J("ngIf",n.folder_option),t.xp6(9),t.Q6J("ngIf",!n.large_grid_active),t.xp6(1),t.Q6J("ngIf",n.large_grid_active),t.xp6(1),t.Q6J("ngIf",!n.small_grid_active),t.xp6(1),t.Q6J("ngIf",n.small_grid_active),t.xp6(2),t.Q6J("ngIf",n.small_grid_active),t.xp6(1),t.Q6J("ngIf",n.large_grid_active))},dependencies:[g.mk,g.sg,g.O5,s.wI,s.W2,s.Gu,s.gu,s.Nd,s.sr,f.g],styles:["*[_ngcontent-%COMP%]{margin:0}.header[_ngcontent-%COMP%]{display:flex}.left-arrow-icon[_ngcontent-%COMP%]{text-align:left;margin:auto auto auto 13px;font-size:28px}.title-content[_ngcontent-%COMP%]{text-align:left;margin:auto;text-align:center}.three-dot-icon[_ngcontent-%COMP%]{text-align:left;margin:auto 6px auto 0;font-size:22px}.three-dot-icon.autoMargin[_ngcontent-%COMP%]{margin:auto 6px auto auto}.item-number[_ngcontent-%COMP%]{margin-top:-12px;color:#bebebe;font-size:12px}.folder-name[_ngcontent-%COMP%]{font-weight:400;font-size:20px;line-height:30px;color:#000}.flex-content[_ngcontent-%COMP%]{display:flex}.date-txt[_ngcontent-%COMP%], .day-txt[_ngcontent-%COMP%]{font-size:13px;margin:0}.photo-resize[_ngcontent-%COMP%]{margin:auto 0 auto auto!important}.large-grid-icon[_ngcontent-%COMP%]{margin-left:10px}.small-grid-icon[_ngcontent-%COMP%]{margin-left:10px;margin-bottom:-3px}.view-item-page[_ngcontent-%COMP%]{margin:0 20px}.content[_ngcontent-%COMP%]{width:100%}.card[_ngcontent-%COMP%]{background:var(--ion-box-primary);border-radius:6px;padding:5px}.img.content[_ngcontent-%COMP%]{position:relative}.content-img[_ngcontent-%COMP%]{width:100%;height:8rem;object-fit:cover;border-radius:6px;background:white}.edit-icon[_ngcontent-%COMP%]{position:absolute;right:5px;background:#fff3df;top:5px;border-radius:30px;padding:7px}.txt-content[_ngcontent-%COMP%]{display:flex}.note-txt[_ngcontent-%COMP%]{font-size:10px;line-height:15px;color:#747474;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.img-grp[_ngcontent-%COMP%]{text-align:center}.delete-icon[_ngcontent-%COMP%]{background:#fff;border-radius:60px;height:18px;width:18px;padding:8px;margin:auto auto 0}.mic-icon[_ngcontent-%COMP%]{background:#fff;border-radius:60px;height:30px;width:30px;padding:4px;margin:auto auto 0}.grid-content-img[_ngcontent-%COMP%]{width:100%;height:4.5rem;object-fit:cover;border-radius:10px}.more-option-popup[_ngcontent-%COMP%]{background:#ffffff;box-shadow:0 4px 20px #00000026;border-radius:7px;padding:10px 30px 5px 20px;position:absolute;z-index:1000;right:28px}.option-txt[_ngcontent-%COMP%]{margin-bottom:12px}.grid-content[_ngcontent-%COMP%]{position:relative}.input-checkbox[_ngcontent-%COMP%]{position:absolute;right:5px;top:5px}"]}),i})()}];let A=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.Bz.forChild(z),d.Bz]}),i})();var N=a(4466);let q=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.ez,m.u5,s.Pc,A,N.m,m.UX]}),i})()}}]);