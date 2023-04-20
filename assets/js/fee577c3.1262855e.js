"use strict";(self.webpackChunkrust_book_abridged=self.webpackChunkrust_book_abridged||[]).push([[3032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},s="5 - Using Structs to Structure Related Data",o={unversionedId:"ch05-structs",id:"ch05-structs",title:"5 - Using Structs to Structure Related Data",description:"5.1 - Defining and Instantiating Structs",source:"@site/docs/ch05-structs.md",sourceDirName:".",slug:"/ch05-structs",permalink:"/rust-book-abridged/ch05-structs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ch05-structs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"4 - Ownership, References, and Slices",permalink:"/rust-book-abridged/ch04-ownership"},next:{title:"6 - Enums and Pattern Matching",permalink:"/rust-book-abridged/ch06-enums-and-pattern-matching"}},l={},u=[{value:"5.1 - Defining and Instantiating Structs",id:"51---defining-and-instantiating-structs",level:2},{value:"Using the Field Init Shorthand",id:"using-the-field-init-shorthand",level:3},{value:"Creating Instances from Other Instances with Struct Update Syntax",id:"creating-instances-from-other-instances-with-struct-update-syntax",level:3},{value:"Using Tuple Structs Without Named Fields to Create Different Types",id:"using-tuple-structs-without-named-fields-to-create-different-types",level:3},{value:"Unit-Like Structs Without Any Fields",id:"unit-like-structs-without-any-fields",level:3},{value:"Ownership of Struct Data",id:"ownership-of-struct-data",level:3},{value:"5.2 - An Example Program Using Structs",id:"52---an-example-program-using-structs",level:2},{value:"Adding Useful Functionality with Derived Traits",id:"adding-useful-functionality-with-derived-traits",level:3},{value:"5.3 - Method Syntax",id:"53---method-syntax",level:2},{value:"Automatic Referencing and Dereferencing",id:"automatic-referencing-and-dereferencing",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"5---using-structs-to-structure-related-data"},"5 - Using Structs to Structure Related Data"),(0,r.kt)("h2",{id:"51---defining-and-instantiating-structs"},"5.1 - Defining and Instantiating Structs"),(0,r.kt)("p",null,"If you're coming from Go, then a struct in Rust is very similar to a struct in Go. It has public and private fields and you can define methods on a struct. If you're coming from JavaScript or Java, then a struct in Rust is similar to a class, except that a struct can't inherit from another struct. In any of these cases, a trait is very similar to an ",(0,r.kt)("inlineCode",{parentName:"p"},"interface"),"."),(0,r.kt)("p",null,"If you're coming from C/C++, then a struct is sort of like a struct except you can add methods to it like a class. If you're coming from some other language, I'm going to assume the concept of a ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," isn't totally foreign to you."),(0,r.kt)("p",null,"Here's what a struct looks like in Rust:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'struct User {\n    active: bool,\n    username: String,\n    email: String,\n    sign_in_count: u64,\n}\n\nfn main() {\n    let mut myUser = User {\n        active: true,\n        username: String::from("jwalton"),\n        email: String::from("jwalton@example.com"),\n        sign_in_count: 1,\n    };\n\n    // Variable must be declared as `mut` if we want to be\n    // able to modify the structure.\n    myUser.email = String::from("other_email@example,com");\n\n    println!("Name: {}", myUser.username);\n}\n')),(0,r.kt)("p",null,"Note if you want to modify the contents of a struct, is has to be marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"mut"),". You can't mark individual fields as mutable - either the whole structure is, or none of it is."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're curious about how Rust structures are laid out in memory, check ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/reference/type-layout.html"},"the Rust Reference's section on Type Layout"),".")),(0,r.kt)("h3",{id:"using-the-field-init-shorthand"},"Using the Field Init Shorthand"),(0,r.kt)("p",null,"Much like in modern JavaScript, we can initialize fields with a shorthand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn build_user(email: String, username: String) -> User {\n    User {\n        active: true,\n        // Instead of `username: username,` we can do:\n        username,\n        email,\n        sign_in_count: 1,\n    }\n}\n")),(0,r.kt)("h3",{id:"creating-instances-from-other-instances-with-struct-update-syntax"},"Creating Instances from Other Instances with Struct Update Syntax"),(0,r.kt)("p",null,"Rust has something called the ",(0,r.kt)("em",{parentName:"p"},"struct update syntax")," which allows us to copy fields from another struct (and which is very similar to the spread operator in JavaScript). This example will set the email of ",(0,r.kt)("inlineCode",{parentName:"p"},"user2"),", and then copy all other fields from ",(0,r.kt)("inlineCode",{parentName:"p"},"user1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let user2 = User {\n    email: String::from("yet_another_email@example.com"),\n    ..user1\n}\n')),(0,r.kt)("p",null,"When you store a field in a structure, or use the struct update syntax as in this example, from an ownership perspective you are moving that field. In this example, once we create user2, we can no longer use user1 because its username field has been moved. If we had given user2 an email and a username, then all the remaining fields we assigned from user1 would be basic data types that implement the Copy trait. In this case, nothing would move, so user1 would still be valid."),(0,r.kt)("h3",{id:"using-tuple-structs-without-named-fields-to-create-different-types"},"Using Tuple Structs Without Named Fields to Create Different Types"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Tuple structs")," are basically named tuples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct Color(i32, i32, i32);\nstruct Point(i32, i32, i32);\n\nfn main() {\n    let black = Color(0, 0, 0);\n    let origin = Point(0, 0, 0);\n}\n")),(0,r.kt)("p",null,"Note here that ",(0,r.kt)("inlineCode",{parentName:"p"},"Color")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Point")," are two different types, even though they have the same structure. If you have a function that accepted a Color, the compiler will complain if you try to pass in a Point."),(0,r.kt)("h3",{id:"unit-like-structs-without-any-fields"},"Unit-Like Structs Without Any Fields"),(0,r.kt)("p",null,"You can define a struct without any fields. These are used when you want to implement some trait (",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch10/ch10-01-generic-data-types",title:"Chapter 10: Generic Types, Traits, and Lifetimes"},"see chapter 10"),") but you don't have any data you actually want to store in your struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct AlwaysEqual;\n\nfn main() {\n    let subject = AlwaysEqual;\n}\n")),(0,r.kt)("h3",{id:"ownership-of-struct-data"},"Ownership of Struct Data"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," struct above, we used a String type owned by the struct. We could instead have used an &str, in which case the struct would store a reference to the string, and wouldn't own the string directly. To do this, we need something called a ",(0,r.kt)("em",{parentName:"p"},"lifetime"),", which we'll talk about in ",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch10/ch10-01-generic-data-types",title:"Chapter 10: Generic Types, Traits, and Lifetimes"},"chapter 10"),"."),(0,r.kt)("h2",{id:"52---an-example-program-using-structs"},"5.2 - An Example Program Using Structs"),(0,r.kt)("p",null,"A quick example of a program that uses a struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'struct Rectangle {\n    width: u32,\n    height: u32,\n}\n\nfn main() {\n    let rect1 = Rectangle {\n        width: 30,\n        height: 50,\n    };\n\n    println!(\n        "The area of the rectangle is {} square pixels.",\n        area(&rect1)\n    );\n}\n\nfn area(rectangle: &Rectangle) -> u32 {\n    rectangle.width * rectangle.height\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"area")," takes an immutable reference to the Rectangle struct. We know when we call area(), it won't modify our struct (even if ",(0,r.kt)("inlineCode",{parentName:"p"},"rect1")," was declared as mutable in the caller). Passing a reference means the caller will retain ownership. Also, accessing fields on the borrowed struct doesn't move them."),(0,r.kt)("h3",{id:"adding-useful-functionality-with-derived-traits"},"Adding Useful Functionality with Derived Traits"),(0,r.kt)("p",null,'It would be cool if we could "print" a rectangle:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    let rect1 = Rectangle {\n        width: 30,\n        height: 50,\n    };\n\n    println!("A rectangle: {}", rect1); // This will error.\n')),(0,r.kt)("p",null,"In Java and JavaScript we could to this with a ",(0,r.kt)("inlineCode",{parentName:"p"},"toString")," method. In Go we could implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stringer")," interface. In Rust we have two different traits we can implement: ",(0,r.kt)("inlineCode",{parentName:"p"},"std::fmt::Display")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Debug"),". The Debug trait is one that's intended, as the name suggests, for debugging and it's the one we want here."),(0,r.kt)("p",null,"Instead of implementing this trait ourselves, we can ",(0,r.kt)("em",{parentName:"p"},"derive")," this trait, which is a fancy way of saying we can let Rust generate the code for this trait for us:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug)]\nstruct Rectangle {\n    width: u32,\n    height: u32,\n}\n\nfn main() {\n    let rect1 = Rectangle {\n        width: 30,\n        height: 50,\n    };\n\n    println!("A rectangle: {:?}", rect1);\n}\n')),(0,r.kt)("p",null,"If you run this, it will print:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"A rectangle: Rectangle { width: 30, height: 50 }\n")),(0,r.kt)("p",null,"The placeholder in ",(0,r.kt)("inlineCode",{parentName:"p"},"println!")," has changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"{:?}"),", which lets println!() know we want the debug output format. We could also use ",(0,r.kt)("inlineCode",{parentName:"p"},"{:#?}"),' to "pretty print" the output.'),(0,r.kt)("p",null,"There's also a handy macro called ",(0,r.kt)("inlineCode",{parentName:"p"},"dbg!")," which will pretty-print the value, and the file name and source line. ",(0,r.kt)("inlineCode",{parentName:"p"},"dbg!(&rect1);")," would print something line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"[src/main.rs:13] &rect1 = Rectangle {\n    width: 30,\n    height: 50,\n}\n")),(0,r.kt)("p",null,"Note that dbg!() takes ownership of the value passed in, so we pass a reference to rect1 instead of passing rect1 directly to prevent this. There are a number of other derivable traits - see ",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/zz-appendix/appendix-03-derivable-traits"},"Appendix C"),". And, again, to learn more about traits see ",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch10/ch10-01-generic-data-types",title:"Chapter 10: Generic Types, Traits, and Lifetimes"},"chapter 10"),"."),(0,r.kt)("h2",{id:"53---method-syntax"},"5.3 - Method Syntax"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Methods")," are functions defined on a struct. Their first parameter is always ",(0,r.kt)("inlineCode",{parentName:"p"},"self"),", which represents the instance of the struct the method is being called on (similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," in other languages)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug)]\nstruct Rectangle {\n    width: u32,\n    height: u32,\n}\n\nimpl Rectangle {\n    fn area(&self) -> u32 {\n        self.width * self.height\n    }\n\n    // Returns true if `other` Rectangle can fit inside this one.\n    fn can_hold(&self, other: &Rectangle) -> bool {\n        self.width > other.width && self.height > other.height\n    }\n}\n\nfn main() {\n    let rect1 = Rectangle {\n        width: 30,\n        height: 50,\n    };\n\n    println!(\n        "The area of the rectangle is {} square pixels.",\n        rect1.area()\n    );\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"impl")," (implementation) block defines methods on the Rectangle type. ",(0,r.kt)("inlineCode",{parentName:"p"},"area")," takes a reference to ",(0,r.kt)("inlineCode",{parentName:"p"},"self"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"&self")," is actually a short form for ",(0,r.kt)("inlineCode",{parentName:"p"},"self: &Self"),". If this were not a reference this method would take ownership of the Rectangle, so we wouldn't be able to use a Rectangle instance after calling area(). Methods that take ownership of self are quite rare, but useful in cases where a method destroys ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," or transforms it into some other structure and moves data out of it. If a method wants to modify ",(0,r.kt)("inlineCode",{parentName:"p"},"self"),", it needs to declare it as ",(0,r.kt)("inlineCode",{parentName:"p"},"& mut self"),", as ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," is immutable by default, just like any other function parameter."),(0,r.kt)("p",null,"You can have a method on a struct with the same name as one of the fields. This is most commonly used to add a ",(0,r.kt)("em",{parentName:"p"},"getter")," method to a struct. You can make it so a rectangle has a private ",(0,r.kt)("inlineCode",{parentName:"p"},"width: u32")," field, and a public ",(0,r.kt)("inlineCode",{parentName:"p"},"width(): u32")," field, which effectively makes ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," read-only. What are public and private fields and methods? You'll have to wait for ",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch07-packages-crates-modules",title:"Chapter 7: Managing Growing Projects with Packages, Crates, and Modules"},"chapter 7"),"."),(0,r.kt)("h3",{id:"automatic-referencing-and-dereferencing"},"Automatic Referencing and Dereferencing"),(0,r.kt)("p",null,"You may have noticed that ",(0,r.kt)("inlineCode",{parentName:"p"},"area")," takes a ref to self, but we called it as ",(0,r.kt)("inlineCode",{parentName:"p"},"rect1.area()")," and not ",(0,r.kt)("inlineCode",{parentName:"p"},"(&rect1).area()"),". Much like in Go, Rust has automatic referencing and dereferencing. When you call a method on a struct, Rust will automatically add in the ",(0,r.kt)("inlineCode",{parentName:"p"},"&"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"&mut"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," so the object matches the signature of the method."),(0,r.kt)("p",null,"Continue to ",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch06-enums-and-pattern-matching",title:"Chapter 6: Enums and Pattern Matching"},"chapter 6"),"."))}p.isMDXComponent=!0}}]);