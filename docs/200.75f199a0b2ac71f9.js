"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[200],{5200:(j,p,r)=>{r.r(p),r.d(p,{PosViewModule:()=>P});var s=r(177),c=r(126),n=r(4341),k=r(3174),t=r(9590),v=r(1314);let h=(()=>{class o{transform(e,a){let i=0,l=a.split(",");return e.forEach(m=>{let d=0;l.forEach((_,R)=>{let f=_.substring(0,1),B=_.substring(1,_.length),b=parseFloat(m[B]);"+"==f?d+=b:"-"==f?d-=b:"*"==f?d*=b:"/"==f?d/=b:d=parseFloat(m[_]||0)}),i+=d}),i}static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275pipe=t.EJ8({name:"sum",type:o,pure:!0})}return o})();const g=["modalBayar"];function y(o,u){if(1&o){const e=t.RV6();t.j41(0,"div",29)(1,"div",30),t.bIt("click",function(){const i=t.eBV(e).$implicit,l=t.XpG();return t.Njj(l.addItem(i))}),t.j41(2,"div",31)(3,"div",32),t.EFF(4),t.j41(5,"p",23),t.EFF(6),t.nI1(7,"number"),t.k0s()()()()()}if(2&o){const e=u.$implicit;t.R7$(4),t.SpI(" ",e.nama_produk," "),t.R7$(2),t.JRh(t.bMT(7,2,e.harga_jual))}}function w(o,u){if(1&o){const e=t.RV6();t.j41(0,"div",33)(1,"div",31)(2,"button",34),t.bIt("click",function(){const i=t.eBV(e).$implicit;return t.Njj(i.get("jumlah_jual").setValue(i.get("jumlah_jual").value-1))}),t.nrm(3,"i",35),t.k0s(),t.j41(4,"div",32)(5,"h5",23),t.EFF(6),t.k0s(),t.j41(7,"div",21)(8,"div",22)(9,"div",36)(10,"b"),t.EFF(11),t.k0s()()(),t.j41(12,"div"),t.EFF(13),t.nI1(14,"number"),t.k0s()()(),t.j41(15,"button",37),t.bIt("onYes",function(){const i=t.eBV(e).index,l=t.XpG();return t.Njj(l.removeItem(i))}),t.nrm(16,"i",38),t.k0s(),t.j41(17,"button",39),t.bIt("click",function(){const i=t.eBV(e).$implicit;return t.Njj(i.get("jumlah_jual").setValue(i.get("jumlah_jual").value+1))}),t.nrm(18,"i",40),t.k0s()()()}if(2&o){const e=u.$implicit;t.Y8G("formGroupName",u.index),t.R7$(2),t.Y8G("disabled",1==e.get("jumlah_jual").value),t.R7$(4),t.JRh(e.get("produk").get("nama_produk").value),t.R7$(5),t.JRh(e.get("jumlah_jual").value),t.R7$(2),t.SpI(" Rp. ",t.bMT(14,5,e.get("jumlah_jual").value*e.get("harga_jual").value)," ")}}function F(o,u){if(1&o&&(t.j41(0,"div",41)(1,"div",42)(2,"div",43)(3,"div",44),t.EFF(4,"Nama Produk"),t.k0s(),t.nrm(5,"input",45),t.k0s()(),t.j41(6,"div",12)(7,"button",46),t.EFF(8,"Ok"),t.k0s()()()),2&o){const e=t.XpG();t.Y8G("formGroup",e.formItem)}}function J(o,u){if(1&o){const e=t.RV6();t.j41(0,"div",54)(1,"div",55),t.nrm(2,"select",56),t.k0s(),t.nrm(3,"input",57),t.j41(4,"div",58)(5,"button",59),t.bIt("click",function(){const i=t.eBV(e).index,l=t.XpG(2);return t.Njj(l.removeBayar(i))}),t.EFF(6,"Hapus"),t.k0s()()()}if(2&o){const e=u.index;t.Y8G("formGroupName",e),t.R7$(5),t.Y8G("disabled",0==e)}}function E(o,u){if(1&o){const e=t.RV6();t.j41(0,"button",60),t.bIt("click",function(){t.eBV(e);const i=t.XpG(2);return t.Njj(i.saveJual())}),t.EFF(1,"Selesai"),t.k0s()}if(2&o){const e=t.XpG(2);t.Y8G("disabled",e.formJual.invalid)}}function V(o,u){if(1&o){const e=t.RV6();t.j41(0,"button",60),t.bIt("click",function(){t.eBV(e);const i=t.XpG(2);return t.Njj(i.updateJual())}),t.EFF(1,"Update Penjualan"),t.k0s()}if(2&o){const e=t.XpG(2);t.Y8G("disabled",e.formJual.invalid)}}function C(o,u){if(1&o){const e=t.RV6();t.j41(0,"div",41)(1,"div",7)(2,"div",21)(3,"h1",47),t.EFF(4,"Total"),t.k0s()()(),t.j41(5,"div",48),t.DNE(6,J,7,2,"div",49),t.j41(7,"button",50),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.addBayar())}),t.EFF(8,"Tambah Pembayaran Lain"),t.k0s()(),t.j41(9,"div",12)(10,"div",21)(11,"h1",51),t.EFF(12,"Dibayar"),t.k0s()(),t.j41(13,"div",21)(14,"h3",22),t.EFF(15,"Sisa"),t.k0s()()(),t.j41(16,"div",12)(17,"button",52),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.cek())}),t.EFF(18,"Cek"),t.k0s(),t.DNE(19,E,2,1,"button",53)(20,V,2,1,"button",53),t.k0s()()}if(2&o){const e=t.XpG();t.Y8G("formGroup",e.formJual),t.R7$(6),t.Y8G("ngForOf",e.formJual.get("bayar").controls),t.R7$(13),t.Y8G("ngIf",!e.formJual.get("id").value),t.R7$(),t.Y8G("ngIf",e.formJual.get("id").value)}}let I=(()=>{class o{keyboard(e){"Enter"==e.key?(this.findByBarcode(this.keys),this.keys=""):this.keys+=e.key}constructor(e,a){this.produk=e,this.modal=a,this.listJual=[],this.keys="",this.token="",this.formJual=new n.gE({id:new n.MJ(""),tanggal:new n.MJ("",n.k0.required),no_faktur:new n.MJ("",n.k0.required),total_potongan:new n.MJ(""),total_transaksi:new n.MJ(""),total_bayar:new n.MJ(""),konsumen:new n.gE({id:new n.MJ("",n.k0.required),nama_konsumen:new n.MJ("")}),item:new n.Yp([],n.k0.required),bayar:new n.Yp([],n.k0.required)}),this.formItem=this.createItem(),this.token=localStorage.getItem("token")}ngOnInit(){this.resetForm()}resetForm(){let e=(new Date).getTime();this.formJual.reset(),this.formJual.get("item").clear(),this.formJual.get("bayar").clear(),this.formJual.patchValue({tanggal:Date(),no_faktur:"FK-"+e}),this.formJual.get("bayar").push(this.createBayar())}createItem(e={produk:{}}){return new n.gE({id:new n.MJ(e.id),jumlah_jual:new n.MJ(e.jumlah_jual||1,n.k0.required),harga_jual:new n.MJ(e.harga_jual||e.produk.harga_jual,n.k0.required),potongan:new n.MJ(e.potongan||0,n.k0.required),produk:new n.gE({id:new n.MJ(e.produk.id,n.k0.required),nama_produk:new n.MJ(e.produk.nama_produk)})})}createBayar(e={rekening:{}}){return new n.gE({id:new n.MJ(e.id),tanggal_bayar:new n.MJ(e.tanggal_bayar||Date(),n.k0.required),jumlah_bayar:new n.MJ(e.jumlah_bayar,n.k0.required),rekening:new n.gE({id:new n.MJ(e.rekening.id,n.k0.required),nama_rekening:new n.MJ(e.rekening.nama_rekening)})})}addBayar(){this.formJual.get("bayar").push(this.createBayar())}removeBayar(e){this.formJual.get("bayar").removeAt(e)}findByBarcode(e){}addItem(e){let a=this.formJual.get("item").value.findIndex(i=>i.produk.id==e.id);a<0?this.formJual.get("item").push(this.createItem({produk:e})):this.formJual.get("item").at(a).get("jumlah_jual").setValue(this.formJual.get("item").at(a).get("jumlah_jual").value+1)}removeItem(e){this.formJual.get("item").removeAt(e)}openModalBayar(){this.modal.open(this.modalBayar,{windowClass:"modal-animation",ariaLabelledBy:"modal-basic-title",size:"md"}).result.then(e=>{},e=>{})}openModalCariKonsumen(){}openModalCariPenjualan(){}saveJual(){}updateJual(){}cek(){console.log(this.formJual)}static#t=this.\u0275fac=function(a){return new(a||o)(t.rXU(k.X),t.rXU(v.Bq))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["lib-pos-view"]],viewQuery:function(a,i){if(1&a&&t.GBs(g,5),2&a){let l;t.mGM(l=t.lsd())&&(i.modalBayar=l.first)}},hostBindings:function(a,i){1&a&&t.bIt("keyup",function(m){return i.keyboard(m)},!1,t.EBC)},decls:55,vars:19,consts:[["cariProduk",""],["modalDetailItem",""],["modalBayar",""],[1,"container-fluid"],[1,"row"],[1,"col-md-8",2,"padding","1vh"],[1,"card","m-0","shadow","rounded-xl",2,"height","98vh"],[1,"card-header","p-2"],["type","text","placeholder","Cari produk",1,"form-control","rounded-xl"],[1,"card-body","overflow-auto","p-2"],[1,"row","g-2"],["class","col-md-4 pr-0",4,"ngFor","ngForOf"],[1,"card-footer","p-2"],["routerLink","setting",1,"btn","btn-outline-primary","rounded-xl"],[1,"bi-gear"],[1,"col-md-4",2,"padding","1vh",3,"formGroup"],[1,"card-header","p-2","d-flex","justify-content-between"],[1,"mb-1"],[1,"float-right","mb-1"],["formArrayName","item",1,"card-body","overflow-auto","p-2"],["class","card shadow rounded-xl mb-2",3,"formGroupName",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"flex-grow-1"],[1,"mb-0"],[1,"btn","btn-outline-info","rounded-xl",3,"click"],[1,"bi-search"],[1,"bi-card-list"],[1,"btn","btn-primary","float-right","rounded-xl",3,"click","disabled"],[1,"bi-credit-card"],[1,"col-md-4","pr-0"],[1,"card","shadow","rounded-xl","mb-2",3,"click"],[1,"card-body","d-flex","p-0"],[1,"flex-grow-1","p-2","text-truncate"],[1,"card","shadow","rounded-xl","mb-2",3,"formGroupName"],[1,"btn","rounded-left-xl","rounded-0","btn-info",3,"click","disabled"],[1,"bi-dash-circle"],[1,"d-flex","align-item-beetween"],["confirmBox","","msg","Apakah anda yakin untuk menghapus item ini ?",1,"btn","rounded-0","btn-danger",3,"onYes"],[1,"bi-trash"],[1,"btn","rounded-right-xl","rounded-0","btn-info",3,"click"],[1,"bi-plus-circle"],[1,"card","shadow",3,"formGroup"],[1,"card-body","p-2"],[1,"form-group"],[1,"form-label"],["type","text","formControlName","nama_produk",1,"form-control"],[1,"btn","btn-primary","rounded-xl","float-right"],[1,"mb-0","flex-grow-1"],["formArrayName","bayar",1,"card-body","p-2"],["class","input-group mb-3",3,"formGroupName",4,"ngFor","ngForOf"],[1,"btn","btn-info","btn-sm","btn-block",3,"click"],[1,"flex-grow-1","text-muted"],[1,"btn","btn-warning",3,"click"],["class","btn btn-primary rounded-xl float-right",3,"disabled","click",4,"ngIf"],[1,"input-group","mb-3",3,"formGroupName"],["formGroupName","rekening",1,"input-group-prepend"],["formControlName","id","id","inputGroupSelect02",1,"custom-select"],["type","text","formControlName","jumlah_bayar",1,"form-control"],[1,"input-group-append"],[1,"btn","btn-danger",3,"click","disabled"],[1,"btn","btn-primary","rounded-xl","float-right",3,"click","disabled"]],template:function(a,i){if(1&a){const l=t.RV6();t.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7),t.nrm(5,"input",8,0),t.k0s(),t.j41(7,"div",9)(8,"div",10),t.DNE(9,y,8,4,"div",11),t.nI1(10,"async"),t.k0s()(),t.j41(11,"div",12)(12,"button",13),t.nrm(13,"i",14),t.EFF(14," Pengaturan "),t.k0s()()()(),t.j41(15,"div",15)(16,"div",6)(17,"div",16)(18,"h3",17),t.EFF(19),t.k0s(),t.j41(20,"h3",18),t.EFF(21),t.nI1(22,"sum"),t.nI1(23,"number"),t.k0s()(),t.j41(24,"div",16)(25,"i"),t.EFF(26),t.k0s(),t.j41(27,"i"),t.EFF(28),t.nI1(29,"date"),t.k0s()(),t.j41(30,"div",19),t.DNE(31,w,19,7,"div",20),t.k0s(),t.j41(32,"div",12)(33,"div",21)(34,"div",22)(35,"i"),t.EFF(36,"Konsumen"),t.k0s(),t.j41(37,"p",23),t.EFF(38),t.k0s()(),t.j41(39,"div")(40,"button",24),t.bIt("click",function(){return t.eBV(l),t.Njj(i.openModalCariKonsumen())}),t.nrm(41,"i",25),t.EFF(42," Cari "),t.k0s()()()(),t.j41(43,"div",12)(44,"button",24),t.bIt("click",function(){return t.eBV(l),t.Njj(i.openModalCariPenjualan())}),t.nrm(45,"i",26),t.EFF(46," History "),t.k0s(),t.j41(47,"button",27),t.bIt("click",function(){return t.eBV(l),t.Njj(i.openModalBayar())}),t.nrm(48,"i",28),t.EFF(49," Pembayaran "),t.k0s()()()()()(),t.DNE(50,F,9,1,"ng-template",null,1,t.C5r)(52,C,21,4,"ng-template",null,2,t.C5r),t.nrm(54,"router-outlet")}2&a&&(t.R7$(9),t.Y8G("ngForOf",t.bMT(10,9,i.produk.listProduk)),t.R7$(6),t.Y8G("formGroup",i.formJual),t.R7$(4),t.SpI("",i.formJual.get("item").length," Item"),t.R7$(2),t.JRh(t.bMT(23,14,t.i5U(22,11,i.formJual.get("item").value,"harga_jual,*jumlah_jual,-potongan"))),t.R7$(5),t.SpI("#",i.formJual.get("no_faktur").value,""),t.R7$(2),t.JRh(t.i5U(29,16,i.formJual.get("tanggal").value,"dd-MM-yyyy")),t.R7$(3),t.Y8G("ngForOf",i.formJual.get("item").controls),t.R7$(7),t.JRh(i.formJual.get("konsumen").value.nama_konsumen),t.R7$(9),t.Y8G("disabled",i.formJual.get("item").invalid))},dependencies:[s.Sq,s.bT,c.n3,c.Wk,n.me,n.wz,n.BC,n.cb,n.j4,n.JD,n.$R,n.v8,s.Jj,s.QX,s.vh,h]})}return o})(),M=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275mod=t.$C({type:o});static#n=this.\u0275inj=t.G2t({imports:[s.MD]})}return o})();const G=[{path:"",component:I,children:[{path:"setting",loadChildren:()=>r.e(686).then(r.bind(r,6686)).then(o=>o.SettingModule)}]}];let P=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275mod=t.$C({type:o});static#n=this.\u0275inj=t.G2t({imports:[s.MD,c.iI.forChild(G),n.YN,n.X1,M]})}return o})()},3174:(j,p,r)=>{r.d(p,{X:()=>k});var s=r(4096),c=r(7469),n=r(9590);let k=(()=>{class t{constructor(){this.listProduk=(0,s.Dd)(()=>c.X.produk.toArray())}static#t=this.\u0275fac=function(g){return new(g||t)};static#e=this.\u0275prov=n.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()}}]);