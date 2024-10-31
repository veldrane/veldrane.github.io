+++
draft = true
title = 'syscall analyzer'
+++

<br><br>

A proof of concept for a new approach to syscall analysis. This tool extracts data from strace, adds missing context, and stores it in a document-oriented database like Elasticsearch for further analysis. It’s particularly useful for:

- Revealing the internal architecture of an application from the OS perspective
- Assisting in the creation of strict security policies
- Visualizing data flows within the traced application
- Capturing the application’s state at a specific point in time from the OS viewpoint
- Conducting application resource analysis

And more...


While the current code is a bit rough, the tool offers unique features, such as tracking the lifecycle of open file descriptors and network sockets, even across new threads. In the future, I plan to rewrite it in Go and incorporate additional metadata to enhance tracking of memory allocation, Linux epolls/async operations, signals, and more.


https://github.com/veldrane/linux-syscall-analyzer