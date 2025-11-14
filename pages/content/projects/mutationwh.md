+++
draft = true
title = 'Kubernetes mutation webhook implemented in rust'
weight = 1
+++

<br><br>

A minimal Rust-based Kubernetes mutating webhook.
It listens for Pod creation events from the Kubernetes API and, if a specific annotation is present, it injects container port definitions into the Pod spec.

This is intended to mitigate issues with Prometheus metrics scraping in OpenShift, where the monitoring operator fails to generate correct scrape configs if the containerPort section is missing from the Pod specification.

https://github.com/veldrane/mutation-webhook-rs