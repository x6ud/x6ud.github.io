(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-810078fa"],{"49d7":function(t,a,i){"use strict";i.r(a);var c=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"column-1",staticStyle:{width:"360px"}},[i("a-select",{staticStyle:{width:"100%","margin-bottom":"8px"},model:{value:t.model,callback:function(a){t.model=a},expression:"model"}},t._l(t.models,function(a){return i("a-select-option",{key:a.path,attrs:{value:a.path}},[t._v("\n                "+t._s(a.name)+"\n            ")])}),1),i("model-viewer",{attrs:{width:360,height:360,model:t.model,"rotate-x":t.rotateX,"rotate-y":t.rotateY,"rotate-z":t.rotateZ,zoom:t.zoom},on:{"update:rotateX":function(a){t.rotateX=a},"update:rotate-x":function(a){t.rotateX=a},"update:rotateY":function(a){t.rotateY=a},"update:rotate-y":function(a){t.rotateY=a},"update:rotateZ":function(a){t.rotateZ=a},"update:rotate-z":function(a){t.rotateZ=a},"update:zoom":function(a){t.zoom=a}}}),i("div",{staticClass:"slider-wrapper"},[i("span",{staticClass:"prefix"},[t._v("X: "+t._s(t.rotateX)+"; Y: "+t._s(t.rotateY)+"; Z: ")]),i("a-slider",{staticClass:"slider",attrs:{included:!1,min:-180,max:180},model:{value:t.rotateZ,callback:function(a){t.rotateZ=a},expression:"rotateZ"}}),i("div",{staticClass:"postfix"},[i("span",{staticStyle:{width:"2.5em","text-align":"center",display:"inline-block"}},[t._v(t._s(t.rotateZ))]),i("a-button",{attrs:{size:"small"},on:{click:function(a){t.rotateX=t.rotateY=t.rotateZ=0}}},[t._v("Reset")])],1)],1)],1),i("div",{staticClass:"column-2"},[i("div",{staticClass:"toolbar"},[i("a-input",{staticStyle:{"margin-bottom":"8px","margin-right":"8px"},attrs:{placeholder:"Input image url"},model:{value:t.imageUrl,callback:function(a){t.imageUrl=a},expression:"imageUrl"}}),i("a-button",{staticStyle:{"margin-right":"8px"},on:{click:t.getOne}},[t._v("Get One ("+t._s(t.unregistered.length)+")")]),i("a-button",{on:{click:t.save}},[t._v("Save")])],1),i("a-select",{staticStyle:{width:"100%","margin-bottom":"8px"},attrs:{mode:"tags",placeholder:"Input tags"},model:{value:t.tags,callback:function(a){t.tags=a},expression:"tags"}}),i("div",{staticClass:"image-clip",staticStyle:{height:"428px"}},[i("div",{staticClass:"side"},[i("div",{staticClass:"small"},[t.imageUrl?i("img",{style:t.smallImageStyle,attrs:{src:t.imageUrl,alt:""}}):t._e()]),i("div",{staticClass:"slider-wrapper"},[i("span",{staticClass:"prefix"},[t._v("Size")]),i("a-slider",{staticClass:"slider",attrs:{included:!1,min:0,max:t.imageClipMaxSize},model:{value:t.imageClip.size,callback:function(a){t.$set(t.imageClip,"size",a)},expression:"imageClip.size"}})],1)]),i("div",{ref:"imageClipLarge",staticClass:"main"},[i("div",{staticClass:"large",on:{mousemove:t.imageClipDragMove}},[i("a-spin",{attrs:{spinning:t.imageLoading}},[t.imageUrl?i("div",{staticClass:"image",style:t.imageStyle}):t._e()]),t.imageUrl?i("div",{staticClass:"image-clip",style:t.imageClipStyle,on:{mousedown:t.imageClipDragStart}}):t._e()],1),i("div",{staticClass:"slider-wrapper",staticStyle:{width:"100%"}},[i("span",{staticClass:"prefix"},[t._v("Zoom")]),i("a-slider",{staticClass:"slider",attrs:{included:!1,min:10,max:100},model:{value:t.imageZoom,callback:function(a){t.imageZoom=a},expression:"imageZoom"}})],1)])])],1),i("div",{staticClass:"column-3"},[i("div",{staticStyle:{width:"100%","margin-bottom":"8px","text-align":"right"}},[i("span",{staticStyle:{"margin-right":"8px"}},[t._v(t._s(t.data.length))]),i("a-button",{staticStyle:{"margin-right":"8px"},attrs:{size:"small"},on:{click:function(a){return t.importData()}}},[t._v("Import")]),i("a-button",{attrs:{size:"small"},on:{click:function(a){return t.exportData()}}},[t._v("Export")])],1),i("div",{staticClass:"list"},t._l(t.latestRecords,function(a){return i("image-thumb",{key:a.url,staticClass:"item",attrs:{image:a},nativeOn:{click:function(i){return t.load(a)}}},[i("span",{staticClass:"btn-remove",on:{click:function(i){return t.remove(a)}}},[i("a-icon",{attrs:{type:"close"}})],1)])}),1)])])},s=[],e=i("75fc"),r=(i("ac6a"),i("f499")),m=i.n(r),f=(i("20d6"),i("bd86")),p=i("441d"),o=i("6b20"),l=i("3242"),g=["https://farm6.static.flickr.com/5054/5544344747_9a155f9246_b.jpg","https://farm5.static.flickr.com/4224/34823374781_33fa35aac2_b.jpg","https://farm7.static.flickr.com/6139/5934612357_9205a0a947_b.jpg","https://farm9.static.flickr.com/8316/8065788216_60970c11cc_b.jpg","https://farm4.static.flickr.com/3537/3518189885_a06c9a08e6_b.jpg","https://farm8.static.flickr.com/7044/7040139897_821ab65be3_b.jpg","https://farm4.static.flickr.com/3829/13678136055_0122101d48_b.jpg","https://farm4.static.flickr.com/3938/33528597086_94a7884312_b.jpg","https://farm4.static.flickr.com/3064/2669050274_0ebefdb290_b.jpg","https://farm5.static.flickr.com/4198/34567854830_aef085dfa5_b.jpg","https://farm5.static.flickr.com/4203/34567739820_ff2e2f1aae_b.jpg","https://farm9.static.flickr.com/8424/7711175928_d0e837fb1b_b.jpg","https://farm8.static.flickr.com/7385/27660104935_f468319ba8_b.jpg","https://farm5.static.flickr.com/4204/34144944473_bc0f4bc001_b.jpg","https://farm2.static.flickr.com/1510/25085804256_94bac5ee7f_b.jpg","https://farm8.static.flickr.com/7286/8749858425_434bde1742_b.jpg","https://farm5.static.flickr.com/4223/34567779150_719dde8be3_b.jpg","https://farm2.static.flickr.com/1943/44865421834_6eefbd65b1_b.jpg","https://farm4.static.flickr.com/3846/14869397217_4e94f18ccd_b.jpg","https://farm5.static.flickr.com/4219/34567785970_6a1c370d26_b.jpg","https://farm4.static.flickr.com/3353/5744046382_f8464e6333_b.jpg","https://farm6.static.flickr.com/5124/5312039423_6e15445b92_b.jpg","https://farm1.static.flickr.com/31/54226856_803f578dd3_b.jpg","https://farm9.static.flickr.com/8178/8070965173_7059739f76_b.jpg","https://farm5.static.flickr.com/4015/4465956288_66c025bc3e_b.jpg","https://farm7.static.flickr.com/6192/6158274647_3a111541c8_b.jpg","https://farm8.static.flickr.com/7614/16299191983_3fb7ac8aac_b.jpg","https://farm7.static.flickr.com/6124/6024074636_fb30f06b01_b.jpg","https://farm4.static.flickr.com/3645/3454946559_e615793c4a_b.jpg","https://farm5.static.flickr.com/4248/34144966563_ec5c33ab38_b.jpg","https://farm2.static.flickr.com/1159/565720154_ea5c9663fa_b.jpg","https://farm5.static.flickr.com/4248/34112018134_d8840354b4_b.jpg","https://farm3.static.flickr.com/2794/4163339236_86206beae4_b.jpg","https://farm3.static.flickr.com/2656/32774829346_332c7df349_b.jpg","https://farm5.static.flickr.com/4073/4828084533_424f623077_b.jpg","https://farm4.static.flickr.com/3852/14164596078_02262fac56_b.jpg","https://farm5.static.flickr.com/4274/34567754320_bb09de727b_b.jpg","https://farm2.static.flickr.com/1079/1363593259_6474ebb877_b.jpg","https://farm3.static.flickr.com/2235/2516528401_0f9ca896e4_b.jpg","https://farm1.static.flickr.com/240/456862153_384fbf4859_b.jpg","https://farm5.static.flickr.com/4346/36130528013_6ac814fac9_b.jpg","https://farm8.static.flickr.com/7286/27389547253_f6703a2c66_b.jpg","https://farm9.static.flickr.com/8692/16917942122_c5e1b19f45_b.jpg","https://farm5.static.flickr.com/4103/4986471127_12ca27bff3_b.jpg","https://farm4.static.flickr.com/3932/15428509001_270aa8184c_b.jpg","https://farm5.static.flickr.com/4092/5068532322_4607f7c34c_b.jpg","https://farm9.static.flickr.com/8080/29080225990_f608d6c657_b.jpg","https://farm8.static.flickr.com/7328/13903584473_ff6e30e265_b.jpg","https://farm8.static.flickr.com/7220/7283981590_9d5c8099a8_b.jpg","https://farm5.static.flickr.com/4275/34567791860_21f6b9bd9c_b.jpg","https://farm5.static.flickr.com/4011/4282739996_a5aa693a1b_b.jpg","https://farm1.static.flickr.com/824/40270861050_f05660e6a0_b.jpg","https://farm4.static.flickr.com/3137/2480407632_1108a10fc9_b.jpg","https://farm6.static.flickr.com/5698/22561345776_22029d46d0_b.jpg","https://farm4.static.flickr.com/3821/11077785936_0af7ac8de5_b.jpg","https://farm5.static.flickr.com/4250/34955410945_b908e4c77f_b.jpg","https://farm6.static.flickr.com/5200/5821169317_96a317a6cd_b.jpg","https://farm3.static.flickr.com/2920/14018520469_f98725e3a3_b.jpg","https://farm8.static.flickr.com/7653/16731782560_a4efe8a5ea_b.jpg","https://farm1.static.flickr.com/949/42078035631_961f4cd1a3_b.jpg","https://farm5.static.flickr.com/4269/34112004014_69c7826fd9_b.jpg","https://farm5.static.flickr.com/4333/37055981280_d2268b6a89_b.jpg","https://farm8.static.flickr.com/7400/8935561019_2ebf53310d_b.jpg","https://farm5.static.flickr.com/4198/34144959883_b11aa8a0a0_b.jpg","https://farm4.static.flickr.com/3410/3435127362_f7933e253c_b.jpg","https://farm6.static.flickr.com/5326/9700557392_fec7257fcf_b.jpg","https://farm6.static.flickr.com/5786/22561163346_dff2e625ae_b.jpg","https://farm8.static.flickr.com/7428/8714373091_b7969608ae_b.jpg","https://farm5.static.flickr.com/4243/34791675882_e46e078cd2_b.jpg","https://farm5.static.flickr.com/4083/4980424386_b3f18f8c5d_b.jpg","https://farm6.static.flickr.com/5723/23078199444_17ce3439cd_b.jpg","https://farm3.static.flickr.com/2541/3981515401_24b9bbed13_b.jpg","https://farm4.static.flickr.com/3166/2855774122_412c986657_b.jpg","https://farm8.static.flickr.com/7856/46706496212_e221772041_b.jpg","https://farm4.static.flickr.com/3691/9836653624_3556c610e5_b.jpg","https://farm1.static.flickr.com/492/32662184972_dbdbc7d200_b.jpg","https://farm6.static.flickr.com/5460/7205257412_f331c61ffe_b.jpg","https://farm5.static.flickr.com/4103/4986423811_0d06e178b9_b.jpg","https://farm8.static.flickr.com/7155/6549384291_ddd1396526_b.jpg","https://farm4.static.flickr.com/3099/2856570225_94b0494069_b.jpg","https://farm1.static.flickr.com/230/524668871_f6fcc9f2ee_b.jpg","https://farm7.static.flickr.com/6089/6119819220_57f2ed5a46_b.jpg","https://farm8.static.flickr.com/7460/14178760794_176e1f55e8_b.jpg","https://farm9.static.flickr.com/8425/7622943570_82da91ce88_b.jpg","https://farm5.static.flickr.com/4271/34567857980_c8f0a7123e_b.jpg","https://farm8.static.flickr.com/7457/12165532413_c4b1df04e9_b.jpg","https://farm7.static.flickr.com/6208/6041185599_d67bcd8f8c_b.jpg","https://farm6.static.flickr.com/5206/5225965795_82ca62a2b2_b.jpg","https://farm7.static.flickr.com/6199/6119277707_a218066aa0_b.jpg","https://farm9.static.flickr.com/8539/8610384903_5d67e6969d_b.jpg","https://farm1.static.flickr.com/822/39473126200_d31c3b7289_b.jpg","https://farm6.static.flickr.com/5464/9594237761_5e02794eae_b.jpg","https://farm5.static.flickr.com/4128/4847720875_ed2c417f56_b.jpg","https://farm6.static.flickr.com/5308/5635771466_e1a7e5465f_b.jpg","https://farm7.static.flickr.com/6074/6041565536_bc5021da20_b.jpg","https://farm1.static.flickr.com/158/413131082_383cb5466b_b.jpg","https://farm1.static.flickr.com/929/41615400241_e3acae0668_b.jpg","https://farm8.static.flickr.com/7337/9374133369_d407a61ba9_b.jpg","https://farm5.static.flickr.com/4120/4908420154_c915659bf0_b.jpg","https://farm7.static.flickr.com/6123/6013197462_a3725b1bd8_b.jpg","https://farm4.static.flickr.com/3757/9836876906_976b096271_b.jpg","https://farm5.static.flickr.com/4328/35621495560_b3c2f324f4_b.jpg","https://farm8.static.flickr.com/7459/10102443783_66d383e3d2_b.jpg","https://farm5.static.flickr.com/4225/34823332091_98820238ca_b.jpg","https://farm4.static.flickr.com/3317/3426927907_b956ec56aa_b.jpg","https://farm5.static.flickr.com/4204/34567769410_bb3cb6921c_b.jpg","https://farm5.static.flickr.com/4196/34567744360_5a99ac503c_b.jpg","https://farm6.static.flickr.com/5618/21964702154_62547031fe_b.jpg","https://farm3.static.flickr.com/2945/15245162907_af1d0563e6_b.jpg","https://farm4.static.flickr.com/3070/5853564373_a1072b1623_b.jpg","https://farm5.static.flickr.com/4246/34567749800_eb2b331871_b.jpg","https://farm2.static.flickr.com/1538/26496715130_42e440f497_b.jpg","https://farm5.static.flickr.com/4073/4808304317_525a6f5bcd_b.jpg","https://farm8.static.flickr.com/7410/9836845426_5f4f02a1c3_b.jpg","https://farm3.static.flickr.com/2197/2150255566_7b98a12faf_b.jpg","https://farm2.static.flickr.com/1154/799603973_e15fb7836c_b.jpg","https://farm5.static.flickr.com/4147/4986446525_63433c805a_b.jpg","https://farm4.static.flickr.com/3673/9594236899_5ab3da5f72_b.jpg","https://farm2.static.flickr.com/1058/1019317120_00c00f19e1_b.jpg","https://farm9.static.flickr.com/8364/8301011206_ec00b3569b_b.jpg","https://farm3.static.flickr.com/2005/32772251416_2c9aa2f4c1_b.jpg","https://farm6.static.flickr.com/5299/5546878303_d71cac4920_b.jpg","https://farm4.static.flickr.com/3806/9836726765_e5f2a21259_b.jpg","https://farm2.static.flickr.com/1614/25139687992_d2b10e4c04_b.jpg","https://farm6.static.flickr.com/5188/5568076904_19f0710645_b.jpg","https://farm9.static.flickr.com/8204/8196668074_93051fcc5e_b.jpg","https://farm8.static.flickr.com/7370/10580033613_12f7b29721_b.jpg","https://farm9.static.flickr.com/8089/8474166535_4e050bdb9d_b.jpg","https://farm9.static.flickr.com/8503/8433750688_a0774f4237_b.jpg","https://farm7.static.flickr.com/6207/6119821330_e6b3798e4c_b.jpg","https://farm5.static.flickr.com/4032/4398707986_27fa147ac9_b.jpg"],h=i("9982"),n=160,_="ars-data";function b(t){if(window.clipboardData&&window.clipboardData.setData)return clipboardData.setData("Text",t);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var a=document.createElement("textarea");a.textContent=t,a.style.position="fixed",document.body.appendChild(a),a.select();try{return document.execCommand("copy")}catch(i){return!1}finally{document.body.removeChild(a)}}}function d(t){return Object(h["a"])(t)||t}var u={components:{ModelViewer:p["a"],ImageThumb:o["a"]},data:function(){return{models:l["a"],model:l["a"][0].path,rotateX:0,rotateY:0,rotateZ:0,zoom:10,imageUrl:"",imageZoom:100,imageWidth:0,imageHeight:0,imageLoading:!1,imageClip:{left:0,top:0,size:0,dragging:!1,dragX:0,dragY:0},tags:[],data:[],unregistered:[]}},computed:{imageStyle:function(){return{background:"url(".concat(this.imageUrl,") 0 0 / 100% 100% no-repeat"),width:this.imageWidth*this.imageZoom/100+"px",height:this.imageHeight*this.imageZoom/100+"px"}},imageClipStyle:function(){return{left:this.imageClip.left*this.imageZoom/100+"px",top:this.imageClip.top*this.imageZoom/100+"px",width:this.imageClip.size*this.imageZoom/100+"px",height:this.imageClip.size*this.imageZoom/100+"px"}},imageClipMaxSize:function(){return Math.min(this.imageWidth,this.imageHeight)},smallImageStyle:function(){var t=1/this.imageClip.size*n;return{position:"absolute",width:this.imageWidth*t+"px",height:this.imageHeight*t+"px",left:-this.imageClip.left*t+"px",top:-this.imageClip.top*t+"px"}},latestRecords:function(){return this.data.length>10?this.data.slice(this.data.length-10):this.data}},watch:Object(f["a"])({imageUrl:{immediate:!0,handler:function(t){var a=this;if(t){this.imageLoading=!0;var i=new Image;i.onload=function(){a.imageLoading=!1,a.imageWidth=i.width,a.imageHeight=i.height,a.imageClip.size=Math.min(i.width,i.height,a.imageClip.size),a.imageZoom=Math.min(i.width,i.height,a.$refs.imageClipLarge.clientWidth-18,a.$refs.imageClipLarge.clientHeight-18-32)/i.width*100|0},i.src=t}}}},"imageClip.size",function(t){this.imageClip.left=Math.min(this.imageClip.left,this.imageWidth-t),this.imageClip.top=Math.min(this.imageClip.top,this.imageHeight-t)}),methods:{imageClipDragStart:function(t){0===t.button&&(this.imageClip.dragging=!0,this.imageClip.dragX=t.clientX,this.imageClip.dragY=t.clientY)},imageClipDragStop:function(){this.imageClip.dragging=!1},imageClipDragMove:function(t){var a=this.imageClip.dragX,i=this.imageClip.dragY,c=t.clientX,s=t.clientY;if(this.imageClip.dragX=c,this.imageClip.dragY=s,this.imageClip.dragging){var e=c-a,r=s-i;this.imageClip.left+=e/(this.imageZoom/100),this.imageClip.left=Math.max(0,Math.min(this.imageWidth-this.imageClip.size,this.imageClip.left)),this.imageClip.top+=r/(this.imageZoom/100),this.imageClip.top=Math.max(0,Math.min(this.imageHeight-this.imageClip.size,this.imageClip.top))}},save:function(){if(this.imageUrl){var t={rx:this.rotateX,ry:this.rotateY,rz:this.rotateZ,url:this.imageUrl,cx:0|this.imageClip.left,cy:0|this.imageClip.top,cs:this.imageClip.size,w:this.imageWidth,h:this.imageHeight,tags:this.tags},a=this.data.findIndex(function(a){return a.url===t.url});a>=0?this.data[a]=t:this.data.push(t),window.localStorage.setItem(_,m()(this.data))}},load:function(t){this.rotateX=t.rx,this.rotateY=t.ry,this.rotateZ=t.rz,this.imageUrl=t.url,this.imageWidth=t.w,this.imageHeight=t.h,this.imageClip.left=t.cx,this.imageClip.top=t.cy,this.imageClip.size=t.cs,this.tags=t.tags},remove:function(t){window.confirm("Are you sure you want to delete ".concat(t.url,"?"))&&(this.data.splice(this.data.findIndex(function(a){return a===t}),1),window.localStorage.setItem(_,m()(this.data)))},importData:function(){var t=window.prompt("Input Data JSON:");t&&(this.data=JSON.parse(t),window.localStorage.setItem(_,t))},exportData:function(){b(m()(this.data))},getOne:function(){this.imageUrl=this.unregistered.shift()}},mounted:function(){var t=this;window.addEventListener("mouseup",this.imageClipDragStop),i.e("chunk-2d20ee20").then(i.bind(null,"b0ea")).then(function(a){var i=a.default,c=localStorage.getItem(_);c=c&&JSON.parse(c)||[];var s={};[].concat(Object(e["a"])(c),Object(e["a"])(i)).forEach(function(t){return s[d(t.url)]=!0});var r=g.filter(function(t){return!s[d(t)]});t.data=c,t.unregistered=r})},beforeDestroy:function(){window.removeEventListener("mouseup",this.imageClipDragStop)}},k=u,j=(i("a9b3"),i("2877")),C=Object(j["a"])(k,c,s,!1,null,"2f8edcb3",null);a["default"]=C.exports},a21f:function(t,a,i){var c=i("584a"),s=c.JSON||(c.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},a9b3:function(t,a,i){"use strict";var c=i("d542"),s=i.n(c);s.a},d542:function(t,a,i){},f499:function(t,a,i){t.exports=i("a21f")}}]);
//# sourceMappingURL=chunk-810078fa.e92e2417.js.map