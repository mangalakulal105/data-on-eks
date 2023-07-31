"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[1060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},769:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7294),r=n(5697),o=n.n(r),i=n(6010);const l="collapsibleContent_q3kw",s="header_QCEw",p="icon_PckA",u="content_qLC1",c="expanded_iGsi";function d(e){let{children:t,header:n}=e;const[r,o]=(0,a.useState)(!1);return a.createElement("div",{className:l},a.createElement("div",{className:(0,i.Z)(s,{[c]:r}),onClick:()=>{o(!r)}},n,a.createElement("span",{className:(0,i.Z)(p,{[c]:r})})),r&&a.createElement("div",{className:u},t))}d.propTypes={children:o().node.isRequired,header:o().node.isRequired};const h=d},6757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(769);const i={sidebar_position:3,sidebar_label:"JupyterHub on EKS"},l="JupyterHub on EKS",s={unversionedId:"blueprints/ai-ml/jupyterhub",id:"blueprints/ai-ml/jupyterhub",title:"JupyterHub on EKS",description:"Note: We are actively working on enhancing this blueprint with additional functionalities to make it more enterprise-ready.",source:"@site/docs/blueprints/ai-ml/jupyterhub.md",sourceDirName:"blueprints/ai-ml",slug:"/blueprints/ai-ml/jupyterhub",permalink:"/data-on-eks/docs/blueprints/ai-ml/jupyterhub",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/ai-ml/jupyterhub.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"JupyterHub on EKS"},sidebar:"blueprints",previous:{title:"Ray on EKS",permalink:"/data-on-eks/docs/blueprints/ai-ml/ray"},next:{title:"EMR NVIDIA Spark-RAPIDS",permalink:"/data-on-eks/docs/blueprints/ai-ml/emr-spark-rapids"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"JupyterHub on EKS",id:"jupyterhub-on-eks-1",level:2},{value:"Deploy",id:"deploy",level:3},{value:"Login into JupyterHub via Amazon Cognito",id:"login-into-jupyterhub-via-amazon-cognito",level:3}],c={toc:u},d="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jupyterhub-on-eks"},"JupyterHub on EKS"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note: We are actively working on enhancing this blueprint with additional functionalities to make it more enterprise-ready.")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jupyter.org/hub"},"JupyterHub"),' is a powerful multi-user server that enables users to access and interact with Jupyter notebooks and other Jupyter-compatible environments. It provides a collaborative platform where multiple users can simultaneously access and utilize notebooks, fostering collaboration and sharing among users. JupyterHub allows users to create their own isolated computing environments (known as "spawners") and launch Jupyter notebooks or other interactive computing environments within those environments. This provides each user with their own workspace, including files, code, and computational resources.'),(0,r.kt)("h2",{id:"jupyterhub-on-eks-1"},"JupyterHub on EKS"),(0,r.kt)("p",null,"JupyterHub on Amazon Elastic Kubernetes Service (EKS) combines the versatility of JupyterHub with the scalability and flexibility of Kubernetes. By deploying JupyterHub on EKS, you can easily manage and maintain a shared Jupyter notebook environment for multiple users. This environment serves as a collaborative and interactive platform for various tasks such as data science, machine learning, and research. The JupyterHub add-on is built upon the JupyterHub project, which supports a multi-user Hub capable of spawning, managing, and proxying multiple instances of single-user Jupyter notebook servers."),(0,r.kt)("p",null,"By leveraging the capabilities of EKS, you can seamlessly scale your JupyterHub environment to meet the needs of your users, ensuring efficient resource utilization and optimal performance. With EKS, you can take advantage of Kubernetes features such as automated scaling, high availability, and easy deployment of updates and upgrades. This enables you to provide a reliable and robust JupyterHub experience for your users, empowering them to collaborate, explore, and analyze data effectively.\nTo get started with JupyterHub on EKS, follow the instructions in this guide to set up and configure your JupyterHub environment."),(0,r.kt)(o.Z,{header:(0,r.kt)("h3",null,(0,r.kt)("span",null,"Deploying the Solution")),mdxType:"CollapsibleContent"},(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/tree/main/ai-ml/jupyterhub"},"blueprint"),"  deploys the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creates a new sample VPC, 2 Private Subnets, and 2 Public Subnets. Link to VPC documentation"),(0,r.kt)("li",{parentName:"ul"},"Sets up an Internet gateway for Public Subnets and NAT Gateway for Private Subnets."),(0,r.kt)("li",{parentName:"ul"},"Creates an EKS Cluster Control plane with a public endpoint (for demo purposes only) and a core managed node group."),(0,r.kt)("li",{parentName:"ul"},"Deploys the ",(0,r.kt)("a",{parentName:"li",href:"https://hub.jupyter.org/helm-chart/"},"JupyterHub Helm chart")," to set up JupyterHub."),(0,r.kt)("li",{parentName:"ul"},"Exposes the JupyterHub proxy using an AWS Network Load Balancer."),(0,r.kt)("li",{parentName:"ul"},"Deploys the EBS CSI driver add-on to enable the use of EBS persistent storage for the EKS data plane."),(0,r.kt)("li",{parentName:"ul"},"Sets up two EFS storage mounts: one for personal storage and one for shared storage."),(0,r.kt)("li",{parentName:"ul"},"Authenticates users using ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cognito/"},"Amazon Cognito")," user pools. Link to Cognito documentation")),(0,r.kt)("p",null,"By following this blueprint, you can easily deploy and configure a JupyterHub environment on EKS, leveraging various AWS services to provide a collaborative and scalable platform for your users."),(0,r.kt)(o.Z,{header:(0,r.kt)("h3",null,(0,r.kt)("span",null,"Pre-requisites")),mdxType:"CollapsibleContent"},(0,r.kt)("p",null,"Ensure that you have installed the following tools on your machine."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Domain Name"),": You need to bring your own domain name to host the JupyterHub WebUI with a custom domain. For testing purposes, you can use a free domain service provider such as ",(0,r.kt)("a",{parentName:"li",href:"https://www.changeip.com/accounts/index.php"},"ChangeIP")," to create a test domain. However, please note that using ChangeIP or similar services for hosting your production or development clusters with JupyterHub is not recommended. Ensure that you review the terms and conditions of using such services."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"SSL Certificate"),": You will also need to obtain an SSL certificate from a trusted Certificate Authority (CA) or through your web hosting provider to attach to the domain. For testing environments, you can generate a self-signed certificate using the OpenSSL service.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem\n")),(0,r.kt)("p",null,"When creating the certificate use a wildcard, so that it can secure a domain and all its subdomains with a single certificate\nThe service generates the private key and self-signed certificate.\nSample prompts to generate a certificate :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7179).Z,width:"1852",height:"1064"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Import the certificate into AWS Certificate Manager")),(0,r.kt)("p",null,"Open the private key(",(0,r.kt)("inlineCode",{parentName:"p"},"key.pem"),") in a text editor and copy the contents into the private key section of ACM. Similarly, copy the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"certificate.pem")," file into the certificate body section and submit."),(0,r.kt)("p",null,"   ",(0,r.kt)("img",{src:n(9340).Z,width:"2586",height:"1120"})),(0,r.kt)("p",null,"   Verify certificate is installed correctly in the console in ACM."),(0,r.kt)("p",null,"   ",(0,r.kt)("img",{src:n(5057).Z,width:"2788",height:"1064"}))),(0,r.kt)("h3",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n")),(0,r.kt)("p",null,"Navigate into one of the blueprint directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/ai-ml/jupyterhub && chmod +x install.sh\n")),(0,r.kt)("p",null,"####\xa0Run the install script"),(0,r.kt)("p",null,"Use the provided helper script ",(0,r.kt)("inlineCode",{parentName:"p"},"install.sh")," to run the terraform init and apply commands. By default the script deploys EKS cluster to ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west-2")," region. Update ",(0,r.kt)("inlineCode",{parentName:"p"},"variables.tf")," to change the region or other variables."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that during the execution of this script, you will be prompted to provide input values for 'Certificate Domain'(",(0,r.kt)("inlineCode",{parentName:"p"},"acm_certificate_domain"),") and 'Sub-domain(",(0,r.kt)("inlineCode",{parentName:"p"},"jupyterhub_domain"),") for JupyterHub'."),(0,r.kt)("p",{parentName:"admonition"},"For 'Certificate Domain', please provide the wildcard root domain for which the SSL certificate has been imported into AWS Certificate Manager (ACM). An example of this could be ",(0,r.kt)("inlineCode",{parentName:"p"},"*.jupyterhubeks.dynamic-dns.net"),"."),(0,r.kt)("p",{parentName:"admonition"},"Regarding the 'Sub-domain for JupyterHub', please provide the fully qualified domain name (FQDN) where you want to host your JupyterHub. For instance, you can use eks.",(0,r.kt)("inlineCode",{parentName:"p"},"eks.jupyterhubeks.dynamic-dns.net")," as the sub-domain."),(0,r.kt)("p",{parentName:"admonition"},"Make sure to provide the appropriate values for these inputs when prompted.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./install.sh\n"))),(0,r.kt)(o.Z,{header:(0,r.kt)("h3",null,(0,r.kt)("span",null,"Verify the resources")),mdxType:"CollapsibleContent"},"To validate that the JupyterHub add-on is running ensure that the add-on deployments for the controller and the webhook are in RUNNING state.",(0,r.kt)("p",null,"Run the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n jupyterhub\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6413).Z,width:"2342",height:"244"})),(0,r.kt)("p",null,"JupyterHub, by default, creates a proxy service called proxy-public which is exposed by Load Balancer."),(0,r.kt)("p",null,"To validate that the proxy service and running and exposed via LoadBalancer.  "),(0,r.kt)("p",null,"Run the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -n jupyterhub\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4796).Z,width:"2492",height:"144"}))),(0,r.kt)("h3",{id:"login-into-jupyterhub-via-amazon-cognito"},"Login into JupyterHub via Amazon Cognito"),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"CNAME")," DNS record in ChangeIP for the JupyterHub domain with the load balancer DNS name."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8927).Z,width:"2210",height:"1160"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When adding the load balancer DNS name in the value field of CNAME in ChangeIP make sure to add a dot(",(0,r.kt)("inlineCode",{parentName:"p"},"."),") at the end of the load-balancer DNS name.")),(0,r.kt)("p",null,"Now typing the domain url in the browser should redirect to the Cognito login page."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5655).Z,width:"2414",height:"1194"})),(0,r.kt)("p",null,"Follow the Cognito sign-up and sign-in process to login."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9112).Z,width:"2414",height:"1194"})),(0,r.kt)("p",null,"Successful sign-in will open up the JupyterHub environment for the logged in user."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7387).Z,width:"2636",height:"1496"})),(0,r.kt)("p",null,"To test the setup of the shared and personal directories in JupyterHub, you can follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open a terminal window from the launcher dashboard.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6387).Z,width:"2636",height:"818"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"execute the command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"df -h\n")),(0,r.kt)("p",null,"Verify EFS mounts created. Each user's private home directory is available at ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/jovyan"),". The shared directory is available at ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/shared")),(0,r.kt)(o.Z,{header:(0,r.kt)("h3",null,(0,r.kt)("span",null,"Cleanup")),mdxType:"CollapsibleContent"},(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment.")),(0,r.kt)("p",null,"This script will cleanup the environment using -target option to ensure all the resources are deleted in correct order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/ai-ml/jupyterhub/ && chmod +x cleanup.sh\n./cleanup.sh\n"))))}h.isMDXComponent=!0},9340:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ACM-bf5924d27455ec9688fed998604447c8.png"},8927:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/CNAME-01756088c6813c9470444a90b156a86f.png"},7179:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Cert_Install-d7de3b8c77bf1e22b7093aa282c871a1.png"},5057:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Cert_List-a1d44ed2b31bc39ad55683b72e7eb2e3.png"},5655:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Cognito-Sign-in-bbcaa40e987306f996cc03fdff219c83.png"},9112:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Cognito-Sign-up-e1ff617d347d33581e59d9d9489db38c.png"},6387:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jupyter_env-a0482d359d963ae4046133be818467f9.png"},7387:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jupyter_launcher-ac52cf79eab3c6de206d1b12e93d5f52.png"},6413:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jupyterhub_running-d5f0d4ec14750f537c7aba8860eccec3.png"},4796:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jupyterhub_service-399e2c1681fdbe2c1a0796a685a2c430.png"}}]);