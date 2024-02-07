"use strict";(self.webpackChunkarbutus_docs=self.webpackChunkarbutus_docs||[]).push([[9998],{5588:function(e,t,n){n.d(t,{t:function(){return c}});var a=n(3513),o=n(2784),r=n(9516),i=n(3552);const l=(0,n(9973).Z)({root:{display:"flex",backgroundColor:i.T.colorNeutralBackground1,borderBottomWidth:"0.0625rem",borderBottomStyle:"solid",borderBottomColor:i.T.colorNeutralStroke1,marginBottom:i.T.spacingVerticalXL}}),c=e=>{let{className:t,children:n}=e;const i=(0,r.w)({children:n}),c=l();return o.createElement("div",{role:"tablist",className:(0,a.z)(c.root,t)},i)}},2048:function(e,t,n){n.d(t,{x:function(){return s}});var a=n(2784),o=n(690),r=n(8555),i=n(3517);const l={active:{display:"block"},inactive:{display:"none"}},c=e=>{let{children:t,className:n,hidden:o,id:i,isActive:c,role:d,tabIndex:s}=e;return a.createElement(r.E.div,{animate:c?"active":"inactive",className:n,hidden:o,id:i,initial:"inactive",role:d,style:{position:"relative",top:0},tabIndex:s,variants:l},t)},d=e=>{let{children:t,isActive:n}=e;const o=(0,i.J)();return a.createElement(r.E.div,{variants:{initial:{top:0},active:{opacity:1,top:0,transition:{delay:o?0:.2,ease:"easeOut",duration:o?0:.2}},inactive:{opacity:0,top:"-4px",transition:{ease:"easeOut",duration:o?0:.2}}},style:{position:"relative",top:0},animate:n?"active":"inactive",initial:"initial"},t)},s=e=>{let{className:t,children:n,__index:r=0}=e;const{currentIndex:i,id:l}=(0,o.g)(),s=i===r;return a.createElement(c,{tabIndex:0,role:"tabpanel",key:r,isActive:s,className:t,id:`${l}-tabpanel-${r}`,hidden:!s},a.createElement(d,{isActive:s},n))}},8964:function(e,t,n){n.d(t,{n:function(){return r}});var a=n(2784),o=n(9516);const r=e=>{let{children:t,className:n}=e;return a.createElement("div",{className:n},(0,o.w)({children:t}))}},7358:function(e,t,n){n.d(t,{O:function(){return s}});var a=n(3513),o=n(2784),r=n(690),i=n(3552),l=n(9973),c=n(6698);const d=(0,l.Z)({root:{position:"relative",...c.q5.margin("0"),paddingTop:i.T.spacingHorizontalS,paddingBottom:i.T.spacingHorizontalS,paddingLeft:i.T.spacingHorizontalL,paddingRight:i.T.spacingHorizontalL,display:"inline-block",...c.q5.borderColor("transparent"),...c.q5.borderWidth(0),...c.q5.borderStyle("none"),...c.q5.borderRadius("0.25rem 0.25rem 0 0"),boxShadow:"0 0 0 -2px transparent",backgroundColor:"transparent",color:"inherit",cursor:"pointer",WebkitAppearance:"none",MozAppearance:"none",fontWeight:i.T.fontWeightRegular,fontSize:i.T.fontSizeBase300,lineHeight:i.T.lineHeightBase300,transitionProperty:"box-shadow",transitionDuration:i.T.durationNormal,transitionTimingFunction:i.T.curveEasyEase,"&::after":{content:'""',position:"absolute",top:"-1px",left:"-1px",height:"calc(100% + 2px)",width:"calc(100% + 2px)",boxShadow:"0 0 4px 1px transparent",transitionProperty:"box-shadow",transitionDuration:i.T.durationNormal,transitionTimingFunction:i.T.curveEasyEase,...c.q5.borderRadius(i.T.borderRadiusMedium)},"&:focus":{outlineColor:"initial",outlineStyle:"none",outlineWidth:"initial",position:"relative"},"&:focus-visible":{"&::after":{boxShadow:`0 0 4px 2px ${i.T.colorBrandForeground1}`}}},active:{backgroundColor:i.T.colorNeutralBackground1,fontWeight:i.T.fontWeightSemibold,boxShadow:`0 2px 0 0 ${i.T.colorBrandForeground1}`,"&:focus-visible":{boxShadow:"0 2px 0 0 transparent"}},disabled:{opacity:"0.25",cursor:"default"}}),s=e=>{let{className:t,children:n,disabled:i,__index:l=0,__total:c=0}=e;const{onChangeIndex:s,currentIndex:u,id:p}=(0,r.g)(),m=u===l,b=(0,o.useRef)(null),h=(0,o.useRef)(!0);(0,o.useEffect)((()=>{var e;!h.current&&m&&(null===(e=b.current)||void 0===e||e.focus());h.current=!1}),[m]);const x=d();return o.createElement("button",{id:`${p}-tab-${l}`,role:"tab","aria-selected":m,"aria-controls":`${p}-tabpanel-${l}`,disabled:i,tabIndex:m?0:-1,className:(0,a.z)(x.root,m&&x.active,i&&x.disabled,t),onClick:()=>{s({nextIndex:l})},onKeyDown:e=>{"ArrowRight"===e.key&&(e.preventDefault(),s({nextIndex:u===c-1?0:u+1})),"ArrowLeft"===e.key&&(e.preventDefault(),s({nextIndex:0===u?c-1:u-1}))},ref:b},n)}},8924:function(e,t,n){n.d(t,{R:function(){return a},X:function(){return o}});const a=(0,n(2784).createContext)({currentIndex:0,prevIndex:void 0,id:"",onChangeIndex:e=>{let{nextIndex:t}=e}}),o=a.Provider},690:function(e,t,n){n.d(t,{g:function(){return r}});var a=n(2784),o=n(8924);const r=()=>(0,a.useContext)(o.R)},4157:function(e,t,n){n.d(t,{m:function(){return s}});var a=n(3513),o=n(2784),r=n(8924),i=n(3552),l=n(9973),c=n(6698);const d=(0,l.Z)({root:{color:i.T.colorNeutralForeground1,":global(:root)":{"--reach-tabs":1},'& [data-reach-tabs][data-orientation="vertical"]':{display:"flex"},'& [data-reach-tab-list][aria-orientation="vertical"]':{flexDirection:"column"},"& [data-reach-tab]":{...c.q5.margin("0"),paddingTop:i.T.spacingHorizontalS,paddingBottom:i.T.spacingHorizontalS,paddingLeft:i.T.spacingHorizontalL,paddingRight:i.T.spacingHorizontalL,display:"inline-block",...c.q5.borderColor("transparent"),...c.q5.borderWidth(0),...c.q5.borderStyle("none"),...c.q5.borderRadius("0.25rem 0.25rem 0 0"),boxShadow:"0 0 0 -2px transparent",backgroundColor:"transparent",color:"inherit",cursor:"pointer",WebkitAppearance:"none",MozAppearance:"none",fontWeight:i.T.fontWeightRegular,fontSize:i.T.fontSizeBase300,lineHeight:i.T.lineHeightBase300,transitionProperty:"box-shadow",transitionDuration:i.T.durationNormal,transitionTimingFunction:i.T.curveEasyEase,"&:focus":{outlineColor:"initial",outlineStyle:"none",outlineWidth:"initial"}},"& [data-reach-tab]:active":{backgroundColor:i.T.colorNeutralBackground1},"& [data-reach-tab]:disabled":{opacity:"0.25",cursor:"default"},"& [data-reach-tab][data-selected]":{fontWeight:i.T.fontWeightSemibold,boxShadow:`0 0.125rem 0 0 ${i.T.colorBrandForeground1}`}}}),s=e=>{let{className:t,children:n,initialIndex:i=0}=e;const{0:l,1:c}=(0,o.useState)(i),{0:s,1:u}=(0,o.useState)(),p=(0,o.useId)(),m=d();return o.createElement("div",{className:(0,a.z)(m.root,t),role:"tablist"},o.createElement(r.X,{value:{id:p,currentIndex:l,prevIndex:s,onChangeIndex:e=>{let{nextIndex:t}=e;u(l),c(t)}}},n))}},9516:function(e,t,n){n.d(t,{w:function(){return o}});var a=n(2784);const o=e=>{let{children:t}=e,n=-1;const o=a.Children.count(t);return a.Children.map(t,(e=>(0,a.isValidElement)(e)?(n+=1,(0,a.cloneElement)(e,{__index:n,__total:o})):e))}},9998:function(e,t,n){n.r(t);var a=n(9226),o=n(1230),r=n(9471),i=n(2784),l=n(4157),c=n(5588),d=n(7358),s=n(8964),u=n(2048);const p=e=>{let{index:t}=e;const n=(0,r.z)();return i.createElement(o.n,{variant:"solid-color"},i.createElement("article",{className:n.p8},i.createElement(a.x,{as:"h3",variant:"subtitle",block:!0,className:n.mb4},"This Is a Headline ",t,"!"),i.createElement(a.x,{as:"p",block:!0},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloremque dolores beatae sapiente enim rerum dolorum optio quasi quaerat reiciendis. Laboriosam doloremque itaque optio sint earum debitis nesciunt autem dolor?")))};t.default=()=>i.createElement(l.m,{initialIndex:0},i.createElement(c.t,null,i.createElement(d.O,null,"Usage"),i.createElement(d.O,null,"Style"),i.createElement(d.O,null,"Implementation")),i.createElement(s.n,null,i.createElement(u.x,null,i.createElement(p,{index:"One"})),i.createElement(u.x,null,i.createElement(p,{index:"Two"})),i.createElement(u.x,null,i.createElement(p,{index:"Three"}))))}}]);
//# sourceMappingURL=9998-3905db6ea14c6b5bfb44.js.map