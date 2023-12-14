"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[1731],{4494:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>h,toc:()=>g});var r=a(5893),s=a(1151),t=a(3913),o=a(2425),i=a(769),l=a(6112),d=a(8495),c=a(8485);const p={sidebar_position:2,sidebar_label:"Spark Operator with YuniKorn"},u="Spark Operator with YuniKorn",h={id:"blueprints/data-analytics/spark-operator-yunikorn",title:"Spark Operator with YuniKorn",description:"Introduction",source:"@site/docs/blueprints/data-analytics/spark-operator-yunikorn.md",sourceDirName:"blueprints/data-analytics",slug:"/blueprints/data-analytics/spark-operator-yunikorn",permalink:"/data-on-eks/docs/blueprints/data-analytics/spark-operator-yunikorn",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/data-analytics/spark-operator-yunikorn.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Spark Operator with YuniKorn"},sidebar:"blueprints",previous:{title:"Introduction",permalink:"/data-on-eks/docs/blueprints/data-analytics/"},next:{title:"Observability Spark on EKS",permalink:"/data-on-eks/docs/blueprints/data-analytics/observability-spark-on-eks"}},m={},g=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3},{value:"NVMe Ephemeral SSD disk for Spark shuffle storage",id:"nvme-ephemeral-ssd-disk-for-spark-shuffle-storage",level:2},{value:"EBS Dynamic PVC for shuffle storage",id:"ebs-dynamic-pvc-for-shuffle-storage",level:2},{value:"Apache YuniKorn Gang Scheduling with NVMe based SSD disk for shuffle storage",id:"apache-yunikorn-gang-scheduling-with-nvme-based-ssd-disk-for-shuffle-storage",level:2},{value:"NVMe Ephemeral SSD disk for Spark shuffle storage",id:"nvme-ephemeral-ssd-disk-for-spark-shuffle-storage-1",level:2},{value:"EBS Dynamic PVC for shuffle storage",id:"ebs-dynamic-pvc-for-shuffle-storage-1",level:2},{value:"Apache YuniKorn Gang Scheduling with NVMe based SSD disk for shuffle storage",id:"apache-yunikorn-gang-scheduling-with-nvme-based-ssd-disk-for-shuffle-storage-1",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...(0,s.a)(),...e.components},{Details:p}=n;return p||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"spark-operator-with-yunikorn",children:"Spark Operator with YuniKorn"}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"The EKS Cluster design for the Data on EKS blueprint is optimized for running Spark applications with Spark Operator and Apache YuniKorn as the batch scheduler. This blueprint shows both options of leveraging Cluster Autoscaler and Karpenter for Spark Workloads. AWS for FluentBit is employed for logging, and a combination of Prometheus, Amazon Managed Prometheus, and open source Grafana are used for observability. Additionally, the Spark History Server Live UI is configured for monitoring running Spark jobs through an NLB and NGINX ingress controller."}),"\n",(0,r.jsxs)(i.Z,{header:(0,r.jsx)(n.h2,{children:(0,r.jsx)(n.span,{children:"Spark workloads with Karpenter"})}),children:[(0,r.jsx)(n.p,{children:"The first option presents leverages Karpenter as the autoscaler, eliminating the need for Managed Node Groups and Cluster Autoscaler. In this design, Karpenter and its provisioner are responsible for creating both On-Demand and Spot instances, dynamically selecting instance types based on user demands. Karpenter offers improved performance compared to Cluster Autoscaler, with more efficient node scaling and faster response times. Karpenter's key features include its ability to scale from zero, optimizing resource utilization and reducing costs when there is no demand for resources. Additionally, Karpenter supports multiple provisioners, allowing for greater flexibility in defining the required infrastructure for different workload types, such as compute, memory, and GPU-intensive tasks. Furthermore, Karpenter integrates seamlessly with Kubernetes, providing automatic, real-time adjustments to the cluster size based on observed workloads and scaling events. This enables a more efficient and cost-effective EKS cluster design that adapts to the ever-changing demands of Spark applications and other workloads."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img.png",src:a(144).Z+"",width:"4194",height:"2705"})}),(0,r.jsxs)(t.Z,{children:[(0,r.jsxs)(o.Z,{value:"spark-memory-optimized",label:"spark-memory-optimized",children:[(0,r.jsx)(n.p,{children:"In this tutorial, you will use Karpenter provisioner that uses memory optimized instances. This template uses the AWS Node template with Userdata."}),(0,r.jsxs)(p,{children:[(0,r.jsx)("summary",{children:" To view Karpenter provisioner for memory optimized instances, Click to toggle content!"}),(0,r.jsx)(l.Z,{language:"yaml",children:d.Z})]}),(0,r.jsxs)(n.p,{children:["To run Spark Jobs that can use this provisioner, you need to submit your jobs by adding ",(0,r.jsx)(n.code,{children:"tolerations"})," to your pod templates"]}),(0,r.jsx)(n.p,{children:"For example,"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'spec:\n  tolerations:\n    - key: "spark-memory-optimized"\n      operator: "Exists"\n      effect: "NoSchedule"\n'})})]}),(0,r.jsxs)(o.Z,{value:"spark-graviton-memory-optimized",label:"spark-graviton-memory-optimized",children:[(0,r.jsx)(n.p,{children:"In this yaml, you will use Karpenter provisioner that uses Graviton memory optimized instances. This template uses the AWS Node template with Userdata."}),(0,r.jsxs)(p,{children:[(0,r.jsx)("summary",{children:" To view Karpenter provisioner for Graviton memory optimized instances, Click to toggle content!"}),(0,r.jsx)(l.Z,{language:"yaml",children:c.Z})]}),(0,r.jsxs)(n.p,{children:["To run Spark Jobs that can use this provisioner, you need to submit your jobs by adding ",(0,r.jsx)(n.code,{children:"tolerations"})," to your pod templates"]}),(0,r.jsx)(n.p,{children:"For example,"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'spec:\n  tolerations:\n    - key: "spark-graviton-memory-optimized"\n      operator: "Exists"\n      effect: "NoSchedule"\n'})})]})]})]}),"\n",(0,r.jsxs)(i.Z,{header:(0,r.jsx)(n.h2,{children:(0,r.jsx)(n.span,{children:"Spark workloads with ClusterAutoscaler and Managed NodeGroups"})}),children:[(0,r.jsx)(n.p,{children:"The second option leverages Cluster Autoscaler as an alternative design utilizing Cluster Autoscaler with Managed Node Groups for scaling Spark workloads. Spark Driver pods are scaled using On-Demand Node Groups, while Spot Node Groups are utilized for Executor pods. The Cluster Autoscaler ensures that the EKS cluster size adapts to the demands of the Spark applications, while Managed Node Groups provide the underlying infrastructure for the Driver and Executor pods. This design allows for a seamless scaling experience, adjusting resources based on workload requirements while minimizing costs."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img.png",src:a(4771).Z+"",width:"1398",height:"834"})})]}),"\n",(0,r.jsxs)(i.Z,{header:(0,r.jsx)(n.h2,{children:(0,r.jsx)(n.span,{children:"NVMe SSD Instance Storage for Spark Shuffle data"})}),children:[(0,r.jsx)(n.p,{children:'It is important to note that both options in the EKS Cluster design utilize NVMe SSD instance storage for each node to serve as shuffle storage for Spark workloads. These high-performance storage options are available with all "d" type instances.'}),(0,r.jsx)(n.p,{children:"The use of NVMe SSD instance storage as shuffle storage for Spark brings numerous advantages. First, it provides low-latency and high-throughput data access, significantly improving Spark's shuffle performance. This results in faster job completion times and enhanced overall application performance. Second, the use of local SSD storage reduces the reliance on remote storage systems, such as EBS volumes, which can become a bottleneck during shuffle operations. This also reduces the costs associated with provisioning and managing additional EBS volumes for shuffle data. Finally, by leveraging NVMe SSD storage, the EKS cluster design offers better resource utilization and increased performance, allowing Spark applications to process larger datasets and tackle more complex analytics workloads more efficiently. This optimized storage solution ultimately contributes to a more scalable and cost-effective EKS cluster tailored for running Spark workloads on Kubernetes."})]}),"\n",(0,r.jsxs)(i.Z,{header:(0,r.jsx)(n.h2,{children:(0,r.jsx)(n.span,{children:"Spark Operator"})}),children:[(0,r.jsx)(n.p,{children:"The Kubernetes Operator for Apache Spark aims to make specifying and running Spark applications as easy and idiomatic as running other workloads on Kubernetes."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"a SparkApplication controller that watches events of creation, updates, and deletion of SparkApplication objects and acts on the watch events,"}),"\n",(0,r.jsx)(n.li,{children:"a submission runner that runs spark-submit for submissions received from the controller,"}),"\n",(0,r.jsx)(n.li,{children:"a Spark pod monitor that watches for Spark pods and sends pod status updates to the controller,"}),"\n",(0,r.jsx)(n.li,{children:"a Mutating Admission Webhook that handles customizations for Spark driver and executor pods based on the annotations on the pods added by the controller,"}),"\n",(0,r.jsx)(n.li,{children:"and also a command-line tool named sparkctl for working with the operator."}),"\n"]}),(0,r.jsx)(n.p,{children:"The following diagram shows how different components of Spark Operator add-on interact and work together."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img.png",src:a(56).Z+"",width:"960",height:"540"})})]}),"\n",(0,r.jsxs)(i.Z,{header:(0,r.jsx)(n.h2,{children:(0,r.jsx)(n.span,{children:"Deploying the Solution"})}),children:[(0,r.jsxs)(n.p,{children:["In this ",(0,r.jsx)(n.a,{href:"https://github.com/awslabs/data-on-eks/tree/main/analytics/terraform/spark-k8s-operator",children:"example"}),", you will provision the following resources required to run Spark Jobs with open source Spark Operator and Apache YuniKorn."]}),(0,r.jsx)(n.p,{children:"This example deploys an EKS Cluster running the Spark K8s Operator into a new VPC."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Creates a new sample VPC, 2 Private Subnets and 2 Public Subnets"}),"\n",(0,r.jsx)(n.li,{children:"Creates Internet gateway for Public Subnets and NAT Gateway for Private Subnets"}),"\n",(0,r.jsx)(n.li,{children:"Creates EKS Cluster Control plane with public endpoint (for demo reasons only) with core managed node group, on-demand node group and Spot node group for Spark workloads."}),"\n",(0,r.jsx)(n.li,{children:"Deploys Metrics server, Cluster Autoscaler, Spark-k8s-operator, Apache Yunikorn, Karpenter, Grafana, AMP and Prometheus server."}),"\n"]}),(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),(0,r.jsx)(n.p,{children:"Ensure that you have installed the following tools on your machine."}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n"]}),(0,r.jsx)(n.h3,{id:"deploy",children:"Deploy"}),(0,r.jsx)(n.p,{children:"Clone the repository"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\n"})}),(0,r.jsxs)(n.p,{children:["Navigate into one of the example directories and run ",(0,r.jsx)(n.code,{children:"install.sh"})," script"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/analytics/terraform/spark-k8s-operator\nchmod +x install.sh\n./install.sh\n"})})]}),"\n",(0,r.jsxs)(i.Z,{header:(0,r.jsx)(n.h2,{children:(0,r.jsx)(n.span,{children:"Execute Sample Spark job with Karpenter"})}),children:[(0,r.jsx)(n.p,{children:"Navigate to example directory and submit the Spark job."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/analytics/terraform/spark-k8s-operator/examples/karpenter\nkubectl apply -f pyspark-pi-job.yaml\n"})}),(0,r.jsx)(n.p,{children:"Monitor the job status using the below command.\nYou should see the new nodes triggered by the karpenter and the YuniKorn will schedule one driver pod and 2 executor pods on this node."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl get pods -n spark-team-a -w\n"})}),(0,r.jsx)(n.p,{children:"You can try the following examples to leverage multiple Karpenter provisioners, EBS as Dynamic PVC instead of SSD and YuniKorn Gang Scheduling."}),(0,r.jsx)(n.h2,{id:"nvme-ephemeral-ssd-disk-for-spark-shuffle-storage",children:"NVMe Ephemeral SSD disk for Spark shuffle storage"}),(0,r.jsx)(n.p,{children:"Example PySpark job that uses NVMe based ephemeral SSD disk for Driver and Executor shuffle storage"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  cd analytics/terraform/spark-k8s-operator/examples/karpenter/nvme-ephemeral-storage/\n"})}),(0,r.jsx)(n.p,{children:"Update the variables in Shell script and execute"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  ./taxi-trip-execute.sh\n"})}),(0,r.jsx)(n.p,{children:"Update YAML file and run the below command"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  kubectl apply -f nvme-ephemeral-storage.yaml\n"})}),(0,r.jsx)(n.h2,{id:"ebs-dynamic-pvc-for-shuffle-storage",children:"EBS Dynamic PVC for shuffle storage"}),(0,r.jsx)(n.p,{children:"Example PySpark job that uses EBS ON_DEMAND volumes using Dynamic PVCs for Driver and Executor shuffle storage"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  cd analytics/terraform/spark-k8s-operator/examples/karpenter/ebs-storage-dynamic-pvc/\n"})}),(0,r.jsx)(n.p,{children:"Update the variables in Shell script and execute"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  ./taxi-trip-execute.sh\n"})}),(0,r.jsx)(n.p,{children:"Update YAML file and run the below command"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  kubectl apply -f ebs-storage-dynamic-pvc.yaml\n"})}),(0,r.jsx)(n.h2,{id:"apache-yunikorn-gang-scheduling-with-nvme-based-ssd-disk-for-shuffle-storage",children:"Apache YuniKorn Gang Scheduling with NVMe based SSD disk for shuffle storage"}),(0,r.jsx)(n.p,{children:"Gang Scheduling Spark jobs using Apache YuniKorn and Spark Operator"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  cd analytics/terraform/spark-k8s-operator/examples/karpenter/nvme-yunikorn-gang-scheduling/\n"})}),(0,r.jsx)(n.p,{children:"Update the variables in Shell script and execute"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  ./taxi-trip-execute.sh\n"})}),(0,r.jsx)(n.p,{children:"Update YAML file and run the below command"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  kubectl apply -f nvme-storage-yunikorn-gang-scheduling.yaml\n"})})]}),"\n",(0,r.jsxs)(i.Z,{header:(0,r.jsx)(n.h2,{children:(0,r.jsx)(n.span,{children:"Execute Sample Spark job with Cluster Autoscaler and Managed Node groups"})}),children:[(0,r.jsx)(n.p,{children:"Navigate to example directory and submit the Spark job."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/analytics/terraform/spark-k8s-operator/examples/cluster-autoscaler\nkubectl apply -f pyspark-pi-job.yaml\n"})}),(0,r.jsx)(n.p,{children:"Monitor the job status using the below command.\nYou should see the new nodes triggered by the karpenter and the YuniKorn will schedule one driver pod and 2 executor pods on this node."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl get pods -n spark-team-a -w\n"})}),(0,r.jsx)(n.h2,{id:"nvme-ephemeral-ssd-disk-for-spark-shuffle-storage-1",children:"NVMe Ephemeral SSD disk for Spark shuffle storage"}),(0,r.jsx)(n.p,{children:"Example PySpark job that uses NVMe based ephemeral SSD disk for Driver and Executor shuffle storage"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  cd analytics/terraform/spark-k8s-operator/examples/cluster-autoscaler/nvme-ephemeral-storage\n"})}),(0,r.jsx)(n.p,{children:"Update the variables in Shell script and execute"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  ./taxi-trip-execute.sh\n"})}),(0,r.jsx)(n.p,{children:"Update YAML file and run the below command"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  kubectl apply -f nvme-ephemeral-storage.yaml\n"})}),(0,r.jsx)(n.h2,{id:"ebs-dynamic-pvc-for-shuffle-storage-1",children:"EBS Dynamic PVC for shuffle storage"}),(0,r.jsx)(n.p,{children:"Example PySpark job that uses EBS ON_DEMAND volumes using Dynamic PVCs for Driver and Executor shuffle storage"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  cd analytics/terraform/spark-k8s-operator/examples/cluster-autoscaler/ebs-storage-dynamic-pvc\n"})}),(0,r.jsx)(n.p,{children:"Update the variables in Shell script and execute"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  ./taxi-trip-execute.sh\n"})}),(0,r.jsx)(n.p,{children:"Update YAML file and run the below command"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  kubectl apply -f ebs-storage-dynamic-pvc.yaml\n"})}),(0,r.jsx)(n.h2,{id:"apache-yunikorn-gang-scheduling-with-nvme-based-ssd-disk-for-shuffle-storage-1",children:"Apache YuniKorn Gang Scheduling with NVMe based SSD disk for shuffle storage"}),(0,r.jsx)(n.p,{children:"Gang Scheduling Spark jobs using Apache YuniKorn and Spark Operator"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  cd analytics/terraform/spark-k8s-operator/examples/cluster-autoscaler/nvme-yunikorn-gang-scheduling\n"})}),(0,r.jsx)(n.p,{children:"Update the variables in Shell script and execute"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  ./taxi-trip-execute.sh\n"})}),(0,r.jsx)(n.p,{children:"Update YAML file and run the below command"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  kubectl apply -f nvme-storage-yunikorn-gang-scheduling.yaml\n"})})]}),"\n",(0,r.jsxs)(i.Z,{header:(0,r.jsx)(n.h2,{children:(0,r.jsx)(n.span,{children:"Example for TPCDS Benchmark test"})}),children:[(0,r.jsx)(n.p,{children:"Check the pre-requisites in yaml file before running this job."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd analytics/terraform/spark-k8s-operator/examples/benchmark\n"})}),(0,r.jsx)(n.p,{children:"Step1: Benchmark test data generation"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f tpcds-benchmark-data-generation-1t\n"})}),(0,r.jsx)(n.p,{children:"Step2: Execute Benchmark test"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  kubectl apply -f tpcds-benchmark-1t.yaml\n"})})]}),"\n",(0,r.jsxs)(i.Z,{header:(0,r.jsx)(n.h2,{children:(0,r.jsx)(n.span,{children:"Cleanup"})}),children:[(0,r.jsxs)(n.p,{children:["This script will cleanup the environment using ",(0,r.jsx)(n.code,{children:"-target"})," option to ensure all the resources are deleted in correct order."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd analytics/terraform/spark-k8s-operator && chmod +x cleanup.sh\n./cleanup.sh\n"})})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment"})})]})}function b(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},2425:(e,n,a)=>{a.d(n,{Z:()=>o});a(7294);var r=a(512);const s={tabItem:"tabItem__kUE"};var t=a(5893);function o(e){let{children:n,hidden:a,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:a,children:n})}},3913:(e,n,a)=>{a.d(n,{Z:()=>j});var r=a(7294),s=a(512),t=a(5944),o=a(6550),i=a(469),l=a(2434),d=a(2398),c=a(3088);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:s}}=e;return{value:n,label:a,attributes:r,default:s}}))}(a);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const s=(0,o.k6)(),t=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l._X)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace({...s.location,search:n.toString()})}),[t,s])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,t=u(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[d,p]=m({queryString:a,groupId:s}),[g,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,t]=(0,c.Nk)(a);return[s,(0,r.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:s}),b=(()=>{const e=d??g;return h({value:e,tabValues:t})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,t]),tabValues:t}}var f=a(2389);const b={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var k=a(5893);function x(e){let{className:n,block:a,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.o5)(),c=e=>{const n=e.currentTarget,a=l.indexOf(n),s=i[a].value;s!==r&&(d(n),o(s))},p=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:t}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:p,onClick:c,...t,className:(0,s.Z)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function y(e){let{lazy:n,children:a,selectedValue:s}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=g(e);return(0,k.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,k.jsx)(x,{...e,...n}),(0,k.jsx)(y,{...e,...n})]})}function j(e){const n=(0,f.Z)();return(0,k.jsx)(v,{...e,children:p(e.children)},String(n))}},769:(e,n,a)=>{a.d(n,{Z:()=>m});var r=a(7294),s=a(5697),t=a.n(s),o=a(512);const i="collapsibleContent_q3kw",l="header_QCEw",d="icon_PckA",c="content_qLC1",p="expanded_iGsi";var u=a(5893);function h(e){let{children:n,header:a}=e;const[s,t]=(0,r.useState)(!1);return(0,u.jsxs)("div",{className:i,children:[(0,u.jsxs)("div",{className:(0,o.Z)(l,{[p]:s}),onClick:()=>{t(!s)},children:[a,(0,u.jsx)("span",{className:(0,o.Z)(d,{[p]:s}),children:s?"\ud83d\udc47":"\ud83d\udc48"})]}),s&&(0,u.jsx)("div",{className:c,children:n})]})}h.propTypes={children:t().node.isRequired,header:t().node.isRequired};const m=h},8485:(e,n,a)=>{a.d(n,{Z:()=>r});const r='apiVersion: karpenter.sh/v1alpha5\nkind: Provisioner\nmetadata:\n  name: spark-graviton-memory-optimized\n  namespace: karpenter\nspec:\n  kubeletConfiguration:\n    containerRuntime: containerd\n#    podsPerCore: 2\n#    maxPods: 20\n  requirements:\n    - key: "topology.kubernetes.io/zone"\n      operator: In\n      values: [${azs}b] #Update the correct region and zone\n    - key: "karpenter.sh/capacity-type"\n      operator: In\n      values: ["spot", "on-demand"]\n    - key: "node.kubernetes.io/instance-type" #If not included, all instance types are considered\n      operator: In\n      values: ["r6gd.4xlarge", "r6gd.8xlarge"] # 2 NVMe disk\n    - key: "kubernetes.io/arch"\n      operator: In\n      values: ["arm64"]\n  limits:\n    resources:\n      cpu: 1000\n  providerRef: # optional, recommended to use instead of `provider`\n    name: spark-graviton-memory-optimized\n  labels:\n    type: karpenter\n    provisioner: spark-graviton-memory-optimized\n    NodeGroupType: SparkGravitonMemoryOptimized\n  taints:\n    - key: spark-graviton-memory-optimized\n      value: \'true\'\n      effect: NoSchedule\n  ttlSecondsAfterEmpty: 120 # optional, but never scales down if not set\n\n---\napiVersion: karpenter.k8s.aws/v1alpha1\nkind: AWSNodeTemplate\nmetadata:\n  name: spark-graviton-memory-optimized\n  namespace: karpenter\nspec:\n  blockDeviceMappings:\n    - deviceName: /dev/xvda\n      ebs:\n        volumeSize: 200Gi\n        volumeType: gp3\n        encrypted: true\n        deleteOnTermination: true\n  metadataOptions:\n    httpEndpoint: enabled\n    httpProtocolIPv6: disabled\n    httpPutResponseHopLimit: 2\n    httpTokens: required\n  subnetSelector:\n    Name: "${eks_cluster_id}-private*"        # Name of the Subnets to spin up the nodes\n  securityGroupSelector:                      # required, when not using launchTemplate\n    Name: "${eks_cluster_id}-node*"           # name of the SecurityGroup to be used with Nodes\n  #  instanceProfile: ""      # optional, if already set in controller args\n  #RAID0 config example\n  userData: |\n    MIME-Version: 1.0\n    Content-Type: multipart/mixed; boundary="BOUNDARY"\n\n    --BOUNDARY\n    Content-Type: text/x-shellscript; charset="us-ascii"\n\n    cat <<-EOF > /etc/profile.d/bootstrap.sh\n    #!/bin/sh\n\n    # Configure NVMe volumes in RAID0 configuration\n    # https://github.com/awslabs/amazon-eks-ami/blob/056e31f8c7477e893424abce468cb32bbcd1f079/files/bootstrap.sh#L35C121-L35C126\n    # Mount will be: /mnt/k8s-disks\n    export LOCAL_DISKS=\'raid0\'\n    EOF\n\n    # Source extra environment variables in bootstrap script\n    sed -i \'/^set -o errexit/a\\\\nsource /etc/profile.d/bootstrap.sh\' /etc/eks/bootstrap.sh\n\n    --BOUNDARY--\n\n  tags:\n    InstanceType: "spark-graviton-memory-optimized"    # optional, add tags for your own use\n'},8495:(e,n,a)=>{a.d(n,{Z:()=>r});const r='apiVersion: karpenter.sh/v1alpha5\nkind: Provisioner\nmetadata:\n  name: spark-memory-optimized\n  namespace: karpenter\nspec:\n  kubeletConfiguration:\n    containerRuntime: containerd\n#    podsPerCore: 2\n#    maxPods: 20\n  requirements:\n    - key: "topology.kubernetes.io/zone"\n      operator: In\n      values: [${azs}b] # Update the correct region and zone\n    - key: "karpenter.sh/capacity-type"\n      operator: In\n      values: ["spot", "on-demand"]\n    - key: "karpenter.k8s.aws/instance-family"\n      operator: In\n      values: ["r5d"]\n    - key: "karpenter.k8s.aws/instance-size"\n      operator: In\n      values: ["2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"]\n#    - key: "node.kubernetes.io/instance-type" #If not included, all instance types are considered\n#      operator: In\n#      values: ["r5d.4xlarge","r5d.8xlarge","r5d.12xlarge"] # 2 NVMe disk\n    - key: "kubernetes.io/arch"\n      operator: In\n      values: ["amd64"]\n  limits:\n    resources:\n      cpu: 1000\n  providerRef: # optional, recommended to use instead of `provider`\n    name: spark-memory-optimized\n  labels:\n    type: karpenter\n    provisioner: spark-memory-optimized\n    NodeGroupType: SparkMemoryOptimized\n  taints:\n    - key: spark-memory-optimized\n      value: \'true\'\n      effect: NoSchedule\n  # If omitted, the feature is disabled, nodes will never scale down due to low utilization\n  ttlSecondsAfterEmpty: 120\n  # Enables consolidation which attempts to reduce cluster cost by both removing un-needed nodes and down-sizing those\n  # that can\'t be removed.  Mutually exclusive with the ttlSecondsAfterEmpty parameter.\n#  consolidation:\n#    enabled: true\n  # If omitted, the feature is disabled and nodes will never expire.  If set to less time than it requires for a node\n  # to become ready, the node may expire before any pods successfully start.\n#  ttlSecondsUntilExpired: 2592000 # 30 Days = 60 * 60 * 24 * 30 Seconds;\n\n---\napiVersion: karpenter.k8s.aws/v1alpha1\nkind: AWSNodeTemplate\nmetadata:\n  name: spark-memory-optimized\n  namespace: karpenter\nspec:\n  blockDeviceMappings:\n    - deviceName: /dev/xvda\n      ebs:\n        volumeSize: 100Gi\n        volumeType: gp3\n        encrypted: true\n        deleteOnTermination: true\n  metadataOptions:\n    httpEndpoint: enabled\n    httpProtocolIPv6: disabled\n    httpPutResponseHopLimit: 2\n    httpTokens: required\n  subnetSelector:\n    Name: "${eks_cluster_id}-private*"        # Name of the Subnets to spin up the nodes\n  securityGroupSelector:                      # required, when not using launchTemplate\n    Name: "${eks_cluster_id}-node*"           # name of the SecurityGroup to be used with Nodes\n  #  instanceProfile: ""      # optional, if already set in controller args\n  #RAID0 config example\n  userData: |\n    MIME-Version: 1.0\n    Content-Type: multipart/mixed; boundary="BOUNDARY"\n\n    --BOUNDARY\n    Content-Type: text/x-shellscript; charset="us-ascii"\n\n    cat <<-EOF > /etc/profile.d/bootstrap.sh\n    #!/bin/sh\n\n    # Configure NVMe volumes in RAID0 configuration\n    # https://github.com/awslabs/amazon-eks-ami/blob/056e31f8c7477e893424abce468cb32bbcd1f079/files/bootstrap.sh#L35C121-L35C126\n    # Mount will be: /mnt/k8s-disks\n    export LOCAL_DISKS=\'raid0\'\n    EOF\n\n    # Source extra environment variables in bootstrap script\n    sed -i \'/^set -o errexit/a\\\\nsource /etc/profile.d/bootstrap.sh\' /etc/eks/bootstrap.sh\n\n    --BOUNDARY--\n\n  tags:\n    InstanceType: "spark-memory-optimized"    # optional, add tags for your own use\n'},4771:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/eks-spark-operator-ca-50c4a6548c280ad97f6c0083ca0324b0.png"},144:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/eks-spark-operator-karpenter-c55257bc1dc1c98152bea2f8ebcc8bd3.png"},56:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/spark-operator-6752098849b2e90ded1f19770c70f101.png"}}]);