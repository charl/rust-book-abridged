"use strict";(self.webpackChunkrust_book_abridged=self.webpackChunkrust_book_abridged||[]).push([[4705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="20.3 - Graceful Shutdown and Cleanup",s={unversionedId:"ch20/ch20-03-graceful-shutdown",id:"ch20/ch20-03-graceful-shutdown",title:"20.3 - Graceful Shutdown and Cleanup",description:"Right now when we hit CTRL-C to send an interrupt signal to our web server, it stops running, but it also stops any in-flight requests. Let's see if we can get our server to shut down gracefully.",source:"@site/docs/ch20/ch20-03-graceful-shutdown.md",sourceDirName:"ch20",slug:"/ch20/ch20-03-graceful-shutdown",permalink:"/rust-book-abridged/ch20/ch20-03-graceful-shutdown",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ch20/ch20-03-graceful-shutdown.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"20.2 - Turning Our Single-Threaded Server into a Multithreaded Server",permalink:"/rust-book-abridged/ch20/ch20-02-multi-threaded-web-server"},next:{title:"21 - Async Programming",permalink:"/rust-book-abridged/ch21-async"}},l={},u=[{value:"Implementing the <code>Drop</code> Trait on <code>ThreadPool</code>",id:"implementing-the-drop-trait-on-threadpool",level:2},{value:"Next Steps",id:"next-steps",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"203---graceful-shutdown-and-cleanup"},"20.3 - Graceful Shutdown and Cleanup"),(0,o.kt)("p",null,"Right now when we hit CTRL-C to send an interrupt signal to our web server, it stops running, but it also stops any in-flight requests. Let's see if we can get our server to shut down gracefully."),(0,o.kt)("p",null,"The basic strategy here is going to be to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"Drop")," trait on ",(0,o.kt)("inlineCode",{parentName:"p"},"ThreadPool"),". When the ",(0,o.kt)("inlineCode",{parentName:"p"},"ThreadPool")," is dropped, we'll signal all the threads that they should stop accepting new requests and quit, and then we'll call ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," on each one to give them the time they need to finish up."),(0,o.kt)("p",null,"If you're looking for the full source for this project, it's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jwalton/rust-book-abridged/examples/ch20-graceful-shutdown"},"in the GitHub repo")),(0,o.kt)("h2",{id:"implementing-the-drop-trait-on-threadpool"},"Implementing the ",(0,o.kt)("inlineCode",{parentName:"h2"},"Drop")," Trait on ",(0,o.kt)("inlineCode",{parentName:"h2"},"ThreadPool")),(0,o.kt)("p",null,"One problem we're going to run into is that, in order to call ",(0,o.kt)("inlineCode",{parentName:"p"},"thread.join()"),", we're going to have to move the ",(0,o.kt)("inlineCode",{parentName:"p"},"thread")," out of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker"),". We can't move ",(0,o.kt)("em",{parentName:"p"},"part")," of a struct, so we're going to have to use the same trick we did in ",(0,o.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch17-object-oriented-features",title:"Chapter 17: Object Oriented Features of Rust"},"chapter 17")," and store the thread in an ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," so we can set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,o.kt)("p",null,"Calling ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," isn't enough though. This will wait until each thread quits, but right now the closure in each thread is an infinite loop! We need to somehow signal to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker"),"'s thread that it should stop accepting new jobs. We can do this by dropping the ",(0,o.kt)("inlineCode",{parentName:"p"},"sender")," half of the channel. This will cause the receiver to wake up and return an error. We'll have to pull the same trick we did with ",(0,o.kt)("inlineCode",{parentName:"p"},"thread")," and store the ",(0,o.kt)("inlineCode",{parentName:"p"},"sender")," in an ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," to make this work. We'll also want to handle the error from ",(0,o.kt)("inlineCode",{parentName:"p"},"recv")," correctly instead of just panicking."),(0,o.kt)("p",null,"Here's the updated library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},'use std::{\n    sync::{mpsc, Arc, Mutex},\n    thread::{self, JoinHandle},\n};\n\ntype Job = Box<dyn FnOnce() + Send + \'static>;\n\npub struct ThreadPool {\n    workers: Vec<Worker>,\n    sender: Option<mpsc::Sender<Job>>,\n}\n\nimpl ThreadPool {\n    /// Create a new ThreadPool.\n    ///\n    /// The size is the number of threads in the pool.\n    ///\n    /// # Panics\n    ///\n    /// The `new` function will panic if the size is zero.\n    pub fn new(size: usize) -> ThreadPool {\n        // Make sure `size` is valid.\n        assert!(size > 0);\n\n        // Create our sender and receiver\n        let (sender, receiver) = mpsc::channel();\n        let receiver = Arc::new(Mutex::new(receiver));\n\n        // Create a new vector.  Pre-allocate the vector\n        // to be of length `size` so we know it can store\n        // all of our threads.\n        let mut workers = Vec::with_capacity(size);\n\n        for id in 0..size {\n            workers.push(Worker::new(id, Arc::clone(&receiver)));\n        }\n\n        ThreadPool {\n            workers,\n            sender: Some(sender),\n        }\n    }\n\n    pub fn execute<F>(&self, f: F)\n    where\n        F: FnOnce() + Send + \'static,\n    {\n        // Send our job to a Worker.\n        let job = Box::new(f);\n        self.sender.as_ref().unwrap().send(job).unwrap();\n    }\n}\n\nimpl Drop for ThreadPool {\n    fn drop(&mut self) {\n        // Drop the sender to force all the workers to finish up.\n        drop(self.sender.take());\n\n        for worker in &mut self.workers {\n            println!("Shutting down worker {}", worker.id);\n\n            // If there\'s a thread in this worker, wait for\n            // it to finish.  If thread is None, there\'s\n            // nothing to clean up.\n            if let Some(thread) = worker.thread.take() {\n                thread.join().unwrap();\n            }\n        }\n    }\n}\n\nstruct Worker {\n    id: usize,\n    thread: Option<JoinHandle<()>>,\n}\n\nimpl Worker {\n    fn new(id: usize, receiver: Arc<Mutex<mpsc::Receiver<Job>>>) -> Worker {\n        let thread = thread::spawn(move || loop {\n            let message = receiver.lock().unwrap().recv();\n\n            match message {\n                Ok(job) => {\n                    println!("Worker {id} got a job; executing.");\n                    job();\n                }\n                Err(_) => {\n                    println!("Worker {id} disconnected; shutting down.");\n                    break;\n                }\n            }\n        });\n\n        Worker {\n            id,\n            thread: Some(thread),\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Now we just need some way to make the server shut down. A simple way to do this for testing is to modify ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},"    // --snip--\n    for stream in listener.incoming().take(2) {\n    // --snip--\n")),(0,o.kt)("p",null,"Now our server will shut down after two requests."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"The original Rust book has some suggestions about places you could take this project further:"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Add more documentation to ThreadPool and its public methods."),(0,o.kt)("li",{parentName:"ul"},"Add tests of the library's functionality."),(0,o.kt)("li",{parentName:"ul"},"Change calls to unwrap to more robust error handling."),(0,o.kt)("li",{parentName:"ul"},"Use ThreadPool to perform some task other than serving web requests."),(0,o.kt)("li",{parentName:"ul"},"Find a thread pool crate on crates.io and implement a similar web server using the crate instead. Then compare its API and robustness to the thread pool we implemented."))),(0,o.kt)("p",null,"Another fun one might be to try to hook the SIGINT and SIGTERM signals so a CTRL-C will cause the server to shut down gracefully."))}c.isMDXComponent=!0}}]);