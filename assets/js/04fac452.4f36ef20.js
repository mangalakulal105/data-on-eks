"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[9312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},769:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7294),i=n(5697),a=n.n(i),o=n(6010);const s="collapsibleContent_q3kw",l="header_QCEw",c="icon_PckA",p="content_qLC1",u="expanded_iGsi";function d(e){let{children:t,header:n}=e;const[i,a]=(0,r.useState)(!1);return r.createElement("div",{className:s},r.createElement("div",{className:(0,o.Z)(l,{[u]:i}),onClick:()=>{a(!i)}},n,r.createElement("span",{className:(0,o.Z)(c,{[u]:i})})),i&&r.createElement("div",{className:p},t))}d.propTypes={children:a().node.isRequired,header:a().node.isRequired};const h=d},1709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905)),a=n(769);const o={sidebar_position:5,sidebar_label:"Trainium on EKS"},s="AWS Trainium on EKS",l={unversionedId:"blueprints/ai-ml/trainium",id:"blueprints/ai-ml/trainium",title:"AWS Trainium on EKS",description:"AWS Trainium is an advanced ML accelerator that transforms high-performance deep learning(DL) training. Trn1 instances, powered by AWS Trainium chips, are purpose-built for high-performance DL training of 100B+ parameter models. Meticulously designed for exceptional performance, Trn1 instances cater specifically to training popular Natual Language Processing(NLP) models on AWS, offering up to  50% cost savings  compared to GPU-based EC2 instances. This cost efficiency makes them an attractive option for data scientists and ML practitioners seeking optimized training costs without compromising performance.",source:"@site/docs/blueprints/ai-ml/trainium.md",sourceDirName:"blueprints/ai-ml",slug:"/blueprints/ai-ml/trainium",permalink:"/data-on-eks/docs/blueprints/ai-ml/trainium",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/ai-ml/trainium.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Trainium on EKS"},sidebar:"blueprints",previous:{title:"EMR NVIDIA Spark-RAPIDS",permalink:"/data-on-eks/docs/blueprints/ai-ml/emr-spark-rapids"},next:{title:"Kubeflow on AWS",permalink:"/data-on-eks/docs/blueprints/ai-ml/kubeflow"}},c={},p=[{value:"Trianium Device Architecture",id:"trianium-device-architecture",level:4},{value:"AWS Neuron Drivers",id:"aws-neuron-drivers",level:4},{value:"AWS Neuron Runtime",id:"aws-neuron-runtime",level:4},{value:"AWS Neuron Device Plugin for Kubernetes",id:"aws-neuron-device-plugin-for-kubernetes",level:4},{value:"FSx for Lustre",id:"fsx-for-lustre",level:4},{value:"TorchX",id:"torchx",level:4},{value:"Volcano Scheduler",id:"volcano-scheduler",level:4},{value:"Solution Architecture",id:"solution-architecture",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Verify the resources",id:"verify-the-resources",level:3},{value:"Distributed PyTorch Training on Trainium with TorchX and EKS",id:"distributed-pytorch-training-on-trainium-with-torchx-and-eks",level:3},{value:"Step1: Create a Docker image  for PyTorch Neuron container for BERT-large model pre-training",id:"step1-create-a-docker-image--for-pytorch-neuron-container-for-bert-large-model-pre-training",level:4},{value:"Step2: Copy WikiCorpus pre-training dataset for BERT model to FSx for Lustre filesystem",id:"step2-copy-wikicorpus-pre-training-dataset-for-bert-model-to-fsx-for-lustre-filesystem",level:4},{value:"Step3: Precompile the BERT graphs using neuron_parallel_compile",id:"step3-precompile-the-bert-graphs-using-neuron_parallel_compile",level:4},{value:"Step4: Launch BERT pretraining job using 64 Neuron cores with two trn1.32xlarge instances",id:"step4-launch-bert-pretraining-job-using-64-neuron-cores-with-two-trn132xlarge-instances",level:4}],u={toc:p},d="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aws-trainium-on-eks"},"AWS Trainium on EKS"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/machine-learning/trainium/"},"AWS Trainium")," is an advanced ML accelerator that transforms high-performance deep learning(DL) training. ",(0,i.kt)("inlineCode",{parentName:"p"},"Trn1")," instances, powered by AWS Trainium chips, are purpose-built for high-performance DL training of ",(0,i.kt)("strong",{parentName:"p"},"100B+ parameter")," models. Meticulously designed for exceptional performance, Trn1 instances cater specifically to training popular Natual Language Processing(NLP) models on AWS, offering up to  ",(0,i.kt)("strong",{parentName:"p"},"50% cost savings ")," compared to GPU-based EC2 instances. This cost efficiency makes them an attractive option for data scientists and ML practitioners seeking optimized training costs without compromising performance."),(0,i.kt)("p",null,"At the core of Trn1 instance's capabilities lies the ",(0,i.kt)("a",{parentName:"p",href:"https://awsdocs-neuron.readthedocs-hosted.com/en/latest/"},"AWS Neuron SDK"),", a software development kit seamlessly integrated with leading ML frameworks and libraries, such as ",(0,i.kt)("a",{parentName:"p",href:"https://pytorch.org/"},"PyTorch"),", ",(0,i.kt)("a",{parentName:"p",href:"https://tensorflow.org/"},"TensorFlow"),", ",(0,i.kt)("a",{parentName:"p",href:"https://huggingface.co/docs/accelerate/usage_guides/megatron_lm"},"Megatron-LM"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://huggingface.co/"},"Hugging Face"),". The Neuron SDK empowers developers to train NLP, computer vision, and recommender models on Trainium with ease, requiring only a few lines of code changes."),(0,i.kt)("p",null,"In this blueprint, we will learn how to securely deploy an ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/clusters.html"},"Amazon EKS Cluster")," with Trainium Node groups (",(0,i.kt)("inlineCode",{parentName:"p"},"Trn1.32xlarge")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Trn1n.32xlarge"),") and all the required plugins(EFA Package for EC2, Neuron Device K8s Plugin and EFA K8s plugin). Once the deployment is complete, we will learn how to train a BERT-large(Bidirectional Encoder Representations from Transformers) model  with Distributed PyTorch pre-training using the WikiCorpus dataset. For scheduling the distributed training job, we will utilize ",(0,i.kt)("a",{parentName:"p",href:"https://pytorch.org/torchx/latest/"},"TorchX")," with the ",(0,i.kt)("a",{parentName:"p",href:"https://volcano.sh/en/"},"Volcano Scheduler"),". Additionally, we can monitor the neuron activity during training using ",(0,i.kt)("inlineCode",{parentName:"p"},"neuron-top"),"."),(0,i.kt)("h4",{id:"trianium-device-architecture"},"Trianium Device Architecture"),(0,i.kt)("p",null,"Each Trainium device (chip) comprises two neuron cores. In the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"Trn1.32xlarge")," instances, ",(0,i.kt)("inlineCode",{parentName:"p"},"16 Trainium devices")," are combined, resulting in a total of ",(0,i.kt)("inlineCode",{parentName:"p"},"32 Neuron cores"),". The diagram below provides a visual representation of the Neuron device's architecture:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Trainium Device",src:n(9512).Z,width:"625",height:"556"})),(0,i.kt)("h4",{id:"aws-neuron-drivers"},"AWS Neuron Drivers"),(0,i.kt)("p",null,"Neuron Drivers are a set of essential software components installed on the host operating system of AWS Inferentia-based accelerators, such as Trainium/Inferentia instances. Their primary function is to optimize the interaction between the accelerator hardware and the underlying operating system, ensuring seamless communication and efficient utilization of the accelerator's computational capabilities."),(0,i.kt)("h4",{id:"aws-neuron-runtime"},"AWS Neuron Runtime"),(0,i.kt)("p",null,"Neuron runtime consists of kernel driver and C/C++ libraries which provides APIs to access Inferentia and Trainium Neuron devices. The Neuron ML frameworks plugins for TensorFlow, PyTorch and Apache MXNet use the Neuron runtime to load and run models on the NeuronCores."),(0,i.kt)("h4",{id:"aws-neuron-device-plugin-for-kubernetes"},"AWS Neuron Device Plugin for Kubernetes"),(0,i.kt)("p",null,"The AWS Neuron Device Plugin for Kubernetes is a component that promotes Trainium/Inferentia devices as system hardware resources within the EKS cluster. It is deployed as a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet"),", ensuring proper permissions for the device plugin to update the Node and Pod annotations, thereby seamlessly integrating Inferentia devices with Kubernetes pods."),(0,i.kt)("h4",{id:"fsx-for-lustre"},"FSx for Lustre"),(0,i.kt)("p",null,"In this blueprint, we utilize TorchX to initiate a DataParallel BERT phase1 pretraining task, employing 64 workers distributed across 2 trn1.32xlarge (or trn1n.32xlarge) instances, with 32 workers per instance. The BERT phase1 pretraining process involves a substantial 50+ GB WikiCorpus dataset as the training data. To handle large datasets efficiently, including the dataset inside the training container image or downloading it at the start of each job is not practical. Instead, we leverage shared file system storage to ensure multiple compute instances can process the training datasets concurrently."),(0,i.kt)("p",null,"For this purpose, FSx for Lustre emerges as an ideal solution for machine learning workloads. It provides shared file system storage that can process massive data sets at up to hundreds of gigabytes per second of throughput, millions of IOPS, and sub-millisecond latencies. We can dynamically create FSx for Lustre and attach the file system to the Pods using the FSx CSI controller through Persistent Volume Claims(PVC), enabling seamless integration of shared file storage with the distributed training process."),(0,i.kt)("h4",{id:"torchx"},"TorchX"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pytorch.org/torchx/main/quickstart.html"},"TorchX")," SDK or CLI provides the functionality to effortlessly submit PyTorch jobs to Kubernetes. It offers the capability to connect predefined components like hyperparameter optimization, model serving, and distributed data-parallel into sophisticated pipelines, while leveraging popular job schedulers like Slurm, Ray, AWS Batch, Kubeflow Pipelines, and Airflow."),(0,i.kt)("p",null,"The TorchX Kubernetes scheduler relies on the ",(0,i.kt)("a",{parentName:"p",href:"https://volcano.sh/en/docs/"},"Volcano Scheduler"),", which must be installed on the Kubernetes cluster. Gang scheduling is essential for multi-replica/multi-role execution, and currently, Volcano is the only supported scheduler within Kubernetes that meets this requirement."),(0,i.kt)("p",null,"TorchX can seamlessly integrate with Airflow and Kubeflow Pipelines. In this blueprint, we will install the TorchX CLI on a local machine/cloud9 ide and use it to trigger job submission on the EKS cluster, which, in turn, submits jobs to the Volcano scheduler queue running on the EKS Cluster."),(0,i.kt)("h4",{id:"volcano-scheduler"},"Volcano Scheduler"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://volcano.sh/en/docs/"},"Volcano Scheduler")," is a custom Kubernetes batch scheduler designed to efficiently manage diverse workloads, making it particularly well-suited for resource-intensive tasks like machine learning. Volcano Queue serves as a collection of PodGroups, adopting a FIFO (First-In-First-Out) approach and forming the basis for resource allocation. VolcanoJob, also known as ",(0,i.kt)("inlineCode",{parentName:"p"},"vcjob"),", is a Custom Resource Definition (CRD) object specifically tailored for Volcano. It stands out from a regular Kubernetes job by offering advanced features, including a specified scheduler, minimum member requirements, task definitions, lifecycle management, specific queue assignment, and priority settings. VolcanoJob is ideally suited for high-performance computing scenarios, such as machine learning, big data applications, and scientific computing."),(0,i.kt)("h3",{id:"solution-architecture"},"Solution Architecture"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"COMING SOON")),(0,i.kt)(a.Z,{header:(0,i.kt)("h2",null,(0,i.kt)("span",null,"Deploying the Solution")),mdxType:"CollapsibleContent"},(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Before deploying this blueprint, it is important to be cognizant of the costs associated with the utilization of AWS Trainium Instances. The blueprint sets up two ",(0,i.kt)("inlineCode",{parentName:"p"},"Trn1.32xlarge")," instances for pre-training the dataset. Be sure to assess and plan for these costs accordingly.")),(0,i.kt)("p",null,"In this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/tree/main/ai-ml/trainium"},"example"),", you will provision the following resources."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new sample VPC, including 2 Private Subnets and 2 Public Subnets."),(0,i.kt)("li",{parentName:"ul"},"Set up an Internet gateway for the Public Subnets and a NAT Gateway for the Private Subnets."),(0,i.kt)("li",{parentName:"ul"},"Deploy the EKS Cluster Control plane with a public endpoint (for demo purposes only) and a core managed node group. Also, set up two additional node groups: ",(0,i.kt)("inlineCode",{parentName:"li"},"trn1-32xl-ng1")," with 2 instances and ",(0,i.kt)("inlineCode",{parentName:"li"},"trn1n-32xl-ng")," with 0 instances."),(0,i.kt)("li",{parentName:"ul"},"Install the EFA package during the bootstrap setup for the trn1-32xl-ng1 node group, and configure 8 Elastic Network Interfaces (ENIs) with EFA on each instance."),(0,i.kt)("li",{parentName:"ul"},"Use the EKS GPU AMI for the Trainium node groups, which includes Neuron drivers and runtime."),(0,i.kt)("li",{parentName:"ul"},"Deploy essential add-ons such as Metrics server, Cluster Autoscaler, Karpenter, Grafana, AMP, and Prometheus server."),(0,i.kt)("li",{parentName:"ul"},"Enable FSx for Lustre CSI driver to allow for Dynamic Persistent Volume Claim (PVC) creation for shared filesystems."),(0,i.kt)("li",{parentName:"ul"},"Set up the Volcano Scheduler for PyTorch job submission, allowing for efficient task scheduling on Kubernetes."),(0,i.kt)("li",{parentName:"ul"},"Prepare the necessary etcd setup as a prerequisite for TorchX."),(0,i.kt)("li",{parentName:"ul"},"Create a test queue within Volcano to enable TorchX job submission to this specific queue.")),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Ensure that you have installed the following tools on your machine."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform"))),(0,i.kt)("h3",{id:"deploy"},"Deploy"),(0,i.kt)("p",null,"Clone the repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n")),(0,i.kt)("p",null,"Navigate into one of the example directories and run ",(0,i.kt)("inlineCode",{parentName:"p"},"install.sh")," script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/ai-ml/trainium/ && chmod +x install.sh\n./install.sh\n")),(0,i.kt)("h3",{id:"verify-the-resources"},"Verify the resources"),(0,i.kt)("p",null,"Verify the Amazon EKS Cluster"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks describe-cluster --name trainium\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Creates k8s config file to authenticate with EKS\naws eks --region us-west-2 update-kubeconfig --name trainium\n\nkubectl get nodes # Output shows the EKS Managed Node group nodes\n\n"))),(0,i.kt)("h3",{id:"distributed-pytorch-training-on-trainium-with-torchx-and-eks"},"Distributed PyTorch Training on Trainium with TorchX and EKS"),(0,i.kt)("p",null,"In this example, we will perform DataParallel-based phase1 pretraining on the BERT-large model using the WikiCorpus dataset. To execute the task, we will use TorchX to initiate the job on two ",(0,i.kt)("inlineCode",{parentName:"p"},"trn1.32xlarge")," instances, with 32 workers per instance. You can also run the same job on ",(0,i.kt)("inlineCode",{parentName:"p"},"trn1n.32xlarge")," node group."),(0,i.kt)("p",null,"We have created three Shell scripts to automate the job execution as much as possible."),(0,i.kt)("h4",{id:"step1-create-a-docker-image--for-pytorch-neuron-container-for-bert-large-model-pre-training"},"Step1: Create a Docker image  for PyTorch Neuron container for BERT-large model pre-training"),(0,i.kt)("p",null,"This step creates a new Docker image and push this image to ECR repo. The Dockerfile handles the installation of necessary software packages, such as AWS Neuron repos, Python dependencies, and other essential tools for PyTorch and BERT pre-training. It configures various environment variables to ensure smooth execution and optimal performance. The image contains crucial components like a BERT pretraining script and requirements.txt file sourced from GitHub, both vital for the BERT pretraining process. Furthermore, it includes a basic environment test script for validation purposes. Together, this Docker image provides a comprehensive environment for efficient BERT pre-training with PyTorch while incorporating AWS Neuron optimizations."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This step generates an AMD64 (x86-64) Docker image with a size of 7GB or more. Therefore, it is strongly advised to utilize an AWS Cloud9/EC2 AMD64 (x86-64) instance with Docker client installed, ensuring sufficient storage capacity for this process.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you are executing this script on a Cloud9 IDE/EC2 instance different from the one where the EKS Cluster is deployed, it is essential to ensure that the same IAM role is used or attached to the Cloud9 IDE/EC2 instance. Should you prefer a distinct IAM role for Cloud9 IDE/EC2, it must be added to the EKS Cluster's aws-auth config map to grant the role authorization for authenticating with the EKS Cluster. Taking these precautions will enable smooth communication between the instances and the EKS Cluster, ensuring the script functions as intended.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ai-ml/trainium-inferentia/examples/dp-bert-large-pretrain\nchomd +x 1-bert-pretrain-build-image.sh\n./1-bert-pretrain-build-image.sh\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Admin:~/environment/data-on-eks/ai-ml/trainium-inferentia/examples/dp-bert-large-pretrain (trainium-part2) $ ./1-bert-pretrain-build-image.sh\nDid you install docker on AMD64(x86-64) machine (y/n): y\nEnter the ECR region: us-west-2\nECR repository 'eks_torchx_test' already exists.\nRepository URL: <YOUR_ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/eks_torchx_test\nBuilding and Tagging Docker image... <YOUR_ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/eks_torchx_test:bert_pretrain\n[+] Building 2.4s (26/26) FINISHED  \n => [internal] load build definition from Dockerfile.bert_pretrain                                                                                                                   0.0s\n => => transferring dockerfile: 5.15kB                                                                                                                                               0.0s\n => [internal] load .dockerignore                                                                                                                                                    0.0s\n => => transferring context: 2B                                                                                                                                                      0.0s\n => [internal] load metadata for docker.io/library/ubuntu:20.04                                                                                                                      0.7s\n => [ 1/22] FROM docker.io/library/ubuntu:20.04@sha256:c9820a44b950956a790c354700c1166a7ec648bc0d215fa438d3a339812f1d01                                                              0.0s\n ...\nbert_pretrain: digest: sha256:1bacd5233d1a87ca1d88273c5a7cb131073c6f390f03198a91dc563158485941 size: 4729\n")),(0,i.kt)("p",null,"Login to AWS Console and verify the ECR repo(",(0,i.kt)("inlineCode",{parentName:"p"},"<YOUR_ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com/eks_torchx_test"),") and the image tag(",(0,i.kt)("inlineCode",{parentName:"p"},"bert_pretrain"),") in ECR."),(0,i.kt)("h4",{id:"step2-copy-wikicorpus-pre-training-dataset-for-bert-model-to-fsx-for-lustre-filesystem"},"Step2: Copy WikiCorpus pre-training dataset for BERT model to FSx for Lustre filesystem"),(0,i.kt)("p",null,"In this step, we make it easy to transfer the WikiCorpus pre-training dataset, which is crucial for training the BERT model in distributed mode by multiple Trainium instances, to the FSx for Lustre filesystem. To achieve this, we will login to ",(0,i.kt)("inlineCode",{parentName:"p"},"aws-cli-cmd-shell")," pod which includes an AWS CLI container, providing access to the filesystem."),(0,i.kt)("p",null,"Once you're inside the container, Copy the WikiCorpus dataset from S3 bucket (",(0,i.kt)("inlineCode",{parentName:"p"},"s3://neuron-s3/training_datasets/bert_pretrain_wikicorpus_tokenized_hdf5/bert_pretrain_wikicorpus_tokenized_hdf5_seqlen128.tar"),"). The dataset is then unpacked, giving you access to its contents, ready for use in the subsequent BERT model pre-training process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl exec -i -t -n default aws-cli-cmd-shell -c app -- sh -c "clear; (bash || ash || sh)"\n\n# Once logged into the container\nyum install tar\ncd /data\naws s3 cp s3://neuron-s3/training_datasets/bert_pretrain_wikicorpus_tokenized_hdf5/bert_pretrain_wikicorpus_tokenized_hdf5_seqlen128.tar . --no-sign-request\nchmod 744 bert_pretrain_wikicorpus_tokenized_hdf5_seqlen128.tar\ntar xvf bert_pretrain_wikicorpus_tokenized_hdf5_seqlen128.tar\n')),(0,i.kt)("h4",{id:"step3-precompile-the-bert-graphs-using-neuron_parallel_compile"},"Step3: Precompile the BERT graphs using neuron_parallel_compile"),(0,i.kt)("p",null,"PyTorch Neuron introduces a valuable tool known as ",(0,i.kt)("a",{parentName:"p",href:"https://awsdocs-neuron.readthedocs-hosted.com/en/latest/frameworks/torch/torch-neuronx/api-reference-guide/training/pytorch-neuron-parallel-compile.html"},"neuron_parallel_compile"),", which significantly reduces graph compilation time by extracting model graphs and compiling them in parallel. This optimization technique expedites the process and results in faster model compilation. The compiled graphs are then stored on the Fsx for Lustre shared storage volume, accessible by worker nodes during model training. This efficient approach streamlines the training process and improves overall performance, making the most of PyTorch Neuron's capabilities."),(0,i.kt)("p",null,"Execute the following commands.This script prompts the user to configure their kubeconfig and verifies the presence of the ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," folder with ",(0,i.kt)("inlineCode",{parentName:"p"},"trn1_dist_ddp.py"),". It sets up Docker credentials, installs the ",(0,i.kt)("strong",{parentName:"p"},"TorchX")," client for Kubernetes. Using TorchX, the script runs a Kubernetes job to compile BERT graphs with optimized performance. Additionally, TorchX creates another Docker image and pushes it to the ECR repository within the same repo. This image is utilized in the subsequent pre-compiling pods, optimizing the overall BERT model training process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ai-ml/trainium-inferentia/examples/dp-bert-large-pretrain\nchomd +x 2-bert-pretrain-precompile.sh\n./2-bert-pretrain-precompile.sh\n")),(0,i.kt)("p",null,"You can verify the pods status by running ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get vcjob"),". Successful output looks like below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(2158).Z,width:"2152",height:"1360"})),(0,i.kt)("p",null,"You can also verify the logs for the Pod once they are ",(0,i.kt)("inlineCode",{parentName:"p"},"Succeeded"),". The precompilation job will run for ",(0,i.kt)("inlineCode",{parentName:"p"},"~15 minutes"),". Once complete, you will see the following in the output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2023-07-29 09:42:42.000310: INFO ||PARALLEL_COMPILE||: Starting parallel compilations of the extracted graphs2023-07-29 09:42:42.000312: INFO ||PARALLEL_COMPILE||: Compiling /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.406_16969875447143373016.hlo.pb using following command: neuronx-cc compile \u2014target=trn1 \u2014framework XLA /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.406_16969875447143373016.hlo.pb \u2014model-type=transformer \u2014verbose=35 \u2014output /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.406_16969875447143373016.neff\n2023-07-29 09:42:42.000313: INFO ||PARALLEL_COMPILE||: Compiling /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.22250_9219523464496887986.hlo.pb using following command: neuronx-cc compile \u2014target=trn1 \u2014framework XLA /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.22250_9219523464496887986.hlo.pb \u2014model-type=transformer \u2014verbose=35 \u2014output /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.22250_9219523464496887986.neff\n2023-07-29 09:42:42.000314: INFO ||PARALLEL_COMPILE||: Compiling /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.25434_3000743782456078279.hlo.pb using following command: neuronx-cc compile \u2014target=trn1 \u2014framework XLA /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.25434_3000743782456078279.hlo.pb \u2014model-type=transformer \u2014verbose=35 \u2014output /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.25434_3000743782456078279.neff\n2023-07-29 09:42:42.000315: INFO ||PARALLEL_COMPILE||: Compiling /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.25637_13822314547392343350.hlo.pb using following command: neuronx-cc compile \u2014target=trn1 \u2014framework XLA /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.25637_13822314547392343350.hlo.pb \u2014model-type=transformer \u2014verbose=35 \u2014output /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.25637_13822314547392343350.neff\n2023-07-29 09:42:42.000316: INFO ||PARALLEL_COMPILE||: Compiling /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.21907_15179678551789598088.hlo.pb using following command: neuronx-cc compile \u2014target=trn1 \u2014framework XLA /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.21907_15179678551789598088.hlo.pb \u2014model-type=transformer \u2014verbose=35 \u2014output /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.21907_15179678551789598088.neff\n.....\nCompiler status PASS\n")),(0,i.kt)("p",null,"New pre-training cache files are stored under FSx for Lustre."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(6883).Z,width:"1448",height:"286"})),(0,i.kt)("h4",{id:"step4-launch-bert-pretraining-job-using-64-neuron-cores-with-two-trn132xlarge-instances"},"Step4: Launch BERT pretraining job using 64 Neuron cores with two trn1.32xlarge instances"),(0,i.kt)("p",null,"We are now in the final step of training the BERT-large model with WikiCorpus data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ai-ml/trainium-inferentia/examples/dp-bert-large-pretrain\nchomd +x 3-bert-pretrain.sh\n./3-bert-pretrain.sh\n")),(0,i.kt)("p",null,"Monitor the job with the following commands. This job may take several hours as its training 30GB+ worth of the data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get vcjob\nkubectl get pods # Two pods will be running in default namespace\n")),(0,i.kt)("p",null,"To monitor Neuron usage, you can log in to one of the Trainium EC2 instances using SSM (Systems Manager) from the EC2 console. Once logged in, run the command neuron-ls, and you will receive an output similar to the following."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[root@ip-100-64-229-201 aws-efa-installer]# neuron-ls\ninstance-type: trn1.32xlarge\ninstance-id: i-04b476a6a0e686980\n+--------+--------+--------+---------------+---------+--------+------------------------------------------+---------+\n| NEURON | NEURON | NEURON | CONNECTED | PCI | PID | COMMAND | RUNTIME |\n| DEVICE | CORES | MEMORY | DEVICES | BDF | | | VERSION |\n+--------+--------+--------+---------------+---------+--------+------------------------------------------+---------+\n| 0 | 2 | 32 GB | 12, 3, 4, 1 | 10:1c.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 1 | 2 | 32 GB | 13, 0, 5, 2 | 10:1d.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 2 | 2 | 32 GB | 14, 1, 6, 3 | a0:1c.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 3 | 2 | 32 GB | 15, 2, 7, 0 | a0:1d.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 4 | 2 | 32 GB | 0, 7, 8, 5 | 20:1b.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 5 | 2 | 32 GB | 1, 4, 9, 6 | 20:1c.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 6 | 2 | 32 GB | 2, 5, 10, 7 | 90:1b.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 7 | 2 | 32 GB | 3, 6, 11, 4 | 90:1c.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 8 | 2 | 32 GB | 4, 11, 12, 9 | 20:1d.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 9 | 2 | 32 GB | 5, 8, 13, 10 | 20:1e.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 10 | 2 | 32 GB | 6, 9, 14, 11 | 90:1d.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 11 | 2 | 32 GB | 7, 10, 15, 8 | 90:1e.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 12 | 2 | 32 GB | 8, 15, 0, 13 | 10:1e.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 13 | 2 | 32 GB | 9, 12, 1, 14 | 10:1b.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 14 | 2 | 32 GB | 10, 13, 2, 15 | a0:1e.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 15 | 2 | 32 GB | 11, 14, 3, 12 | a0:1b.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n+--------+--------+--------+---------------+---------+--------+------------------------------------------+---------+\n\n")),(0,i.kt)("p",null,"You can also run ",(0,i.kt)("inlineCode",{parentName:"p"},"neuron-top")," which provides the live usage of neuron cores. The below shows the usage of all 32 neuron cores."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(5710).Z,width:"2116",height:"1204"})),(0,i.kt)("p",null,"If you wish to terminate the job, you can execute the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get vcjob # Get a job name\nkubectl delete <ENTER_JOB_NAME>\n")),(0,i.kt)(a.Z,{header:(0,i.kt)("h2",null,(0,i.kt)("span",null,"Cleanup")),mdxType:"CollapsibleContent"},(0,i.kt)("p",null,"This script will cleanup the environment using ",(0,i.kt)("inlineCode",{parentName:"p"},"-target")," option to ensure all the resources are deleted in correct order."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/ai-ml/trainium/ && chmod +x cleanup.sh\n./cleanup.sh\n"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment")))}h.isMDXComponent=!0},6883:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cache-c20ffd2f2f08427c018edbd418f745af.png"},9512:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/neuron-device-b6418f956d103a5da9e7087ba07cf949.png"},5710:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/neuron-top-15b215db91829995ded8d938dc8b3ef8.png"},2158:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pre-compile-pod-status-a957a723dd43219aacf123b09c9337ec.png"}}]);