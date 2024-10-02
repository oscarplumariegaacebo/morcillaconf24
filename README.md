# MorcillaConf24 Workshop: Full-stack performance testing with Grafana k6

- [0. Before we start](#0-before-we-start)
  * [0.1. Introduction](#01-introduction)
  * [0.2. Requirements](#02-requirements)
  * [0.3.  Run the local playground](#03--run-the-local-playground)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

##  0. Before we start

### 0.1. Introduction

### 0.2. Requirements
- Docker & Docker Compose
- git
- GitHub account 
- Optional (but recommended): [k6](https://grafana.com/docs/k6/latest/set-up/install-k6/)
  - You can run it inside Docker, but the experience is better if you install it locally. 
    - You get nice colors and dynamic progress bars!
    - Also, it is just a binary, so you can easily remove it afterward if you don't want it.
  - If you plan to use Docker, please, pre-pull the images with:
    - `docker pull grafana/k6`
    - `docker pull grafana/k6:master-with-browser`

###  0.3.  Run the local playground

First of all, clone the repository: 
```bash
git clone https://github.com/dgzlopes/morcillaconf24
```

Then, run the playground with:
```bash
cd morcillaconf24; docker compose up -d
```

> In older versions of Docker Compose, you might need to use `docker-compose` instead of `docker compose`.

To verify everything is working, go to http://localhost:3333 and click the big button. 

If you see a pizza recommendation, that's good!

Also, open http://localhost:3000 and verify that you can see a Grafana instance. Nice! Now you are ready to start the workshop. If you want to stop the environment, just run `docker compose down`.