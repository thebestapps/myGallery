"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7149],{76:(v,p,l)=>{l.d(p,{GW:()=>c,dk:()=>g,oK:()=>d});var d=(()=>{return(_=d||(d={})).Prompt="PROMPT",_.Camera="CAMERA",_.Photos="PHOTOS",d;var _})(),c=(()=>{return(_=c||(c={})).Rear="REAR",_.Front="FRONT",c;var _})(),g=(()=>{return(_=g||(g={})).Uri="uri",_.Base64="base64",_.DataUrl="dataUrl",g;var _})()},7149:(v,p,l)=>{l.r(p),l.d(p,{HomePageModule:()=>W});var d=l(6895),c=l(5520),g=l(433),_=l(1407),m=l(5861),t=l(8256),b=l(7423),f=l(76);const P=(0,b.fo)("Camera",{web:()=>l.e(3954).then(l.bind(l,3954)).then(o=>new o.CameraWeb)});var h=l(4072);let C=(()=>{class o{constructor(e,n){this.config=e,this.plt=n,this.photos=[],this.convertBlobToBase64=i=>new Promise(()=>{const a=new FileReader;a.readAsDataURL(i),a.onload=s=>{this.logo=s.target.result,console.log("logo",this.logo),this.config.Takeimg=this.logo,this.config.navigate("upload-data")}})}addNewToGallery(){var e=this;return(0,m.Z)(function*(){e.capturedPhoto=yield P.getPhoto({resultType:f.dk.Uri,source:f.oK.Camera,quality:100}),console.log(e.capturedPhoto);const n=yield fetch(e.capturedPhoto.webPath);console.log("convert",n);const i=yield n.blob();return yield e.convertBlobToBase64(i)})()}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(h.v),t.LFG(c.t4))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var M=l(849),T=l(1481),Z=l(6681);const x=function(o){return{"active-tab":o}};function w(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-menu-toggle",7)(3,"ion-button",8),t._UZ(4,"img",9),t.qZA()(),t.TgZ(5,"div",10)(6,"p",11),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.tab=1)})("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.navigate("1"))}),t._uU(7," All Photos "),t.qZA(),t.TgZ(8,"p",11),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.tab=2)})("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.navigate("2"))}),t._uU(9," Folders "),t.qZA()(),t.TgZ(10,"ion-button",12),t._UZ(11,"img",13),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(6),t.Q6J("ngClass",t.VKq(2,x,1==e.tab)),t.xp6(2),t.Q6J("ngClass",t.VKq(4,x,2==e.tab))}}function O(o,r){if(1&o&&(t.TgZ(0,"div",18)(1,"div",19)(2,"span",20),t._uU(3,'"'),t.qZA(),t.TgZ(4,"p",21),t._uU(5),t.qZA()(),t._UZ(6,"img",22),t.qZA()),2&o){const e=t.oxw(3);t.xp6(5),t.Oqu(e.header_data.data.note),t.xp6(1),t.Q6J("src",e.header_data.img,t.LSH)}}function k(o,r){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,O,7,2,"div",17),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.header_data)}}function H(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"img",36),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(3);return t.KtG(i.active_grid("1"))}),t.qZA()}}function A(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"img",37),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(3);return t.KtG(i.active_grid("1"))}),t.qZA()}}function y(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"img",38),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(3);return t.KtG(i.active_grid("2"))}),t.qZA()}}function F(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"img",39),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(3);return t.KtG(i.active_grid("2"))}),t.qZA()}}function J(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"ion-col",41)(1,"div",42)(2,"div",43),t._UZ(3,"img",44),t.TgZ(4,"img",45),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(4);return t.KtG(s.edit_data(a))}),t.qZA()(),t.TgZ(5,"div",46)(6,"div",47)(7,"p",48),t._uU(8),t.qZA(),t.TgZ(9,"p",49),t._uU(10),t.qZA()(),t.TgZ(11,"div",50)(12,"ion-icon",51),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(4);return t.KtG(s.deleteData(a))}),t.qZA(),t.TgZ(13,"img",52),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(4);return t.KtG(s.stopPlay(a))}),t.qZA()()()()()}if(2&o){const e=r.$implicit;t.xp6(3),t.Q6J("src",e.img,t.LSH),t.xp6(5),t.Oqu(e.data.title),t.xp6(2),t.Oqu(e.data.note)}}function I(o,r){if(1&o&&(t.TgZ(0,"ion-row"),t.YNc(1,J,14,3,"ion-col",40),t.ALo(2,"appFilter"),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,e.filteredImages,e.searchText))}}function N(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"img",56),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,a=t.oxw(4);return t.KtG(a.edit_data(i))}),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.Q6J("src",e.img,t.LSH)}}function z(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"img",56),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,a=t.oxw(4);return t.KtG(a.edit_data(i))}),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.Q6J("src",e.img,t.LSH)}}function q(o,r){if(1&o&&(t.TgZ(0,"ion-col",54),t.YNc(1,N,1,1,"img",55),t.YNc(2,z,1,1,"img",55),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.Q6J("ngIf",e.img),t.xp6(1),t.Q6J("ngIf",!e.img)}}function G(o,r){if(1&o&&(t.TgZ(0,"ion-row"),t.YNc(1,q,3,2,"ion-col",53),t.ALo(2,"appFilter"),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,e.filteredImages,e.searchText))}}function Y(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",23)(1,"h1",24),t._uU(2,"My photos"),t.qZA(),t.TgZ(3,"div",25)(4,"div",26)(5,"p",27),t._uU(6),t.ALo(7,"date"),t.qZA(),t.TgZ(8,"p",28),t._uU(9),t.ALo(10,"date"),t.qZA()(),t.TgZ(11,"div",29),t.YNc(12,H,1,0,"img",30),t.YNc(13,A,1,0,"img",31),t.YNc(14,y,1,0,"img",32),t.YNc(15,F,1,0,"img",33),t.TgZ(16,"ion-icon",34),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.presentActionSheet())}),t.qZA()()(),t.TgZ(17,"div",35),t.YNc(18,I,3,4,"ion-row",0),t.YNc(19,G,3,4,"ion-row",0),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(6),t.Oqu(t.xi3(7,8,e.MyDate,"d MMM, y")),t.xp6(3),t.Oqu(t.xi3(10,11,e.MyDate,"EEEE")),t.xp6(3),t.Q6J("ngIf",!e.large_grid_active),t.xp6(1),t.Q6J("ngIf",e.large_grid_active),t.xp6(1),t.Q6J("ngIf",!e.small_grid_active),t.xp6(1),t.Q6J("ngIf",e.small_grid_active),t.xp6(3),t.Q6J("ngIf",e.small_grid_active),t.xp6(1),t.Q6J("ngIf",e.large_grid_active)}}function U(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",14)(1,"ion-searchbar",15),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.searchText=i)}),t.qZA(),t.YNc(2,k,2,1,"div",0),t.YNc(3,Y,20,14,"div",16),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.searchText),t.xp6(1),t.Q6J("ngIf",e.photo_data),t.xp6(1),t.Q6J("ngIf",e.photo_data)}}function S(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"ion-list",62)(1,"p",63),t._uU(2,"Settings"),t.qZA(),t.TgZ(3,"p",63),t._uU(4,"Favorites"),t.qZA(),t.TgZ(5,"p",63),t._uU(6,"Select items"),t.qZA(),t.TgZ(7,"p",64),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.EditFolderName())}),t._uU(8,"Edit folder"),t.qZA()()}}function Q(o,r){1&o&&t._UZ(0,"div",71)}function K(o,r){if(1&o&&t._UZ(0,"img",72),2&o){const e=t.oxw(3);t.Q6J("src",e.header_data.img,t.LSH)}}function E(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",65),t.NdJ("click",function(){const a=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.navigateFolder(a,"open folder"))}),t.YNc(1,Q,1,0,"div",66),t.YNc(2,K,1,1,"img",67),t.TgZ(3,"div",68)(4,"p",69),t._uU(5),t.qZA(),t.TgZ(6,"p",70),t._uU(7),t.qZA()()()}if(2&o){const e=r.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!n.header_data.img),t.xp6(1),t.Q6J("ngIf",n.header_data.img),t.xp6(3),t.Oqu(e.folder_name),t.xp6(2),t.hij("",e.total_img," images")}}function L(o,r){if(1&o&&(t.TgZ(0,"div",57)(1,"div",25)(2,"p",58),t._uU(3,"Recently"),t.qZA(),t._UZ(4,"img",59),t.qZA(),t.TgZ(5,"ion-popover",60),t.YNc(6,S,9,0,"ng-template"),t.qZA(),t.YNc(7,E,8,4,"div",61),t.qZA()),2&o){const e=t.oxw();t.xp6(5),t.Q6J("dismissOnSelect",!0),t.xp6(2),t.Q6J("ngForOf",e.allFolder)}}function R(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",73)(1,"div",74)(2,"img",75),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.CreateFolder("back"))}),t.qZA(),t.TgZ(3,"p",76),t._uU(4,"New Folder"),t.qZA()(),t.TgZ(5,"div",77)(6,"p",78),t._uU(7,"Folder Name"),t.qZA(),t.TgZ(8,"ion-input",79),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.folder_name=i)})("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.selectData(i))}),t.qZA()(),t.TgZ(9,"div",80)(10,"ion-button",81),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.CreateFolder("create"))}),t._uU(11,"Create folder"),t.qZA(),t.TgZ(12,"ion-button",82),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.CreateFolder("back"))}),t._uU(13,"Cancel"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(8),t.Q6J("ngModel",e.folder_name)}}function j(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",89),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.CreateFolder("folder"))}),t._UZ(1,"img",92),t.qZA()}}function D(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",83)(1,"div",84)(2,"div",85)(3,"ion-button",86),t.NdJ("change",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.SelectLogo(i,"1"))}),t._UZ(4,"img",87),t.TgZ(5,"input",88),t.NdJ("change",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.SelectLogo(i,"1"))}),t.qZA()(),t.TgZ(6,"ion-button",89),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addPhotoToGallery())}),t._UZ(7,"img",90),t.qZA(),t.YNc(8,j,2,0,"ion-button",91),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(8),t.Q6J("ngIf",e.all_folders)}}const $=[{path:"",component:(()=>{class o{constructor(e,n,i,a,s){this.photoService=e,this.config=n,this.storage=i,this.domSanitizer=a,this.actionSheetCtrl=s,this.tab=1,this.all_photos=!0,this.all_folders=!1,this.photo_data=[],this.small_grid_active=!0,this.large_grid_active=!1,this.folder_option=!1,this.Create_folder_form=!1,this.ion_header=!0,this.ion_footer=!0,this.searchText="",this.allFolder=[],this.filteredImages=[],this.selectedInterval=""}ngOnInit(){this.storage.create()}ionViewWillEnter(){this.user=JSON.parse(this.config.storageGet("user").__zone_symbol__value),this.photo_data=JSON.parse(this.config.storageGet("all_data").__zone_symbol__value),this.allFolder=JSON.parse(this.config.storageGet("allFolder").__zone_symbol__value),this.photo_data&&(this.photo_data=JSON.parse(this.config.storageGet("all_data").__zone_symbol__value),this.filteredImages=this.photo_data,this.header_data=this.filteredImages[Math.floor(Math.random()*this.filteredImages.length)],this.MyDate=this.filteredImages[0].createAt)}presentActionSheet(){var e=this;return(0,m.Z)(function*(){(yield e.actionSheetCtrl.create({cssClass:"my-custom-class",buttons:[{text:"6 Month",role:"destructive",data:{action:"delete"},handler:()=>{e.filterImages("sixMonths")}},{text:"1 Year Ago",data:{action:"share"},handler:()=>{e.filterImages("year")}},{text:"2 Year Ago",data:{action:"share"},handler:()=>{e.filterImages("two-years")}}]})).present()})()}filterImages(e){const n=new Date;switch(e){case"sixMonths":this.filteredImages=this.photo_data.filter(i=>{const a=i.createAt.getMonth(),s=n.getMonth();return Math.abs(a-s)<=6});break;case"year":this.filteredImages=this.photo_data.filter(i=>{const a=i.createAt.getFullYear();return n.getFullYear()-a==1});break;case"two-years":this.filteredImages=this.photo_data.filter(i=>{const a=i.createAt.getFullYear();return n.getFullYear()-a<=2});break;default:this.filteredImages=this.photo_data}}addPhotoToGallery(){this.config.storageSave("choose_file",2),this.photoService.addNewToGallery()}SelectLogo(e,n){if(1==n&&(this.config.storageSave("choose_file",1),e.target.files)){var i=new FileReader;i.readAsDataURL(e.target.files[0]),i.onload=a=>{this.logo=a.target.result,this.config.selected_img=this.logo,this.config.navigate("upload-data")}}}edit_data(e){console.log(e),this.selectedId=e.id,this.config.navigate("upload-data"),this.config.editable_data=e}deleteData(e){this.selectedId=e.id;var n=this.photo_data.filter(i=>i.id!==e.id);console.log(n),this.photo_data=n,this.config.storageSave("all_data",this.photo_data)}navigate(e){"1"==e&&(this.all_photos=!0,this.all_folders=!1),"2"==e&&(this.all_photos=!1,this.all_folders=!0)}navigateFolder(e,n){"open folder"==n&&(this.config.selected_folder=e,this.config.navigate("view-item"))}active_grid(e){1==e&&(this.small_grid_active=!1,this.large_grid_active=!0),2==e&&(this.small_grid_active=!0,this.large_grid_active=!1)}more_options(){this.folder_option=!this.folder_option}selectData(e){this.folder_name=e}CreateFolder(e){if("folder"==e&&(this.Create_folder_form=!0,this.all_photos=!1,this.all_folders=!1,this.ion_header=!1,this.ion_footer=!1),"back"==e&&(this.Create_folder_form=!1,this.all_photos=!1,this.all_folders=!0,this.ion_header=!0,this.ion_footer=!0),"create"==e){this.allFolder=[];let n=JSON.parse(this.config.storageGet("allFolder").__zone_symbol__value);null!=n&&(this.allFolder=n);let i={id:this.config.generateUniqueId(),folder_name:this.folder_name};this.allFolder.push(i),console.log(this.allFolder),this.config.storageSave("allFolder",this.allFolder),this.folder_name="",this.Create_folder_form=!1,this.all_photos=!1,this.all_folders=!0,this.ion_header=!0,this.ion_footer=!0}}EditFolderName(){}filterItems(e){this.photo_data=this.photo_data.filter(i=>(console.log(i),i.title.toLocaleLowerCase().includes()>-1))}stopPlay(e){var n=this;return(0,m.Z)(function*(){n.selectedId=e.id;var i=n.photo_data.filter(X=>X.id==n.selectedId);n.audioSource=i,console.log(n.audioSource);const a=new File([n.audioSource],"audio.mp3");console.log(a);const s=URL.createObjectURL(a);console.log(s);var u=new Audio(s);console.log(u),u.play()})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C),t.Y36(h.v),t.Y36(M.K),t.Y36(T.H7),t.Y36(c.BX))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],decls:7,vars:6,consts:[[4,"ngIf"],[3,"fullscreen"],[1,"home-page"],["class","all-photos-section",4,"ngIf"],["class","all-folder-section",4,"ngIf"],["class","create-folder-section",4,"ngIf"],["class","ion-footer",4,"ngIf"],["slot","start"],[1,"menu-btn"],["src","../../../../assets/icon/menu-icon.svg",1,"menu-icon"],[1,"bar-slider"],[1,"slide-txt",3,"ngClass","click"],["slot","end",1,"menu-btn"],["src","../../../../assets/icon/Search-icon.svg",1,"search-icon"],[1,"all-photos-section"],["placeholder","Search by Label, Date",1,"inp-c",2,"border-radius","7px",3,"ngModel","ngModelChange"],["class","photo-content",4,"ngIf"],["class","header-txt-con",4,"ngIf"],[1,"header-txt-con"],[1,"text-content"],[1,"qoutes-txt"],[1,"para-txt"],[1,"header-img",3,"src"],[1,"photo-content"],[1,"heading"],[1,"flex-content"],[1,"photo-date-details"],[1,"date-txt"],[1,"day-txt"],[1,"photo-resize"],["src","../../../assets/icon/large-grid-img-active.svg","class","large-grid-icon",3,"click",4,"ngIf"],["src","../../../assets/icon/large-grid-img.svg","class","large-grid-icon",3,"click",4,"ngIf"],["src","../../../assets/icon/small-grid-img.svg","class","small-grid-icon",3,"click",4,"ngIf"],["src","../../../assets/icon/small-grid-img-active.svg","class","small-grid-icon",3,"click",4,"ngIf"],["name","filter-outline",1,"filter-icon",3,"click"],[1,"content"],["src","../../../assets/icon/large-grid-img-active.svg",1,"large-grid-icon",3,"click"],["src","../../../assets/icon/large-grid-img.svg",1,"large-grid-icon",3,"click"],["src","../../../assets/icon/small-grid-img.svg",1,"small-grid-icon",3,"click"],["src","../../../assets/icon/small-grid-img-active.svg",1,"small-grid-icon",3,"click"],["size-xs","6","size-sm","6","size-md","6","size-lg","3","size-lx","3",4,"ngFor","ngForOf"],["size-xs","6","size-sm","6","size-md","6","size-lg","3","size-lx","3"],[1,"card"],[1,"img","content"],[1,"content-img",3,"src"],["src","../../../assets/icon/pencil-icon.svg",1,"edit-icon",3,"click"],[1,"txt-content"],[1,"content-2"],[1,"tittle-txt"],[1,"note-txt"],[1,"img-grp"],["name","trash-outline",1,"delete-icon",3,"click"],["src","../../../assets/icon/home-mic-icon.svg",1,"mic-icon",3,"click"],["size-xs","3","size-sm","3","size-md","6","size-lg","3","size-lx","3",4,"ngFor","ngForOf"],["size-xs","3","size-sm","3","size-md","6","size-lg","3","size-lx","3"],["class","grid-content-img",3,"src","click",4,"ngIf"],[1,"grid-content-img",3,"src","click"],[1,"all-folder-section"],[1,"recently-txt"],["src","../../../assets/icon/three-dot-icon.svg","id","popover-button",1,"three-dot-icon"],["trigger","popover-button",1,"ionic-popover",3,"dismissOnSelect"],["class","all-folder-grid",3,"click",4,"ngFor","ngForOf"],[1,"ionic-list"],[1,"option-txt","mb-12"],[1,"option-txt",3,"click"],[1,"all-folder-grid",3,"click"],["class","not-img folder-img",4,"ngIf"],["alt","","class","folder-img",3,"src",4,"ngIf"],[1,"folder-content"],[1,"folder-name"],[1,"image-number"],[1,"not-img","folder-img"],["alt","",1,"folder-img",3,"src"],[1,"create-folder-section"],[1,"folder-form-header"],["src","../../../assets/icon/left-arrow-back.svg",1,"back-icon",3,"click"],[1,"new-folder-txt"],[1,"inp-bx"],[1,"lb-txt"],["placeholder","Enter folder name",1,"ion-input-field",3,"ngModel","ngModelChange"],[1,"btn-grp"],[1,"create-folder-btn",3,"click"],[1,"cancel-btn",3,"click"],[1,"ion-footer"],[1,"footer-toolbar"],[1,"center-algin"],[1,"camera-btn","left-radius-btn",3,"change"],["src","../../../assets/icon/image-upload-icon.svg",1,"camera-img"],["name","files","type","file","id","bannerImg","accept","image/*",1,"file-upload-btn",3,"change"],[1,"camera-btn","right-radius-btn",3,"click"],["src","../../../assets/icon/camera-icon.svg",1,"camera-img"],["class","camera-btn right-radius-btn",3,"click",4,"ngIf"],["src","../../../assets/icon/create-new-folder.svg",1,"camera-img"]],template:function(e,n){1&e&&(t.YNc(0,w,12,6,"ion-header",0),t.TgZ(1,"ion-content",1)(2,"div",2),t.YNc(3,U,4,3,"div",3),t.YNc(4,L,8,2,"div",4),t.YNc(5,R,14,1,"div",5),t.qZA(),t.YNc(6,D,9,1,"div",6),t.qZA()),2&e&&(t.Q6J("ngIf",n.ion_header),t.xp6(1),t.Q6J("fullscreen",!0),t.xp6(2),t.Q6J("ngIf",n.all_photos),t.xp6(1),t.Q6J("ngIf",n.all_folders),t.xp6(1),t.Q6J("ngIf",n.Create_folder_form),t.xp6(1),t.Q6J("ngIf",n.ion_footer))},dependencies:[d.mk,d.sg,d.O5,g.JJ,g.On,c.YG,c.wI,c.W2,c.Gu,c.gu,c.pK,c.q_,c.zc,c.Nd,c.VI,c.sr,c.d8,c.j9,d.uU,Z.g],styles:['*[_ngcontent-%COMP%]{margin:0}.menu-btn[_ngcontent-%COMP%]{--background: none;--box-shadow: none}.menu-icon[_ngcontent-%COMP%]{background:var(--ion-flied-primary);padding:7px;border-radius:8px;width:2.4rem}.search-icon[_ngcontent-%COMP%]{background:var(--ion-flied-primary);padding:10px;border-radius:8px;width:2.4rem}.header-con[_ngcontent-%COMP%]{display:flex}.header-heading[_ngcontent-%COMP%]{padding:0}.bar-slider[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center}.slide-txt[_ngcontent-%COMP%]{margin:0 26px;cursor:pointer;text-align:center}.active-tab[_ngcontent-%COMP%]{border-bottom:2px solid #1c50ff;padding-bottom:7px;font-weight:700}.home-page[_ngcontent-%COMP%]{margin:30px 18px}.header-txt-con[_ngcontent-%COMP%]{background:var(--ion-box-primary);position:relative;display:flex;border-radius:12px;padding:20px;margin-top:12px}.para-txt[_ngcontent-%COMP%]{width:50%;color:#747474;font-size:13px;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.qoutes-txt[_ngcontent-%COMP%]{font-size:50px;margin-top:-20px!important;margin-right:7px;color:#000}.header-img[_ngcontent-%COMP%]{border-radius:100px;width:162px;height:162px;object-fit:cover;position:absolute;right:0;top:-27px;bottom:0px;background:white}.photo-content[_ngcontent-%COMP%]{margin-top:30px}.heading[_ngcontent-%COMP%]{margin-bottom:12px}.date-txt[_ngcontent-%COMP%], .day-txt[_ngcontent-%COMP%]{font-size:13px}.card[_ngcontent-%COMP%]{background:var(--ion-box-primary);border-radius:6px;padding:5px}.content-img[_ngcontent-%COMP%]{width:100%;height:8rem;object-fit:cover;border-radius:6px;background:white}.grid-content-img[_ngcontent-%COMP%]{width:100%;height:4.5rem;object-fit:cover;border-radius:10px}.txt-content[_ngcontent-%COMP%]{display:flex;width:100%;height:10.5vh}.note-txt[_ngcontent-%COMP%]{font-size:10px;line-height:15px;color:#747474;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.mic-icon[_ngcontent-%COMP%]{background:#fff;border-radius:60px;height:30px;width:30px;padding:4px;margin:auto auto 0}.ion-footer[_ngcontent-%COMP%]{display:flex;justify-content:center}.footer-toolbar[_ngcontent-%COMP%]{position:fixed;bottom:35px;justify-content:center}.camera-btn[_ngcontent-%COMP%]{--background: #1c50ff;width:78px;height:60px;--box-shadow: none}.left-radius-btn[_ngcontent-%COMP%]{--border-radius: 28px 0px 0px 28px}.right-radius-btn[_ngcontent-%COMP%]{--border-radius: 0px 28px 28px 0px}.footer-md[_ngcontent-%COMP%]:before{background-image:none}.container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;height:100%}code[_ngcontent-%COMP%]{white-space:pre-wrap}.action-sheet-group[_ngcontent-%COMP%], .my-custom-class[_ngcontent-%COMP%]   .action-sheet-group[_ngcontent-%COMP%]{background:#e5e5e5}.file-upload-btn[_ngcontent-%COMP%]{font-size:100px;position:absolute;left:0;top:0;opacity:0}.content[_ngcontent-%COMP%]{width:100%}.content-2[_ngcontent-%COMP%]{width:75%}.flex-content[_ngcontent-%COMP%]{display:flex;margin-bottom:10px}.large-grid-icon[_ngcontent-%COMP%]{margin-left:10px}.small-grid-icon[_ngcontent-%COMP%]{margin-left:10px;margin-bottom:-3px}.photo-resize[_ngcontent-%COMP%]{margin:auto 0 auto auto!important}.recently-txt[_ngcontent-%COMP%]{font-size:16px;line-height:24px;color:#000}.three-dot-icon[_ngcontent-%COMP%]{margin:auto 0 auto auto!important;cursor:pointer}.all-folder-grid[_ngcontent-%COMP%]{position:relative;margin-top:3px}.folder-content[_ngcontent-%COMP%]{position:absolute;bottom:15px;left:15px;z-index:1000}.folder-name[_ngcontent-%COMP%]{font-size:24px;line-height:36px;color:#fff}.image-number[_ngcontent-%COMP%]{font-size:12px;line-height:18px;color:#bebebe;margin-top:-7px}.folder-img[_ngcontent-%COMP%]{object-fit:cover;background:linear-gradient(360deg,#000000 0%,rgba(0,0,0,0) 55.51%);border-radius:20px;height:20vh;width:100%}.all-folder-grid[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;border-radius:20px;height:20vh;background:linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,.65) 100%)}.not-img[_ngcontent-%COMP%]{object-fit:cover;background:linear-gradient(360deg,#000000 0%,rgba(135,135,135,.32) 55.51%);border-radius:20px;height:20vh;width:100%;margin-bottom:10px}@media screen and (max-width: 367px){.slide-txt[_ngcontent-%COMP%]{margin:0 8px;font-size:14px}}.more-option-popup[_ngcontent-%COMP%]{background:#ffffff;box-shadow:0 4px 20px #00000026;border-radius:7px;padding:10px 30px 5px 20px;position:absolute;z-index:1000;right:28px}.center-algin[_ngcontent-%COMP%]{background:#1c50ff;display:inline-flex;border-radius:28px}.folder-form-header[_ngcontent-%COMP%]{display:flex}.new-folder-txt[_ngcontent-%COMP%]{margin-left:20px;font-size:18px;color:#000}.ion-input-field[_ngcontent-%COMP%]{height:var(--ion-btn-height);background:var(--ion-flied-primary);border-radius:18px;padding:0 10px!important;color:var(--ion-color-step-500);font-weight:400}.inp-bx[_ngcontent-%COMP%]{margin:50px 0 10px}.lb-txt[_ngcontent-%COMP%]{margin-bottom:8px}.btn-grp[_ngcontent-%COMP%]{display:grid}.create-folder-btn[_ngcontent-%COMP%]{--background: #1c50ff;--border-radius: 15px;height:var(--ion-btn-height);margin-top:12px;--box-shadow: none;text-transform:capitalize}.cancel-btn[_ngcontent-%COMP%]{--background: var(--ion-flied-primary);--border-radius: 15px;height:var(--ion-btn-height);margin-top:12px;--box-shadow: none;color:#000;text-transform:capitalize}.img.content[_ngcontent-%COMP%]{position:relative}.edit-icon[_ngcontent-%COMP%]{position:absolute;right:5px;background:#fff3df;top:5px;border-radius:30px;padding:7px}.img-grp[_ngcontent-%COMP%]{text-align:center;width:25%;position:absolute;right:5px;bottom:6px}.delete-icon[_ngcontent-%COMP%]{background:#fff;border-radius:60px;height:18px;width:18px;padding:8px;margin:auto auto 0}.filter-icon[_ngcontent-%COMP%]{font-size:22px;margin-left:6px}.text-content[_ngcontent-%COMP%]{display:flex;width:100%}.inp-c[_ngcontent-%COMP%]{padding:0 0 30px}ion-popover[_ngcontent-%COMP%]{--width: 120px}ion-list.ionic-list[_ngcontent-%COMP%]{padding:9px}.mb-12[_ngcontent-%COMP%]{margin-bottom:12px}']}),o})()}];let B=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.Bz.forChild($),_.Bz]}),o})();var V=l(4466);let W=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,g.u5,c.Pc,B,V.m,g.UX]}),o})()}}]);