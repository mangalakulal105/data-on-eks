---
title: Llama2 on Trainium
sidebar_position: 1
---
import CollapsibleContent from '../../../src/components/CollapsibleContent';


:::danger

Note: Use of this Llama-2 model is governed by the Meta license.
In order to download the model weights and tokenizer, please visit the [website](https://ai.meta.com/) and accept the license before requesting access.

:::

:::info

We are actively enhancing this blueprint to incorporate improvements in observability, logging, and scalability aspects.

:::


# Training Llama2 Model using Trainium, Neuronx-Nemo-Megatron and MPI operator
Welcome to the comprehensive guide on training the [Meta Llama-2-7b ](https://ai.meta.com/llama/#inside-the-model) model on Amazon Elastic Kubernetes Service (EKS) using AWS Trainium, Neuronx-Nemo-megratron and MPI Operator. (https://github.com/kubeflow/mpi-operator).

In this tutorial, you will learn how to harness the power of Llama-2, but also gain insights into the intricacies of deploying large language models (LLMs) efficiently, particularly on [trn1/inf2](https://aws.amazon.com/machine-learning/neuron/) (powered by AWS Trainium and Inferentia) instances, such as `inf2.24xlarge` and `inf2.48xlarge`,
which are optimized for deploying and scaling large language models.

### What is Llama-2?
Llama-2 is a pretrained large language model (LLM) trained on 2 trillion tokens of text and code. It is one of the largest and most powerful LLMs available today. Llama-2 can be used for a variety of tasks, including natural language processing, text generation, and translation.

#### Llama-2-chat
Llama-2 is a remarkable language model that has undergone a rigorous training process. It starts with pretraining using publicly available online data.

Llama-2 is available in three different model sizes:

- **Llama-2-70b:** This is the largest Llama-2 model, with 70 billion parameters. It is the most powerful Llama-2 model and can be used for the most demanding tasks.
- **Llama-2-13b:** This is a medium-sized Llama-2 model, with 13 billion parameters. It is a good balance between performance and efficiency, and can be used for a variety of tasks.
- **Llama-2-7b:** This is the smallest Llama-2 model, with 7 billion parameters. It is the most efficient Llama-2 model and can be used for tasks that do not require the highest level of performance.

### **Which Llama-2 model size should I use?**
The best Llama-2 model size for you will depend on your specific needs. and it may not always be the largest model for achieving the highest performance. It's advisable to evaluate your needs and consider factors such as computational resources, response time, and cost-efficiency when selecting the appropriate Llama-2 model size. The decision should be based on a comprehensive assessment of your application's goals and constraints.



**Performance Boost**
While Llama-2 can achieve high-performance inference on GPUs, Neuron accelerators take performance to the next level. Neuron accelerators are purpose-built for machine learning workloads, providing hardware acceleration that significantly enhances Llama-2's inference speeds. This translates to faster response times and improved user experiences when deploying Llama-2 on Trn1/Inf2 instances.



## Solution Architecture
In this section, we will delve into the architecture of our solution.

**MPI Worker Pod:** These are Kubernetes pods configured for running MPI (Message Passing Interface) tasks. MPI is a standard for distributed memory parallel computing. Each pod is equipped with: 8 EFAs (Elastic Fabric Adapter) on Trn1.32xl Instances. EFAs are network devices that support high-performance computing applications running on Amazon EC2 instances.
Trn1.32xl Instance: This is an EC2 instance type that is part of the EC2 Trn1 (Trainium) instance family, optimized for machine learning training workloads and has 16 EFAs

**MPI Launcher:** A component that is likely responsible for initiating and managing the MPI jobs within the cluster.

**MPI Operator:** An operator in Kubernetes is a method of packaging, deploying, and managing a Kubernetes application. The MPI Operator automates the deployment and management of MPI workloads.

![Llama-2-inf2](img/llama2-trainium.png)

## Deploying the Solution

**Steps to train Llama2 using AWS Trainium on Amazon EKS**

Note: This post makes use of Meta’s Llama tokenizer, which is protected by a user license that must be accepted before the tokenizer files can be downloaded. Please ensure that you have access to the Llama files by requesting access here.

<CollapsibleContent header={<h2><span>Prerequisites</span></h2>}>
Before we begin, ensure you have all the prerequisites in place to make the deployment process smooth and hassle-free.
Ensure that you have installed the following tools on your macEC2 or Cloud9 instance.

* [EC2 Instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html) or [Cloud9 instance](https://docs.aws.amazon.com/cloud9/latest/user-guide/tutorial-create-environment.html) → for both, please ensure you have 100GB+ of storage
* [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
* [kubectl](https://Kubernetes.io/docs/tasks/tools/)
* Git(Only for EC2 instance); Cloud9 comes with git installed by default
* Docker
* [terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)
* Python, pip, jq, unzip

To install all the pre-reqs on EC2, you can run this [script](https://github.com/sanjeevrg89/data-on-eks/blob/main/ai-ml/trainium-inferentia/examples/llama2/install-pre-requsites-for-ec2.sh)


**Step1:** Clone the Data on EKS repository

```bash
git clone https://github.com/awslabs/data-on-eks.git
```

Navigate to trainium-inferentia directory.

``` bash
cd data-on-eks/ai-ml/trainium-inferentia
```

Modify the **“trn1-32xl-ng1”** node group size in eks.tf file. Go to line 179 and change the min_size to 4, max_size to 4 and desired_size to 4.

In addition, also update **variables.tf** for MPI operator to be installed. By default its not installed and for this post its important to change the default value from **false** to **true**

Run the install script to provision an EKS cluster with all the add-ons needed for the solution.

```bash
./install.sh
```


### Verify the resources

Verify the Amazon EKS Cluster

```bash
aws eks --region us-west-2 describe-cluster --name <cluster-name>
```

```bash
# Creates k8s config file to authenticate with EKS
aws eks --region us-west-2 update-kubeconfig --name <cluster-name>

kubectl get nodes # Output shows the EKS Managed Node group nodes
```

</CollapsibleContent>

## Distributed training
Once the EKS Cluster is deployed, you can proceed with the next steps of building neuronx-nemo-megatron container image and push the image to ECR.

Navigate to examples/llama2 directory

cd examples/llama2/

Run the 1-llama2-neuronx-pretrain-build-image.sh script to build the neuronx-nemo-megatron container image and push the image into ECR. 

When prompted for a region, enter the region in which you launched your EKS cluster, above.

./1-llama2-neuronx-pretrain-build-image.sh

Note: The image building and pushing to ECR will approximately take ~10 minutes
Step 5: In this step we need access to the shared FSx storage. To copy files to this storage, we’ll first launch and connect to a CLI pod running the neuronx-nemo-megatron docker image that you created above. 

Run the following script to launch the CLI pod:

./2-launch-cmd-shell-pod.sh

Next, periodically run the following command until you see the CLI pod go into ‘Running’ state:

kubectl get pod


Once the CLI pod is ‘Running’, connect to it using the following command:

```bash
kubectl exec -it cli-cmd-shell -- /bin/bash
```

From the CLI pod, we’ll download the Llama tokenizer files: First, run the huggingface-cli login command to login to Hugging Face using your access token. The access token is found under Settings → Access Tokens on the Hugging Face website.


```
huggingface-cli login
```
Paste the access token and hit enter.

Download the llama7-7b tokenizer files to /shared/llama7b_tokenizer by running the python code

```bash
python3 <<EOF
import transformers
tok = transformers.AutoTokenizer.from_pretrained("meta-llama/Llama-2-7b-hf")
tok.save_pretrained("/shared/llama7b_tokenizer")
EOF
```

Download and tokenize the RedPajama-Data-1T-Sample dataset (a small subset of the full RedPajama dataset that contains 1B tokens).

While still connected to the CLI pod, use git to download the dataset

```cd /shared
git clone https://huggingface.co/datasets/togethercomputer/RedPajama-Data-1T-Sample \
    data/RedPajama-Data-1T-Sample
```

Tokenize the dataset using the preprocessing script included with neuronx-nemo-megatron. This preprocessing step will take ~60 minutes to run on a trn1.32xl instance.

```
cd /shared
# Clone the neuronx-nemo-megatron repo, which includes the required scripts
git clone https://github.com/aws-neuron/neuronx-nemo-megatron.git

# Combine the separate redpajama files to a single jsonl file
cat /shared/data/RedPajama-Data-1T-Sample/*.jsonl > /shared/redpajama_sample.jsonl

# Run preprocessing script using llama tokenizer
python3 neuronx-nemo-megatron/nemo/scripts/nlp_language_modeling/preprocess_data_for_megatron.py \
    --input=/shared/redpajama_sample.jsonl \
    --json-keys=text \
    --tokenizer-library=huggingface \
    --tokenizer-type=/shared/llama7b_tokenizer \
    --dataset-impl=mmap \
    --output-prefix=/shared/data/redpajama_sample \
    --append-eod \
    --need-pad-id \
    --workers=32
```

Note: When we later launch our training jobs in EKS, the training pods will run the training script from within neuronx-nemo-megatron/nemo/examples directory on FSx. This is convenient, because it will let you modify your training script directly on FSx without requiring that you rebuild the neuronx-nemo-megatron container for every change.

Modify the test_llama script /shared/neuronx-nemo-megatron/nemo/examples/nlp/language_modeling/test_llama.sh to update the following two lines. These lines tell the training pod workers where to find the Llama tokenizer and the dataset on the FSx filesystem. 

You can use any common text editor such as nano or vim to make these changes. 

Run:
nano /shared/neuronx-nemo-megatron/nemo/examples/nlp/language_modeling/test_llama.sh

: ${TOKENIZER_PATH=/shared/llama7b_tokenizer}
: ${DATASET_PATH=/shared/data/redpajama_sample_text_document}

Before:

After:
Type exit or enter ctrl+x

Step 11: When you are finished with the CLI pod you can remove it by running:

kubectl delete pod cli-cmd-shell

We are finally ready to launch our pre-compilation and training jobs!

Before we can run the training job, we first need to run a pre-compilation job in order to prepare the model artifacts. This step extracts and compiles the underlying compute graphs for the llama2-7B model and generates Neuron executable files (NEFFs) that can run on the Trainium accelerators. These NEFFs are stored in a persistent Neuron cache on FSx so that the training job can later access them.

Before you run the compilation job make sure MPI operator is functional by running this command:

kubectl get all -n mpi-operator

Run the pre-compilation script

./3-llama2-neuronx-mpi-compile.sh

Pre-compilation will take ~10 minutes when using 4 trn1.32xlarge nodes. 

Periodically run kubectl get pods | grep compile and wait until you see that the compile job shows ‘Completed’.

When pre-compilation is complete, you can then launch the pre-training job on 4 trn1.32xl nodes by running the following script:

./4-llama2-neuronx-mpi-train.sh

To monitor the training job output - first, find the name of the launcher pod associated with your training job:

kubectl get pods | grep launcher



Once you have identified the name of the launcher pod and see that it is ‘Running’, the next step is to determine its UID. Replace test-mpi-train-launcher-xxx with your launcher pod name in the following command and it will output the UID:

kubectl get pod test-mpi-train-launcher-g52f4 -o json | jq -r ".metadata.uid"

Use the UID to determine the log path so you can tail the training logs. Replace UID with the above value.

kubectl exec -it test-mpi-train-worker-0 -- tail -f /shared/nemo_experiments/<UID>/0/log

 When you are done viewing the logs, you can press CTRL-C to quit the tail command.

To monitor Trainium accelerator utilization you can use the neuron-top command. Neuron-top is a console-based tool for monitoring Neuron and system-related performance metrics on trn1/inf2/inf1 instances. You can launch neuron-top on one of the worker pods as follows:

kubectl exec -it test-mpi-train-worker-0 -- /bin/bash -l neuron-top

Create a Tensorboard deployment to visualize these logs by running the following command:

./5-deploy-tensorboard.sh

 Tensorboard logs are also available in the /shared/nemo_experiments/ directory on the FSx for Lustre filesystem.  Once the deployment is ready the script will output a password-protected URL for your new Tensorboard deployment. 

Launch the URL to view your training progress