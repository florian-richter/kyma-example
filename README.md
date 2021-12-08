## What is the SAP Cloud SDK?

## What is Kubernetes?

- Minikube (https://minikube.sigs.k8s.io/docs/start/) or k3d/k3s or... 
- Install kubectl
- Install kyma

### What is Kyma?

https://sapedia.one.int.sap/wiki/Kyma

- SAP BTP -> Trial -> Create Trial -> Activate Kyma Environment
- Assign Role Collection

https://cockpit.hanatrial.ondemand.com/trial/#/globalaccount/80a49b6b-d44b-4aa1-b2f9-55ef1b1a31e9/subaccount/54a39981-86b4-4fe3-ac96-ba283bb1643a/subaccountoverview

https://console.c-417dc51.kyma.ondemand.com/home/namespaces/default/details

### Interesting Links

- https://blogs.sap.com/2019/07/16/running-sap-cloud-application-programming-model-with-connection-to-hana-on-kubernetes/
- https://sap.github.io/cloud-sdk/docs/java/environments/sap-btp-kubernetes-environment-with-sap-gardener
- https://sap.github.io/cloud-sdk/docs/java/environments/sap-btp-kyma-environment
- https://sap.github.io/cloud-sdk/docs/js/guides/migrate-sdk-application-from-btp-cf-to-kubernetes

## Steps

- Login to docker `echo $GITHUB_TOKEN | docker login ghcr.io -u florian-richter --password-stdin`
- Push `docker push ghcr.io/florian-richter/devexpert_example1:latest`
- `export KUBECONFIG=$(kubeconfig.secureFilePath)`
- `kubectl delete -f deployment.yml`
- `kubectl apply -f deployment.yml`
