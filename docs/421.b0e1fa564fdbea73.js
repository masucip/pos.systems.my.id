"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[421],{8421:(E,c,i)=>{i.r(c),i.d(c,{ProdukModule:()=>v});var l=i(177),k=i(7513),f=i(3174),a=i(4341),p=i(7469),t=i(9590),u=i(4512);const b=["modalAdd"];function g(r,s){if(1&r){const o=t.RV6();t.j41(0,"tr")(1,"td",16),t.EFF(2),t.k0s(),t.nrm(3,"td",16),t.j41(4,"td",16),t.EFF(5),t.k0s(),t.j41(6,"td"),t.EFF(7),t.k0s(),t.j41(8,"td",17),t.EFF(9),t.nI1(10,"number"),t.k0s(),t.j41(11,"td",17),t.EFF(12),t.nI1(13,"number"),t.k0s(),t.j41(14,"td",16)(15,"button",18),t.bIt("click",function(){const e=t.eBV(o).$implicit,d=t.XpG();return t.Njj(d.detail(e))}),t.EFF(16,"Edit"),t.k0s()()()}if(2&r){const o=s.$implicit,n=s.index,e=t.XpG();t.R7$(2),t.JRh((e.page-1)*e.pageSize+n+1),t.R7$(3),t.JRh(o.barcode),t.R7$(2),t.JRh(o.nama_produk),t.R7$(2),t.JRh(t.bMT(10,5,o.harga_beli)),t.R7$(3),t.JRh(t.bMT(13,7,o.harga_jual))}}function _(r,s){if(1&r){const o=t.RV6();t.j41(0,"button",32),t.bIt("click",function(){t.eBV(o);const e=t.XpG(2);return t.Njj(e.add(e.form.value))}),t.nrm(1,"i",33),t.EFF(2," Simpan "),t.k0s()}if(2&r){const o=t.XpG(2);t.Y8G("disabled",o.form.invalid)}}function h(r,s){if(1&r){const o=t.RV6();t.j41(0,"button",34),t.bIt("click",function(){t.eBV(o);const e=t.XpG(2);return t.Njj(e.update(e.form.value))}),t.nrm(1,"i",35),t.EFF(2," Update "),t.k0s()}if(2&r){const o=t.XpG(2);t.Y8G("disabled",o.form.invalid)}}function F(r,s){if(1&r&&(t.j41(0,"div",1)(1,"div",19)(2,"div",20)(3,"div",21),t.EFF(4,"Nama Produk"),t.k0s(),t.nrm(5,"input",22),t.k0s(),t.j41(6,"div",23)(7,"div",24)(8,"div",21),t.EFF(9,"Barcode"),t.k0s(),t.nrm(10,"input",25),t.k0s(),t.j41(11,"div",24)(12,"div",21),t.EFF(13,"Harga Beli"),t.k0s(),t.nrm(14,"input",26),t.k0s(),t.j41(15,"div",24)(16,"div",21),t.EFF(17,"Harga Jual"),t.k0s(),t.nrm(18,"input",27),t.k0s()()(),t.j41(19,"div",14)(20,"button",28),t.nrm(21,"i",29),t.EFF(22," Batal "),t.k0s(),t.DNE(23,_,3,1,"button",30)(24,h,3,1,"button",31),t.k0s()()),2&r){let o,n;const e=t.XpG();t.R7$(),t.Y8G("formGroup",e.form),t.R7$(22),t.Y8G("ngIf",!(null!=(o=e.form.get("id"))&&o.value)),t.R7$(),t.Y8G("ngIf",null==(n=e.form.get("id"))?null:n.value)}}const j=[{path:"",component:(()=>{class r{constructor(o,n){this.produk=o,this.modal=n,this.page=1,this.pageSize=10,this.form=new a.gE({id:new a.MJ(0,a.k0.nullValidator),barcode:new a.MJ("",a.k0.required),nama_produk:new a.MJ("",a.k0.required),harga_beli:new a.MJ("",a.k0.required),harga_jual:new a.MJ("",a.k0.required)})}ngOnInit(){}openForm(){this.modal.open(this.modalAdd,{windowClass:"modal-animation",ariaLabelledBy:"modal-basic-title",size:"lg"}).result.then(n=>{},n=>{this.form.reset()})}add(o){let n=this.form.value;delete n.id,p.X.produk.add(n),this.form.reset()}detail(o){this.form.patchValue(o),this.openForm()}update(o){let n=this.form.value;p.X.produk.update(n.id,n),this.form.reset()}delete(){}static#t=this.\u0275fac=function(n){return new(n||r)(t.rXU(f.X),t.rXU(u.Bq))};static#o=this.\u0275cmp=t.VBU({type:r,selectors:[["lib-produk"]],viewQuery:function(n,e){if(1&n&&t.GBs(b,5),2&n){let d;t.mGM(d=t.lsd())&&(e.modalAdd=d.first)}},decls:30,vars:9,consts:[["modalAdd",""],[1,"card","shadow"],[1,"card-header","p-2","d-flex"],[1,"flex-grow-1"],[1,"btn","rounded-xl","btn-sm","btn-outline-info",3,"click"],[1,"bi-plus-circle"],[1,"card-body","p-2"],[1,"table","table-sm","table-bordered"],[1,"text-center"],["width","5%"],["width","10%"],["width","15%"],["width","35%"],[4,"ngFor","ngForOf"],[1,"card-footer"],[3,"pageChange","page","pageSize","maxSize","rotate","boundaryLinks","collectionSize"],["align","center"],["align","right"],[1,"btn","rounded-xl","btn-info","btn-sm",3,"click"],[1,"card-body","p-2",3,"formGroup"],[1,"form-group"],[1,"form-label"],["type","text","formControlName","nama_produk",1,"form-control"],[1,"form-row"],[1,"form-group","col-md-4"],["type","text","formControlName","barcode",1,"form-control"],["type","text","formControlName","harga_beli",1,"form-control"],["type","text","formControlName","harga_jual",1,"form-control"],[1,"btn","rounded-xl","btn-warning"],[1,"bi-arrow-left"],["class","btn rounded-xl btn-primary float-right",3,"disabled","click",4,"ngIf"],["class","btn rounded-xl btn-info float-right",3,"disabled","click",4,"ngIf"],[1,"btn","rounded-xl","btn-primary","float-right",3,"click","disabled"],[1,"bi-save"],[1,"btn","rounded-xl","btn-info","float-right",3,"click","disabled"],[1,"bi-arrow-clockwise"]],template:function(n,e){if(1&n){const d=t.RV6();t.j41(0,"div",1)(1,"div",2)(2,"h3",3),t.EFF(3,"Produk"),t.k0s(),t.j41(4,"div")(5,"button",4),t.bIt("click",function(){return t.eBV(d),t.Njj(e.openForm())}),t.nrm(6,"i",5),t.EFF(7," Tambah "),t.k0s()()(),t.j41(8,"div",6)(9,"table",7)(10,"tr",8)(11,"td",9),t.EFF(12,"No"),t.k0s(),t.j41(13,"td",10),t.EFF(14,"foto"),t.k0s(),t.j41(15,"td",11),t.EFF(16,"Barcode"),t.k0s(),t.j41(17,"td",12),t.EFF(18,"Nama Produk"),t.k0s(),t.j41(19,"td",10),t.EFF(20,"Harga Beli"),t.k0s(),t.j41(21,"td",10),t.EFF(22,"Harga Jual"),t.k0s(),t.nrm(23,"td",11),t.k0s(),t.DNE(24,g,17,9,"tr",13),t.nI1(25,"async"),t.k0s()(),t.j41(26,"div",14)(27,"ngb-pagination",15),t.mxI("pageChange",function(m){return t.eBV(d),t.DH7(e.page,m)||(e.page=m),t.Njj(m)}),t.k0s()()(),t.DNE(28,F,25,3,"ng-template",null,0,t.C5r)}2&n&&(t.R7$(24),t.Y8G("ngForOf",t.bMT(25,7,e.produk.listProduk)),t.R7$(3),t.R50("page",e.page),t.Y8G("pageSize",e.pageSize)("maxSize",5)("rotate",!0)("boundaryLinks",!0)("collectionSize",100))},dependencies:[l.Sq,l.bT,u.s5,a.me,a.BC,a.cb,a.j4,a.JD,l.Jj,l.QX]})}return r})()}];let v=(()=>{class r{static#t=this.\u0275fac=function(n){return new(n||r)};static#o=this.\u0275mod=t.$C({type:r});static#n=this.\u0275inj=t.G2t({imports:[l.MD,k.iI.forChild(j),u.UN,a.YN,a.X1]})}return r})()}}]);