+++
draft = true
title = 'Citadel Lab - Kubernetes with OVN-Kuberntes CNI'
weight = 2
+++

On-prem Kubernetes lab (v1.35.0 with OVN-Kubernetes 1.2.0) as a personal side project. The idea wasn’t just “run k8s”, but to 
model something closer to a real-world enterprise / hybrid setup.

Current stack includes:

- Rocky Linux 9 based nodes
- FreeIPA as the identity backbone (users, hosts, DNS, certs)
- Keycloak federated to IPA (OIDC for API server, kubectl, dashboard)
- Private registry
- Dedicated build server
- Jump host / bastion for cluster access
- kubeadm-based bootstrap

Ingress is currently external IP + keepalived style (still experimenting, MetalLB is on the wishlist).

It’s very much work-in-progress and not fully polished, but it’s been a fun exercise in understanding identity, networking, 
and “how things actually work under the hood” rather than using managed cloud services.

https://github.com/veldrane/citadel-core