+++
draft = true
title = 'nginx plus keyval syncer'
+++

<br><br>

This Golang tool checks for synchronization status across instances within the distributed key-value store of NGINX Plus in Kubernetes/OpenShift environments. Its purpose is to ensure that each instance has a consistent set of records, which is crucial for use cases like token verification. For example, if one instance has a token record but another does not yet reflect this, the verification may fail even though the token is valid. Custom JavaScript/Lua coding on the NGINX side is required for full integration. This tool was developed to meet specific customer requirements for distributed consistency


https://github.com/veldrane/ocp-apigw-syncer

https://nginx.org/en/docs/http/ngx_http_keyval_module.html

https://github.com/nginxinc/nginx-openid-connect