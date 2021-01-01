(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{203:function(e,t,a){},205:function(e,t,a){},207:function(e,t,a){},209:function(e,t,a){},211:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(79),c=a.n(r),l=a(19),i=a(21),u=a(216),d=(a(87),a(89),a(40)),s=a(41),m=a(27),h=a(20),f=a(3),p=a(4),N=a(6),v=a(5),E=a(7),b=a(214),j=a(98),O=a(10),y=a(215),g=a(29);a(93);function w(e){e.tag,e.className,e.childrenm;var t=Object(g.a)(e,["tag","className","childrenm"]);return o.a.createElement(e.tag,Object(h.a)({className:["NavCircleButton",e.className].join(" ")},t),e.children)}w.defaultProps={tag:"a"};var D=o.a.createContext({notes:[],folders:[],addFolder:function(){},addNote:function(){},deleteNote:function(){}}),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find(function(e){return e.id===t})},k=(a(95),function(e){function t(){return Object(f.a)(this,t),Object(N.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.context,t=e.folders,a=void 0===t?[]:t,n=e.notes,r=void 0===n?[]:n;return o.a.createElement("div",{className:"NoteListNav"},o.a.createElement("ul",{className:"NoteListNav__list"},a.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(y.a,{className:"NoteListNav__folder-link",to:"/folder/".concat(e.id)},o.a.createElement("span",{className:"NoteListNav__num-notes"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.filter(function(e){return e.folderId===t}).length}(r,e.id)),e.name))})),o.a.createElement("div",{className:"NoteListNav__button-wrapper"},o.a.createElement(w,{tag:j.a,to:"/add-folder",type:"button",className:"NoteListNav__add-folder-button"},o.a.createElement(O.a,{icon:"plus"}),o.a.createElement("br",null),"Folder")))}}]),t}(o.a.Component));k.contextType=D;a(99);var x=function(e){function t(){return Object(f.a)(this,t),Object(N.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.context,a=t.notes,n=t.folders,r=this.props.match.params.noteId,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find(function(e){return e.id===t})}(n,(_(a,r)||{}).folderId);return o.a.createElement("div",{className:"NotePageNav"},o.a.createElement(w,{tag:"button",role:"link",onClick:function(){return e.props.history.goBack()},className:"NotePageNav__back-button"},o.a.createElement(O.a,{icon:"chevron-left"}),o.a.createElement("br",null),"Back"),c&&o.a.createElement("h3",{className:"NotePageNav__folder-name"},c.name))}}]),t}(o.a.Component);x.defaultProps={history:{goBack:function(){}},match:{params:{}}},x.contextType=D;var F=a(81),P={API_ENDPOINT:"http://localhost:9090"},S=(a(203),function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(N.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).handleClickDelete=function(e){e.preventDefault();var t=a.props.id;fetch("".concat(P.API_ENDPOINT,"/notes/").concat(t),{method:"DELETE",headers:{"content-type":"application/json"}}).then(function(e){if(!e.ok)return e.json().then(function(e){return Promise.reject(e)})}).then(function(){a.context.deleteNote(t),a.props.onDeleteNote(t)}).catch(function(e){console.error({error:e})})},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.id,n=e.modified;return o.a.createElement("div",{className:"Note"},o.a.createElement("h2",{className:"Note__title"},o.a.createElement(j.a,{to:"/note/".concat(a)},t)),o.a.createElement("button",{className:"Note__delete",type:"button",onClick:this.handleClickDelete},o.a.createElement(O.a,{icon:"trash-alt"})," ","remove"),o.a.createElement("div",{className:"Note__dates"},o.a.createElement("div",{className:"Note__dates-modified"},"Modified"," ",o.a.createElement("span",{className:"Date"},Object(F.format)(n,"Do MMM YYYY")))))}}]),t}(o.a.Component));S.defaultProps={onDeleteNote:function(){}},S.contextType=D;a(205);var I=function(e){function t(){return Object(f.a)(this,t),Object(N.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.match.params.folderId,a=this.context.notes,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t?e.filter(function(e){return e.folderId===t}):e}(void 0===a?[]:a,t);return o.a.createElement("section",{className:"NoteListMain"},o.a.createElement("div",{className:"NoteListMain__button-container"},o.a.createElement(w,{tag:j.a,to:"/add-note",type:"button",className:"NoteListMain__add-note-button"},o.a.createElement(O.a,{icon:"plus"}),o.a.createElement("br",null),"Note")),o.a.createElement("ul",null,n.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(S,{id:t.id,name:t.name,modified:t.modified,onDeleteNote:e.onDeleteNote}))})))}}]),t}(o.a.Component);I.defaultProps={match:{params:{}}},I.contextType=D;a(207);var A=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(N.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).handleDeleteNote=function(e){a.props.history.push("/")},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.context.notes,t=void 0===e?[]:e,a=this.props.match.params.noteId,n=_(t,a)||{content:""};return o.a.createElement("section",{className:"NotePageMain"},o.a.createElement(S,{id:n.id,name:n.name,modified:n.modified,onDeleteNote:this.handleDeleteNote}),o.a.createElement("div",{className:"NotePageMain__content"},n.content.split(/\n \r|\n/).map(function(e,t){return o.a.createElement("p",{key:t},e)})))}}]),t}(o.a.Component);A.defaultProps={match:{params:{}}},A.contextType=D;a(209);function C(e){var t=e.className,a=Object(g.a)(e,["className"]);return o.a.createElement("form",Object.assign({className:["Noteful-form",t].join(" "),action:"#"},a))}var T=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(N.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){if(e.preventDefault(),!0===a.context.newFolder.hasError)return a.context.updateNewFolderName();var t={name:e.target["folder-name"].value};fetch("".concat(P.API_ENDPOINT,"/folders"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).then(function(e){a.context.addFolder(e),a.props.history.push("/folder/".concat(e.id))}).catch(function(e){console.error({error:e})})},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"updateFolderName",value:function(e){var t=e.target.value;this.context.updateNewFolderName(t)}},{key:"validateFolderName",value:function(){return 0===this.context.newFolder.name.trim().length?"Must be more than 0 characters.":this.context.newFolder.name.trim().length<=3?"Must be more than 3 characters.":void 0}},{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:"AddFolder"},o.a.createElement("h2",null,"Create a folder"),o.a.createElement(C,{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"folder-name"},"Name:",this.context.newFolder.touched&&o.a.createElement("p",null,this.validateFolderName())),o.a.createElement("input",{type:"text",id:"new-folder",name:"folder-name","aria-required":"true","aria-label":"Name",required:!0,defaultValue:"",onChange:function(t){return e.updateFolderName(t)}}),o.a.createElement("button",{type:"submit"},"Submit"))))}}]),t}(n.Component);T.defaultProps={history:{push:function(){}}},T.contextType=D;var M=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).addNewNote=function(e){e.modified=new Date(e.modified),fetch("".concat(P.API_ENDPOINT,"/notes"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){return a.context.handleAddNote(e)})},a.parseFolders=function(){return a.context.folders.map(function(e){return o.a.createElement("option",{key:e.id,name:e.id,value:e.id},e.name)})},a.handleSubmit=function(e){e.preventDefault(e);var t={name:e.target.name.value,content:e.target.content.value,folderId:e.target.folder.value,modified:new Date};if(0===e.target.name.value.length||0===e.target.content.value.length)return a.context.updateBadSubmitData();a.addNewNote(t),a.props.history.push("/")},a.validateName=function(){if(void 0===a.context.newNote.name.value||0===a.context.newNote.name.value.length)return"Name is required"},a.validateDescription=function(){if(void 0===a.context.newNote.content.value||0===a.context.newNote.content.value.length)return"Description is required"},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:"AddNote"},o.a.createElement("h2",null,"Create a note"),o.a.createElement(C,{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"note-name"},"Name",this.context.newNote.name.touched&&o.a.createElement("p",null,this.validateName())),o.a.createElement("input",{type:"text",id:"note-name",name:"name","aria-required":"true","aria-label":"Name",required:!0,defaultValue:"",onChange:function(t){return e.context.updateNewNoteData(t.target.name,t.target.value)}})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"content"},"Description",this.context.newNote.content.touched&&o.a.createElement("p",null,this.validateDescription())),o.a.createElement("textarea",{id:"note-content",name:"content","aria-required":"true","aria-label":"Description",defaultValue:"",required:!0,onChange:function(t){return e.context.updateNewNoteData(t.target.name,t.target.value)}})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"folder-select"},"Select a Folder"),o.a.createElement("select",{id:"note-folder",name:"folder","aria-required":"true","aria-label":"Select a folder"},this.parseFolders())),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{type:"submit"},"Submit"))))}}]),t}(o.a.Component);M.defaultProps={history:{push:function(){}}},M.contextType=D;a(211);var L=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(N.a)(this,Object(v.a)(t).call(this,e))).state={hasError:!1},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.state.hasError?o.a.createElement("div",null,o.a.createElement("h2",null,"ERROR"),o.a.createElement("p",null,"Something wrong here!...")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(N.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[],folders:[],newFolder:{hasError:!0,touched:!1,name:""},newNote:{name:{touched:!1,value:""},folderId:{touched:!1,value:""},content:{touched:!1,value:""}}},a.updateNewFolderName=function(e){void 0===e?a.setState({newFolder:{hasError:!0,touched:!0,name:""}}):e.length<4?a.setState({newFolder:{hasError:!0,touched:!0,name:e}}):a.setState({newFolder:{hasError:!1,touched:!0,name:e}})},a.updateBadSubmitData=function(){var e=a.state.newNote.name.value,t=a.state.newNote.content.value;a.setState(Object(h.a)({},a.state.newNote,{newNote:{name:{touched:!0,value:e},content:{touched:!0,value:t}}}))},a.updateNewNoteData=function(e,t){a.setState({newNote:Object(h.a)({},a.state.newNote,Object(m.a)({},e,{touched:!0,value:t}))})},a.handleAddFolder=function(e){a.setState({folders:Object(s.a)(a.state.folders).concat([e]),newFolder:{hasError:!0,touched:!1,name:""}})},a.handleAddNote=function(e){a.setState({notes:Object(s.a)(a.state.notes).concat([e]),newNote:{name:{touched:!1},content:{touched:!1}}})},a.handleDeleteNote=function(e){a.setState({notes:a.state.notes.filter(function(t){return t.id!==e})})},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("".concat(P.API_ENDPOINT,"/notes")),fetch("".concat(P.API_ENDPOINT,"/folders"))]).then(function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1];return a.ok?n.ok?Promise.all([a.json(),n.json()]):n.json().then(function(e){return Promise.reject(e)}):a.json().then(function(e){return Promise.reject(e)})}).then(function(t){var a=Object(d.a)(t,2),n=a[0],o=a[1];e.setState({notes:n,folders:o})}).catch(function(e){console.error({error:e})})}},{key:"renderNavRoutes",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{path:"/note/:noteId",component:x}),o.a.createElement(b.a,{path:"/add-folder",component:x}),o.a.createElement(b.a,{path:"/add-note",component:x}),["/","/folder/:folderId"].map(function(e){return o.a.createElement(b.a,{exact:!0,key:e,path:e,component:k})}))}},{key:"renderMainRoutes",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{path:"/note/:noteId",component:A}),o.a.createElement(b.a,{path:"/add-folder",component:T}),o.a.createElement(b.a,{path:"/add-note",component:M}),["/","/folder/:folderId"].map(function(e){return o.a.createElement(b.a,{exact:!0,key:e,path:e,component:I})}))}},{key:"render",value:function(){var e={notes:this.state.notes,folders:this.state.folders,deleteNote:this.handleDeleteNote,addFolder:this.handleAddFolder,newFolder:this.state.newFolder,updateNewFolderName:this.updateNewFolderName,newNote:this.state.newNote,handleAddNote:this.handleAddNote,updateNewNoteData:this.updateNewNoteData,updateBadSubmitData:this.updateBadSubmitData};return o.a.createElement(D.Provider,{value:e},o.a.createElement("div",{className:"App"},o.a.createElement(L,null,o.a.createElement("nav",{className:"App__nav"},this.renderNavRoutes()),o.a.createElement("header",{className:"App__header"},o.a.createElement("h1",null,o.a.createElement(j.a,{to:"/"},"Noteful")," ",o.a.createElement(O.a,{icon:"check-double"}))),o.a.createElement("main",{className:"App__main"},this.renderMainRoutes()))))}}]),t}(n.Component);l.b.add(i.c,i.b,i.d,i.a),c.a.render(o.a.createElement(u.a,null,o.a.createElement(q,null)),document.getElementById("root"))},82:function(e,t,a){e.exports=a(213)},89:function(e,t,a){},93:function(e,t,a){},95:function(e,t,a){},99:function(e,t,a){}},[[82,2,1]]]);
//# sourceMappingURL=main.47ff99a1.chunk.js.map