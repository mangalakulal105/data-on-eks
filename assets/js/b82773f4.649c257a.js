"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[5738],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},769:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(7294),n=r(5697),o=r.n(n),l=r(6010);const s="collapsibleContent_q3kw",i="header_QCEw",p="icon_PckA",u="content_qLC1",m="expanded_iGsi";function c(e){let{children:t,header:r}=e;const[n,o]=(0,a.useState)(!1);return a.createElement("div",{className:s},a.createElement("div",{className:(0,l.Z)(i,{[m]:n}),onClick:()=>{o(!n)}},r,a.createElement("span",{className:(0,l.Z)(p,{[m]:n})},n?"\ud83d\udc47":"\ud83d\udc48")),n&&a.createElement("div",{className:u},t))}c.propTypes={children:o().node.isRequired,header:o().node.isRequired};const d=c},3223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905)),o=r(769);const l={sidebar_position:3,sidebar_label:"EMR Runtime with Spark Operator"},s="EMR Runtime with Spark Operator",i={unversionedId:"blueprints/amazon-emr-on-eks/emr-eks-spark-operator",id:"blueprints/amazon-emr-on-eks/emr-eks-spark-operator",title:"EMR Runtime with Spark Operator",description:"Introduction",source:"@site/docs/blueprints/amazon-emr-on-eks/emr-eks-spark-operator.md",sourceDirName:"blueprints/amazon-emr-on-eks",slug:"/blueprints/amazon-emr-on-eks/emr-eks-spark-operator",permalink:"/data-on-eks/docs/blueprints/amazon-emr-on-eks/emr-eks-spark-operator",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/amazon-emr-on-eks/emr-eks-spark-operator.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"EMR Runtime with Spark Operator"},sidebar:"blueprints",previous:{title:"EMR on EKS Observability",permalink:"/data-on-eks/docs/blueprints/amazon-emr-on-eks/emr-eks-observability"},next:{title:"EMR on EKS with ACK Controller",permalink:"/data-on-eks/docs/blueprints/amazon-emr-on-eks/emr-eks-ack"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Deploy",id:"deploy",level:3},{value:"Verify the resources",id:"verify-the-resources",level:2}],m={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"emr-runtime-with-spark-operator"},"EMR Runtime with Spark Operator"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"In this post, we will learn to deploy EKS with EMR Spark Operator and execute sample Spark job with EMR runtime."),(0,n.kt)("p",null,"In this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/tree/main/analytics/terraform/emr-eks-karpenter"},"example"),", you will provision the following resources required to run Spark Applications using the Spark Operator and EMR runtime."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Creates EKS Cluster Control plane with public endpoint (for demo purpose only)"),(0,n.kt)("li",{parentName:"ul"},"Two managed node groups",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Core Node group with 3 AZs for running system critical pods. e.g., Cluster Autoscaler, CoreDNS, Observability, Logging etc."),(0,n.kt)("li",{parentName:"ul"},"Spark Node group with single AZ for running Spark jobs"))),(0,n.kt)("li",{parentName:"ul"},"Creates one Data team (",(0,n.kt)("inlineCode",{parentName:"li"},"emr-data-team-a"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Creates new namespace for the team"),(0,n.kt)("li",{parentName:"ul"},"New IAM role for the team execution role"))),(0,n.kt)("li",{parentName:"ul"},"IAM policy for ",(0,n.kt)("inlineCode",{parentName:"li"},"emr-data-team-a")),(0,n.kt)("li",{parentName:"ul"},"Spark History Server Live UI is configured for monitoring running Spark jobs through an NLB and NGINX ingress controller"),(0,n.kt)("li",{parentName:"ul"},"Deploys the following Kubernetes Add-ons",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Managed Add-ons",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"VPC CNI, CoreDNS, KubeProxy, AWS EBS CSi Driver"))),(0,n.kt)("li",{parentName:"ul"},"Self Managed Add-ons",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Metrics server with HA, CoreDNS Cluster proportional Autoscaler, Cluster Autoscaler, Prometheus Server and Node Exporter, AWS for FluentBit, CloudWatchMetrics for EKS")))))),(0,n.kt)(o.Z,{header:(0,n.kt)("h2",null,(0,n.kt)("span",null,"EMR Spark Operator")),mdxType:"CollapsibleContent"},(0,n.kt)("p",null,"The Kubernetes Operator for Apache Spark aims to make specifying and running Spark applications as easy and idiomatic as running other workloads on Kubernetes. To submit Spark Applications to Spark Operator and leverage the EMR Runtime we use the Helm Chart hosted in the EMR on EKS ECR repository. The charts are stored under the following path: ",(0,n.kt)("inlineCode",{parentName:"p"},"ECR_URI/spark-operator"),". The ECR repository can be obtained from this ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/setting-up-emr-runtime.html"},"link"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a SparkApplication controller that watches events of creation, updates, and deletion of SparkApplication objects and acts on the watch events,"),(0,n.kt)("li",{parentName:"ul"},"a submission runner that runs spark-submit for submissions received from the controller,"),(0,n.kt)("li",{parentName:"ul"},"a Spark pod monitor that watches for Spark pods and sends pod status updates to the controller,"),(0,n.kt)("li",{parentName:"ul"},"a Mutating Admission Webhook that handles customizations for Spark driver and executor pods based on the annotations on the pods added by the controller"))),(0,n.kt)(o.Z,{header:(0,n.kt)("h2",null,(0,n.kt)("span",null,"Deploying the Solution")),mdxType:"CollapsibleContent"},"### Prerequisites:",(0,n.kt)("p",null,"Ensure that you have installed the following tools on your machine."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform"))),(0,n.kt)("h3",{id:"deploy"},"Deploy"),(0,n.kt)("p",null,"Clone the repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n")),(0,n.kt)("p",null,"Navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"analytics/terraform/emr-eks-karpenter")," and run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform init")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ./data-on-eks/analytics/terraform/emr-eks-karpenter\nterraform init\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To deploy the EMR Spark Operator Add-on. You need to set the the below value to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"variables.tf")," file."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-hcl"},'variable "enable_emr_spark_operator" {\n  description = "Enable the Spark Operator to submit jobs with EMR Runtime"\n  default     = true\n  type        = bool\n}\n'))),(0,n.kt)("p",null,"Deploy the pattern"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,n.kt)("p",null,"Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"yes")," to apply."),(0,n.kt)("h2",{id:"verify-the-resources"},"Verify the resources"),(0,n.kt)("p",null,"Let\u2019s verify the resources created by ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply"),"."),(0,n.kt)("p",null,"Verify the Spark Operator and Amazon Managed service for Prometheus."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm list --namespace spark-operator -o yaml\n\naws amp list-workspaces --alias amp-ws-emr-eks-karpenter\n\n")),(0,n.kt)("p",null,"Verify Namespace ",(0,n.kt)("inlineCode",{parentName:"p"},"emr-data-team-a")," and Pod status for ",(0,n.kt)("inlineCode",{parentName:"p"},"Prometheus"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Vertical Pod Autoscaler"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Metrics Server")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster Autoscaler"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks --region us-west-2 update-kubeconfig --name spark-operator-doeks # Creates k8s config file to authenticate with EKS Cluster\n\nkubectl get nodes # Output shows the EKS Managed Node group nodes\n\nkubectl get ns | grep emr-data-team # Output shows emr-data-team-a for data team\n\nkubectl get pods --namespace=vpa  # Output shows Vertical Pod Autoscaler pods\n\nkubectl get pods --namespace=kube-system | grep  metrics-server # Output shows Metric Server pod\n\nkubectl get pods --namespace=kube-system | grep  cluster-autoscaler # Output shows Cluster Autoscaler pod\n"))),(0,n.kt)(o.Z,{header:(0,n.kt)("h2",null,(0,n.kt)("span",null,"Execute Sample Spark job with Karpenter")),mdxType:"CollapsibleContent"},(0,n.kt)("p",null,"Navigate to example directory and submit the Spark job."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/analytics/terraform/emr-eks-karpenter/examples/emr-spark-operator\nkubectl apply -f pyspark-pi-job.yaml\n")),(0,n.kt)("p",null,"Monitor the job status using the below command.\nYou should see the new nodes triggered by the karpenter and the YuniKorn will schedule one driver pod and 2 executor pods on this node."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n spark-team-a -w\n"))),(0,n.kt)(o.Z,{header:(0,n.kt)("h2",null,(0,n.kt)("span",null,"Cleanup")),mdxType:"CollapsibleContent"},(0,n.kt)("p",null,"This script will cleanup the environment using ",(0,n.kt)("inlineCode",{parentName:"p"},"-target")," option to ensure all the resources are deleted in correct order."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd analytics/terraform/emr-eks-karpenter && chmod +x cleanup.sh\n./cleanup.sh\n"))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment")))}d.isMDXComponent=!0}}]);