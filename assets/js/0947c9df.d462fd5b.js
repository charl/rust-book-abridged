"use strict";(self.webpackChunkrust_book_abridged=self.webpackChunkrust_book_abridged||[]).push([[2932],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5286:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={},i="19.4 - Advanced Functions and Closures",c={unversionedId:"ch19/ch19-04-advanced-functions-and-closures",id:"ch19/ch19-04-advanced-functions-and-closures",title:"19.4 - Advanced Functions and Closures",description:"Function Pointers",source:"@site/docs/ch19/ch19-04-advanced-functions-and-closures.md",sourceDirName:"ch19",slug:"/ch19/ch19-04-advanced-functions-and-closures",permalink:"/rust-book-abridged/ch19/ch19-04-advanced-functions-and-closures",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ch19/ch19-04-advanced-functions-and-closures.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"19.3 - Advanced Types",permalink:"/rust-book-abridged/ch19/ch19-03-advanced-types"},next:{title:"19.5 - Macros",permalink:"/rust-book-abridged/ch19/ch19-05-macros"}},s={},u=[{value:"Function Pointers",id:"function-pointers",level:2},{value:"Returning Closures",id:"returning-closures",level:2}],l={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"194---advanced-functions-and-closures"},"19.4 - Advanced Functions and Closures"),(0,a.kt)("h2",{id:"function-pointers"},"Function Pointers"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch13-functional-language-features",title:"Chapter 13: Functional Language Features: Iterators and Closures"},"chapter 13")," we saw you could pass a closure to a function, but we can also pass a function to a function!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn add_one(x: i32) -> i32 {\n    x + 1\n}\n\nfn do_twice(f: fn(i32) -> i32, arg: i32) -> i32 {\n    f(arg) + f(arg)\n}\n\nfn main() {\n    let answer = do_twice(add_one, 5);\n\n    println!("The answer is: {}", answer);\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fn")," type her is called a ",(0,a.kt)("em",{parentName:"p"},"function pointer"),". You may recall ",(0,a.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch13-functional-language-features",title:"Chapter 13: Functional Language Features: Iterators and Closures"},"from chapter 13")," that to declare a function that takes a closure as a parameter, we declared a generic function and used a trait bound on the generic type, just as ",(0,a.kt)("inlineCode",{parentName:"p"},"FnOnce()"),". The difference between a closure and a function pointer is that the function pointer is a concrete type."),(0,a.kt)("p",null,"Function pointers implement all three generic traits (",(0,a.kt)("inlineCode",{parentName:"p"},"FnOnce"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"FnMut"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Fn"),") so you can always pass a function pointer to a function that expects a trait. For this reason, it's generally more flexible to write a function that takes a closure. If you're interacting with C code, you might have to use a function pointer however."),(0,a.kt)("p",null,"Here's an example of using a function in place of a closure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let list_of_numbers = vec![1, 2, 3];\nlet list_of_strings: Vec<String> =\n    list_of_numbers.iter().map(|i| i.to_string()).collect();\n\n// This is equivalent to the above:\nlet list_of_strings2: Vec<String> =\n    list_of_numbers.iter().map(ToString::to_string).collect();\n")),(0,a.kt)("p",null,"Each enum variant we define becomes an initializer function, so we can use them as function pointers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"enum Status {\n    Value(u32),\n    Stop,\n}\n\nlet list_of_statuses: Vec<Status> = (0u32..20).map(Status::Value).collect();\n")),(0,a.kt)("h2",{id:"returning-closures"},"Returning Closures"),(0,a.kt)("p",null,"Since a closure is defined using a trait, if you want to return one from a function you'll have to use a trait object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn returns_closure() -> Box<dyn Fn(i32) -> i32> {\n    Box::new(|x| x + 1)\n}\n")))}d.isMDXComponent=!0}}]);