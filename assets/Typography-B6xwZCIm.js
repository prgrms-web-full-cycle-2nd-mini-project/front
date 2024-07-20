import{o as a,p as b,q as x,C as p}from"./index-COhQ_a6R.js";const c={largetitle:"h1",title1:"h2",title2:"h2",title3:"h3",subtitle1:"h4",subtitle2:"h5",body1:"p",body2:"p",button1:"span",button2:"span",caption1:"span",active:"span",cardTitle:"h6"},o={fontSize:{largetitle:"60px",title1:"28px",title2:"26px",title3:"20px",subtitle1:"16px",subtitle2:"14px",body1:"16px",body2:"15px",button1:"18px",button2:"15px",caption1:"10px",active:"16px",cardTitle:"24px"},fontWeight:{largetitle:700,title1:600,title2:500,title3:500,subtitle1:600,subtitle2:600,body1:400,body2:400,button1:600,button2:500,caption1:400,active:600,cardTitle:600},lineHeight:{largetitle:"110%",title1:"110%",title2:"110%",title3:"110%",subtitle1:"110%",subtitle2:"110%",body1:"110%",body2:"105%",button1:"24px",button2:"20px",caption1:"110%",active:"110%",cardTitle:"110%"}},u=({$variant:t,$color:e,children:i,$style:l,...n})=>{const s=c[t]||"p";return a.jsx(h,{as:s,$variant:t,$color:e,$style:l,...n,children:i})},h=b.div`
  ${({$variant:t,$color:e,$style:i})=>x`
    font-size: ${o.fontSize[t]||"16px"};
    font-weight: ${o.fontWeight[t]||400};
    line-height: ${o.lineHeight[t]||1};
    color: ${e?p[e]:p.gray100};
    ${i}
  `};
`,r=u;export{r as T};
