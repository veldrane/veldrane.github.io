+++
draft = true
title = 'Checkpoint <-> openshift 3.x/4.x'
+++

<br><br>


A simple OpenShift controller for synchronizing external services and egress IP firewall rules. Rulesets are defined at the OpenShift namespace level using annotations. The controller does not utilize any operator framework, such as Kubebuilder, and instead polls the OpenShift API in a separate thread using standard get requests. It relies heavily on the OpenShift SDN CNI.

https://github.com/veldrane/ocp-chckp-egress