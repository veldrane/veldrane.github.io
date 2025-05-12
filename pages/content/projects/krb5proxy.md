+++
draft = true
title = 'krb5proxy'
weight = 1
+++

<br><br>

krb5proxy is a minimal HTTP forward proxy that transparently injects Kerberos (Negotiate) authentication to upstream proxies or services requiring Proxy-Authorization: Negotiate <ap req> like corporate proxies Cisco Was etc. It is designed for environments where clients are unable or unwilling to handle Kerberos themselves.

The proxy acquires and injects Kerberos tokens using system keytab or the current user session and relays HTTP requests to the next hop, supporting both regular HTTP requests and HTTP CONNECT tunneling.

https://github.com/veldrane/krb5proxy