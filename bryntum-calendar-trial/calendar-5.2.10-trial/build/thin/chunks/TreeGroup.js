/*!
 *
 * Bryntum Calendar 5.2.10 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
function _cmpa(){const W=['hoverTimer','relayEvents','element','150tGgtdE','count','includes','length','subGrids','onPaint','focusCell','_bodyRectangle','cellEdit','rowReorder','dropOverTargetCls','isLoading','getFieldDataSource','from','visible','$name','13129128YRlBIX','push','isGrouped','getAt','started','allRecords','find','b-drag-invalid','setTranslateXY','.b-focused','3746875XKcRMj','dropIndicator','treeify','valid','regions','tryInsertChild','disabled','overRecord','setTranslateY','collapsed','firstElementChild','pageYOffset','getRowFor','trigger','selectRow','hidden','onDrop','targetSubGridElement','rowManager','group()','getRecordFromElement','commitAsync','tree','abort','async','grid','onReset','RowReorder','touch','shiftKey','map','appendChild','isExpanded','startRecord','filter','parentCls','ctrlKey','_focusedCell','flatMap','isParent','isSelected','columns','scrollManager','b-row-reorder-with-grip','last','dropOnLeaf','insertBefore','clearGroups','10762bPfVPU','pageY','meta','client','processParentData','modelClass','indexOf','transform','selectedRecords','expand','The\x20TreeGroup\x20feature\x20requires\x20the\x20Tree\x20feature\x20to\x20be\x20enabled','some','_levels','after','parent','setPath','dataIndex','hasFeature','classList','bodyContainer','contains','resumeRefresh','move','touchStartDelay','registerFeature','dragStart','remove','TreeGroup','clearSorters','b-selected','key','children','3719160agcOfK','features','processTransformedData','toggle','setTimeout','project','b-row-drop-indicator','clientY','removeClsGlobally','gridRow','isApplying','constructor','proxyTopOffset','4162284FQDayM','updateShowGrip','querySelector','dragHelperConfig','reorderValid','isTreeGrouped','store','bubbleWhile','startPageY','construct','records','b-focused','init','587712hwSsrN','oldPositionContext','closest','finalizeReorder','beforeDragStart','clearTimeout','onDragStart','pluginConfig','over','first','rowCheckboxSelection','removeAttribute','_$name','_rowIndex','configurable','dragWithin','isLeaf','b-row-reordering','onDrag','cloneNode','1321428xPzxlp','style','originalRowTop','top','height','toggleCls','hideContextMenu','dragHelper','animateProxyTo','call','b-hover','parentIndex','sort','doDestroy','assertArray','max','scrollable','originalStore','data','cellEditDisabledState','getRowById','getBoundingClientRect','columnId','properties','link','record','removeCls','isGroupHeader','pointerType','b-row-reorder-proxy','waitForReadiness','b-row-dragging-multiple','applyLevels','gridRowDrop','add','await','isDestroyed','readOnly','field'];_cmpa=function(){return W;};return _cmpa();}(function(a,b){function v(a,b){return _cmpb(a-0x1d5,b);}const c=a();while(!![]){try{const d=parseInt(v(0x348,0x382))/0x1*(parseInt(v(0x3c0,0x37e))/0x2)+parseInt(v(0x382,0x36b))/0x3+parseInt(v(0x396,0x36e))/0x4+parseInt(v(0x318,0x2d2))/0x5+-parseInt(v(0x368,0x363))/0x6+parseInt(v(0x375,0x39f))/0x7+-parseInt(v(0x30e,0x36d))/0x8;if(d===b)break;else c['push'](c['shift']());}catch(e){c['push'](c['shift']());}}}(_cmpa,0x65a8d));import{_defineProperty,Delayable,InstancePlugin,Rectangle,DomHelper,ObjectHelper}from'./Editor.js';import{GridFeatureManager}from'./GridBase.js';import{DragHelper}from'./MessageDialog.js';import{TreeColumn}from'./Tree.js';class RowReorder extends Delayable(InstancePlugin){['construct'](a,b){function w(a,b){return _cmpb(a-0x3b9,b);}this[w(0x515,0x4df)]=a,super['construct'](...arguments);}[_cmpx(0x117,0x116)](){function y(a,b){return _cmpx(a,b- -0x171);}var a;(a=this[y(-0xb0,-0x61)])===null||a===void 0x0?void 0x0:a['destroy'](),super[y(-0x69,-0x5b)]();}[_cmpx(0xbb,0xf4)](){const a=this,{grid:b}=a;a['dragHelper']=DragHelper['new']({'name':z(-0x1f0,-0x231),'cloneTarget':!![],'dragThreshold':0xa,'proxyTopOffset':0xa,'targetSelector':'.b-grid-row','lockX':!![],'dragWithin':b[z(-0x25e,-0x28e)],'allowDropOutside':!![],'scrollManager':b[z(-0x277,-0x257)],'outerElement':a[z(-0x290,-0x244)],'touchStartDelay':a[z(-0x25a,-0x228)],'isElementDraggable':c=>!c[z(-0x235,-0x255)]('.b-grid-cell\x20.b-widget'),'monitoringConfig':{'scrollables':[{'element':b[z(-0x213,-0x22a)][z(-0x1fa,-0x1ed)],'direction':'vertical'}]},'setXY'(c,d,e){const {context:f}=this;function A(a,b){return z(a-0x50a,b);}if(!f[A(0x263,0x289)]){const g=Rectangle[A(0x31e,0x2f8)](f[A(0x310,0x323)],this[A(0x2e2,0x2bb)]),h=f[A(0x2ce,0x272)]-window[A(0x274,0x282)]-f['element']['getBoundingClientRect']()[A(0x2ea,0x339)];e=g['top']+h+this[A(0x2c5,0x282)];}DomHelper[A(0x267,0x22c)](c,d,e);},'ignoreSamePositionDrop':![],'createProxy'(c){const d=c[B(0x496,0x487)](!![]),e=document['createElement']('div');e[B(0x42a,0x44c)][B(0x476,0x4aa)](B(0x4b2,0x4a5));function B(a,b){return z(b-0x6ab,a);}d[B(0x450,0x47f)]('id'),d[B(0x4b9,0x489)][B(0x496,0x441)]='',e[B(0x3f6,0x429)](d);if(b['selectedRecords'][B(0x483,0x4b5)]>0x1){const f=d['cloneNode'](!![]);f[B(0x3fa,0x44c)][B(0x4b9,0x4aa)](B(0x451,0x4a7)),e[B(0x3c8,0x429)](f);}return DomHelper[B(0x424,0x462)](e,B(0x463,0x457),B(0x43e,0x492),'b-focused'),e;},'listeners':{'beforedragstart':'onBeforeDragStart','dragstart':'onDragStart','drag':z(-0x225,-0x1d4),'drop':z(-0x291,-0x27b),'reset':z(-0x287,-0x27f),'prio':0x2710,'thisObj':a}},a[z(-0x241,-0x1e0)]);function z(a,b){return _cmpx(b,a- -0x32c);}a[z(-0x1fb,-0x226)](a[z(-0x21c,-0x21b)],[z(-0x233,-0x276),z(-0x258,-0x2b9),'drag',z(-0x28a,-0x278)],z(-0x248,-0x213)),a['dropIndicator']=DomHelper['createElement']({'className':z(-0x24b,-0x220)}),a[z(-0x1ef,-0x1cd)]=['b-row-reordering-target',z(-0x219,-0x1fb)];}static get[_cmpx(0x102,0xfc)](){function C(a,b){return _cmpx(a,b- -0xf4);}return{'after':[C(0x5,0x44)]};}get['targetSubGridElement'](){const a=this[D(0x4b1,0x46a)][D(0x49c,0x4bc)][0x0];function D(a,b){return _cmpx(b,a-0x40d);}return this[D(0x4b1,0x508)][D(0x544,0x562)][a][D(0x53f,0x50f)];}['onBeforeDragStart']({event:a,source:b,context:c}){const d=this,{grid:e}=d,f=d[E(0x538,0x4ea)];if(d[E(0x52d,0x558)]||e[E(0x5ca,0x58a)]||e[E(0x589,0x5e5)]||!f['contains'](c[E(0x5ce,0x5f8)]))return![];const g=c[E(0x548,0x586)]=e[E(0x53b,0x533)](c['element']);if(g[E(0x5ca,0x62a)]||g['isSpecialRow'])return![];c[E(0x5a7,0x5d8)]=e[E(0x539,0x550)][E(0x533,0x58a)](g)[E(0x5a8,0x593)];if(!e['selectionMode'][E(0x59b,0x55a)]){if(b['startEvent'][E(0x5c1,0x5b0)]===E(0x543,0x4f3))!e[E(0x54f,0x526)](g)&&e[E(0x535,0x531)]({'record':g,'addToSelection':![]});else!e['isSelected'](g)&&!a[E(0x544,0x4f4)]&&!a[E(0x54b,0x585)]&&e[E(0x535,0x546)]({'record':g});}function E(a,b){return _cmpx(b,a-0x49c);}const h=e[E(0x55f,0x5b9)]['filter'](i=>!i['readOnly']);return c['records']=[g],h['includes'](g)&&(c[E(0x58e,0x531)][E(0x51e,0x4cb)](...h[E(0x549,0x58c)](i=>i!==g)),c['records'][E(0x5b1,0x5eb)]((i,j)=>e[E(0x58a,0x5a8)][E(0x55d,0x534)](i)-e['store'][E(0x55d,0x5ab)](j))),!![];}[_cmpx(0xc4,0xfb)]({context:a}){var b,c;const d=this,{grid:e}=d,{cellEdit:f,cellMenu:g,headerMenu:h}=e[F(0x472,0x46e)];f&&(d[F(0x4b2,0x4cb)]=f['disabled'],f[F(0x427,0x3e3)]=!![]);g===null||g===void 0x0?void 0x0:(b=g['hideContextMenu'])===null||b===void 0x0?void 0x0:b['call'](g,![]),h===null||h===void 0x0?void 0x0:(c=h[F(0x4a5,0x46a)])===null||c===void 0x0?void 0x0:c[F(0x4a8,0x48e)](h,![]);function F(a,b){return _cmpx(b,a-0x396);}e[F(0x4c8,0x50c)][F(0x463,0x46d)][F(0x4c1,0x4bb)](F(0x49c,0x46c));const i=a['element'][F(0x480,0x451)](F(0x420,0x44d));i===null||i===void 0x0?void 0x0:i[F(0x463,0x4a0)][F(0x46b,0x480)](F(0x489,0x434)),a[F(0x4c8,0x4bb)][F(0x42b,0x417)][F(0x463,0x461)][F(0x46b,0x49e)](F(0x46e,0x41d),F(0x4a9,0x463)),e[F(0x464,0x411)][F(0x440,0x3f5)](d[F(0x422,0x440)]);}[_cmpx(0xec,0x107)]({context:a,event:b}){const c=this,{grid:d}=c,{store:e,rowManager:f}=d,{clientY:g}=b;let h=!![],i=f['getRowAt'](g),j,k,l,m,n;if(i){const p=i[G(0x2cf,0x323)]+d[G(0x319,0x351)]['y']-d[G(0x303,0x330)]['y'],q=i[G(0x314,0x324)]/0x4,r=p+q,s=p+i[G(0x2fc,0x324)]/0x2,t=p+q*0x3;k=i[G(0x331,0x2e2)],j=e[G(0x2c4,0x29b)](k);if(e[G(0x264,0x2b8)])m=(j['isParent']||c[G(0x27a,0x2cf)])&&g>r&&g<t;else e[G(0x265,0x29a)]&&(m=j[G(0x300,0x33b)]&&j[G(0x2e4,0x2d4)]['collapsed']);l=!m&&b[G(0x2c0,0x2f9)]>=s;}else b[G(0x313,0x2d3)]<d[G(0x2f2,0x351)]['y']?(k=0x0,j=e[G(0x32c,0x315)],l=![]):(k=e[G(0x36d,0x34b)]-0x1,j=e[G(0x2e1,0x2ce)],l=!![]),i=d[G(0x261,0x2b4)]['getRow'](k);if(j===c[G(0x272,0x2a9)]&&c[G(0x314,0x2df)]===l&&c[G(0x351,0x314)]===m){a[G(0x2e3,0x2a5)]=c[G(0x35c,0x303)];return;}function G(a,b){return _cmpx(a,b-0x217);}if(c[G(0x29a,0x2a9)]!==j){var o;(o=f[G(0x2ef,0x334)](c['overRecord']))===null||o===void 0x0?void 0x0:o[G(0x387,0x33a)](c['dropOverTargetCls']);}c[G(0x2f1,0x2a9)]=j,c['after']=l,c[G(0x34d,0x314)]=m,(j===a[G(0x2d3,0x2c3)]||!l&&!m&&k===0x0&&e[G(0x298,0x29a)]||l&&j['isGroupHeader']&&j['meta'][G(0x27a,0x2ab)]&&e['indexOf'](j)===e[G(0x30f,0x34b)]-0x1)&&(h=![]),e[G(0x2cf,0x2b8)]?(n=l?j['nextSibling']:j,a[G(0x31c,0x309)][G(0x311,0x2dd)](u=>u[G(0x346,0x2e6)](j))&&(h=![]),a[G(0x2ab,0x2e0)]=h&&m?j:j[G(0x282,0x2e0)],c[G(0x329,0x311)](c['hoverTimer']),j&&j[G(0x2e0,0x2c9)]&&!j[G(0x2ce,0x2c2)](e)&&(c[G(0x392,0x347)]=c[G(0x2ec,0x2f6)](()=>d[G(0x2dd,0x2db)](j),c['hoverExpandTimeout']))):n=l?e[G(0x2a5,0x29b)](k+0x1):j,i[G(0x2f4,0x325)](c[G(0x31f,0x354)],h&&m),!m&&k===e[G(0x336,0x2d8)](a[G(0x26c,0x2c3)])+(l?-0x1:0x1)&&a['parent']&&a['startRecord'][G(0x2f2,0x2e0)]===a[G(0x2e8,0x2e0)]&&(h=![]),i&&DomHelper[G(0x27d,0x2aa)](c['dropIndicator'],Math[G(0x360,0x32f)](i[G(0x355,0x323)]+(l?i[G(0x388,0x349)][G(0x36d,0x335)]()[G(0x37a,0x324)]:0x0),0x1)),c[G(0x2c1,0x2a3)][G(0x302,0x321)]['visibility']=m?G(0x25b,0x2b1):G(0x325,0x358),c[G(0x2a3,0x2a3)][G(0x2fe,0x2e4)][G(0x2b2,0x2f5)](G(0x2d2,0x29f),!h),a['insertBefore']=n,a[G(0x259,0x2a5)]=c['reorderValid']=h;}async[_cmpx(0xd8,0x9b)](a){const b=this,{context:c}=a;function H(a,b){return _cmpx(b,a- -0x2fa);}c[H(-0x26c,-0x2a4)]=c['valid']&&b['reorderValid'];if(c[H(-0x26c,-0x293)]){c[H(-0x257,-0x205)]=!![];b[H(-0x23c,-0x26d)][H(-0x20c,-0x1db)]['tree']&&(c[H(-0x204,-0x256)]=c[H(-0x208,-0x1e6)][H(-0x251,-0x2b1)](e=>{var f;function I(a,b){return H(b-0xa0,a);}return{'record':e,'parentId':(f=e['parent'])===null||f===void 0x0?void 0x0:f['id'],'parentIndex':e[I(-0x19f,-0x146)]};}));const d=await b['trigger']('gridRowBeforeDropFinalize',a);d===![]&&(c[H(-0x26c,-0x277)]=![]),await b[H(-0x1ea,-0x1fb)][H(-0x1e9,-0x1c9)](b[H(-0x26e,-0x288)],{'align':'l0-l0'}),await b[H(-0x202,-0x1a4)](c);}b['clearTimeout'](b[H(-0x1ca,-0x1da)]),b['overRecord']=b['after']=b[H(-0x1fd,-0x204)]=null,b[H(-0x262,-0x2a9)](H(-0x1d0,-0x223),a);}async['finalizeReorder'](a){const b=this,{grid:c}=b,{store:d,focusedCell:e}=c;function J(a,b){return _cmpx(a,b-0x474);}let {records:f}=a;a[J(0x4e6,0x502)]=a['valid']&&!f[J(0x529,0x53a)](i=>!d[J(0x550,0x5a9)](i));if(a['valid']){let i;if(d[J(0x566,0x515)]){var g,h;f=f[J(0x501,0x521)](j=>!j['parent']||j[J(0x5b7,0x563)](k=>!f[J(0x5b4,0x5a9)](k),!![])),i=await a[J(0x526,0x53d)][J(0x4f4,0x504)](f,b[J(0x57d,0x571)]?(g=a[J(0x555,0x53d)]['children'])===null||g===void 0x0?void 0x0:g[0x0]:a[J(0x549,0x52d)]),c[J(0x544,0x511)]['forEach'](j=>j[J(0x5a1,0x597)](b[J(0x5cf,0x5b1)])),!a['parent'][J(0x570,0x51f)]()&&(h=a['parent']['children'])!==null&&h!==void 0x0&&h[J(0x5ae,0x5aa)]&&c[J(0x4eb,0x538)](a[J(0x505,0x53d)]),a[J(0x556,0x502)]=i!==![];}else d[J(0x4ec,0x4f7)]&&b[J(0x5a1,0x571)]?d[J(0x569,0x545)](f,d['getAt'](d[J(0x570,0x535)](a['insertBefore'])+0x1)):d[J(0x526,0x545)](f,a['insertBefore']);(e===null||e===void 0x0?void 0x0:e[J(0x589,0x576)])>=0x0&&(c[J(0x511,0x524)]=null,c[J(0x60b,0x5ad)]({'grid':c,'record':e[J(0x5f0,0x596)],'columnId':e[J(0x5ec,0x593)]})),d[J(0x5ab,0x54b)]();}a['finalize'](a[J(0x528,0x502)]),c['element'][J(0x561,0x541)][J(0x565,0x549)](J(0x56e,0x57a));}[_cmpx(0xe4,0xa5)](){function K(a,b){return _cmpx(a,b- -0x1b1);}const a=this,{grid:b}=a,c=b[K(-0x101,-0xd5)][K(-0xb5,-0x76)];b['element']['classList']['remove'](K(-0xa5,-0xab)),c&&(c['disabled']=a[K(-0x87,-0x95)]),a[K(-0xd6,-0x125)][K(-0x135,-0xdc)](),DomHelper['removeClsGlobally'](b[K(-0xd3,-0x7f)],...a[K(-0x2b,-0x74)]);}[_cmpx(0xf5,0x138)]({firstPaint:a}){function L(a,b){return _cmpx(a,b-0x49e);}a&&this[L(0x58d,0x592)]();}[_cmpx(0x11f,0xe9)](a){function M(a,b){return _cmpx(b,a-0xae);}this[M(0x152,0xf8)][M(0x1e0,0x235)]['classList']['toggle'](M(0x164,0x131),a);}}_defineProperty(RowReorder,_cmpx(0x197,0x142),_cmpx(0x88,0xa6)),_defineProperty(RowReorder,_cmpx(0x14b,0x103),{'showGrip':null,'hoverExpandTimeout':0x3e8,'touchStartDelay':0x12c,'dropOnLeaf':![],'dragHelperConfig':null}),RowReorder['featureClass']='',RowReorder[_cmpx(0x159,0x101)]=_cmpx(0x99,0xa6),GridFeatureManager[_cmpx(0xbc,0xd3)](RowReorder,![]),GridFeatureManager[_cmpx(0x11d,0xd3)](RowReorder,!![],'Gantt');function _cmpb(a,b){const c=_cmpa();return _cmpb=function(d,e){d=d-0x139;let f=c[d];return f;},_cmpb(a,b);}class TreeGroup extends InstancePlugin{[_cmpx(0x11d,0xf1)](a,b){function N(a,b){return _cmpx(b,a-0xc2);}super['construct'](a,b);if(!a[N(0x18e,0x1cd)](N(0x163,0x16a)))throw new Error(N(0x187,0x172));}[_cmpx(0x61,0xbf)](a){function O(a,b){return _cmpx(a,b-0x2da);}this[O(0x373,0x388)]&&(a['cls']=this[O(0x394,0x388)]);}['processTransformedData'](a){}async['waitForReadiness'](){if(this['originalStore'][P(0x3b2,0x355)]){await this['originalStore'][P(0x3a0,0x3ff)]('load',![]);if(this[P(0x3a1,0x3ad)])return;}const {crudManager:a}=this[P(0x332,0x2dd)];function P(a,b){return _cmpx(b,a-0x274);}if(a){if(a['isLoadingOrSyncing']){await a['await']('requestDone');if(this[P(0x3a1,0x381)])return;}await this[P(0x332,0x34c)][P(0x354,0x332)][P(0x314,0x2b4)]();}}async[_cmpx(0xc9,0x129)](a){const b=this,{client:c}=b,d=c[Q(0x42f,0x42a)][Q(0x3ff,0x3fd)](g=>g instanceof TreeColumn);let {store:e}=c,f=null;b['_levels']=a,b[Q(0x48f,0x45b)]++,c['suspendRefresh']();a&&!b[Q(0x431,0x490)]&&(b['originalStore']=e,e=new e[(Q(0x445,0x45c))]({'tree':!![],'modelClass':e[Q(0x3f8,0x436)]}),c[Q(0x4c3,0x464)]=e);await b[Q(0x4f3,0x49d)]();if(b['isDestroyed'])return;a?(e[Q(0x44d,0x491)]=b[Q(0x494,0x490)][Q(0x428,0x3fc)][Q(0x3d5,0x427)](g=>g[Q(0x4bd,0x47b)]?[g[Q(0x4a9,0x497)]()]:[]),f=e[Q(0x442,0x403)](a,g=>{ObjectHelper[R(0x13e,0x115)](g,e['modelClass'][R(0x1b3,0x162)](d[R(0x1a3,0x1f0)]),g[R(0x14d,0x148)]);function R(a,b){return Q(b,a- -0x302);}b[R(0x133,0x134)](g);}),b[Q(0x41d,0x453)](f),e[Q(0x483,0x491)]=f[Q(0x3f1,0x450)]):(c[Q(0x467,0x464)]=b[Q(0x4c6,0x490)],b[Q(0x446,0x490)]=null);b[Q(0x481,0x45b)]--,c[Q(0x49d,0x446)]();function Q(a,b){return _cmpx(a,b-0x376);}return c[Q(0x454,0x413)]['reinitialize'](),f;}['updateLevels'](a){function S(a,b){return _cmpx(a,b- -0x181);}(a||!this['isConfiguring'])&&this[S(-0x85,-0x58)](a);}async['group'](a){ObjectHelper[T(0x584,0x54f)](a,T(0x50b,0x4f5));function T(a,b){return _cmpx(b,a-0x46d);}await this[T(0x596,0x5a4)](a);}async[_cmpx(0xcb,0xba)](){function U(a,b){return _cmpx(b,a- -0x106);}this[U(-0x83,-0x4e)]&&await this[U(0x23,0x29)](null);}get['isGrouped'](){function V(a,b){return _cmpx(b,a-0xe7);}return Boolean(this[V(0x1ae,0x17e)]);}}_defineProperty(TreeGroup,_cmpx(0x152,0x142),_cmpx(0x117,0xd6)),_defineProperty(TreeGroup,'configurable',{'levels':null,'parentCls':'b-generated-parent'}),_defineProperty(TreeGroup,_cmpx(0xf1,0xfc),{'assign':['group','clearGroups']}),_defineProperty(TreeGroup,_cmpx(0x165,0x120),{'isApplying':0x0,'originalStore':null}),TreeGroup['_$name']='TreeGroup',GridFeatureManager[_cmpx(0x79,0xd3)](TreeGroup);function _cmpx(a,b){return _cmpb(b- -0xb8,a);}export{RowReorder,TreeGroup};