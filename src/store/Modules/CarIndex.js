const state={
    httpItem:[
        {id:1,headerName:"Protocols",text:"Communications over the Internet rely on protocols that format your data and dictate how it's used. For example, programs use the File Transfer Protocol to upload files to a Web server and perform maintenance tasks such as renaming files and creating directories. Browser programs such as Firefox and Internet Explorer use the Hyper Text Transfer Protocol, or HTTP, to load most Web pages. HTTP, however, is not secure; a motivated hacker can monitor your data traffic and see which Web pages you visit. To solve this problem, network engineers developed the HTTPS protocol, which moves data using secure methods"},
        {id:2,headerName:"HTTPS",text:"When you log in to an online bank or retailer, the Web page addresses use a prefix of in place of The HTTPS protocol ensures that the session is private and secure. Before the server sends a requested page via HTTPS, it first scrambles the page using complex mathematical methods; the browser receives the data, decodes it and displays the page. The process of encrypting each page imposes a computational burden on the server and your PC; it takes time and makes the session slower than an unsecured one. For this reason, only Web pages that must be kept confidential get the security treatment."},
        {id:3,headerName:"SSL And TLS",text:"When a server receives an HTTPS Web page request, it invokes one of two security software systems, Secure Sockets Layer or the newer Transport Layer Security. SSL and TLS reside on your PC and the server; it is these programs that perform the actual encryption and decryption of information. For example, during an online banking session, you fill out a Web form to see your current balance. The browser passes the page to TLS, which encrypts the data and sends it to the bank's server through the Internet. The bank's computer receives the data and uses TLS to decrypt it, after which the server processes the request."},
        {id:4,headerName:"Certificates",text:"When a server receives an HTTPS Web page request, it invokes one of two security software systems, Secure Sockets Layer or the newer Transport Layer Security. SSL and TLS reside on your PC and the server; it is these programs that perform the actual encryption and decryption of information. For example, during an online banking session, you fill out a Web form to see your current balance. The browser passes the page to TLS, which encrypts the data and sends it to the bank's server through the Internet. The bank's computer receives the data and uses TLS to decrypt it, after which the server processes the request."},
        {id:5,headerName:" For testing 1",text:"Communications over the Internet rely on protocols that format your data and dictate how it's used. For example, programs use the File Transfer Protocol to upload files to a Web server and perform maintenance tasks such as renaming files and creating directories. Browser programs such as Firefox and Internet Explorer use the Hyper Text Transfer Protocol, or HTTP, to load most Web pages. HTTP, however, is not secure; a motivated hacker can monitor your data traffic and see which Web pages you visit. To solve this problem, network engineers developed the HTTPS protocol, which moves data using secure methods"},
        {id:6,headerName:" For testing 2",text:"Communications over the Internet rely on protocols that format your data and dictate how it's used. For example, programs use the File Transfer Protocol to upload files to a Web server and perform maintenance tasks such as renaming files and creating directories. Browser programs such as Firefox and Internet Explorer use the Hyper Text Transfer Protocol, or HTTP, to load most Web pages. HTTP, however, is not secure; a motivated hacker can monitor your data traffic and see which Web pages you visit. To solve this problem, network engineers developed the HTTPS protocol, which moves data using secure methods"},
    ],
    carPage2:[
        {id:1,url:'/../../imagebook/1.jpg',text:'book 1'},
        {id:2,url:'/../../imagebook/2.jpg',text:'book 2'},
        {id:3,url:'/../../imagebook/3.jpg',text:'book 3'},
        {id:4,url:'/../../imagebook/4.jpg',text:'book 4'},
        {id:5,url:'/../../imagebook/5.jpg',text:'book 5'},
        {id:6,url:'/../../imagebook/6.jpg',text:'book 6'},
        {id:7,url:'/../../imagebook/7.jpg',text:'book 7'},
        {id:8,url:'/../../imagebook/8.jpg',text:'book 8'},
        {id:9,url:'/../../imagebook/2.jpg',text:'book 9'},
    ]
};

const getters={};

const mutations={}

const actions={};

export default {
    state,
    getters,
    mutations,
    actions
}