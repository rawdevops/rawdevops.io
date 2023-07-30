---
sidebar_label: 'Gataria no Docker'
sidebar_position: 3
---

# Gataria via Docker

![Dockerlogo](../../static/img/docsImages/dockerlogo.png)

> **Containers são isolados, porém compartilham o OS e quando apropriado, binários/bibliotecas.**
> **Resultando no aumento significativo do templo de deploy, menor sobrecarga, facilidade de migração, restarts rápidos, economia de recursos computacionais.**


## Instalando o Docker

Chegou a hora de colocar a **Gataria** para rodar via **Containers**.

Seguindo a [documentação oficial](https://docs.docker.com/engine/install/ubuntu/). Executar os **commandos**:

```
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker $USER
```

Vamos **reiniciar** a maquina para recarregar a informação do grupo Docker atrelado ao $USER. E sucesso: **Docker** pronto a ser **utilizado**.

## Backend Catalog via Docker

Criando nosso primeiro **Dockerfile**.

E lembram do **.gitignore**? O Docker também possui o **.dockerignore** com o mesmo objetivo.

![GatariaInfraASCode](../../static/img/docsImages/GatariaIaC.png)

**Primeira imagem de container concluída.**

## Backend Images via Docker

Vamos ao segundo **Dockerfile**.

![GatariaInfraASCode](../../static/img/docsImages/GatariaIaC.png)

## Frontend via Docker

Nosso ultimo **Dockerfile** para o **microsserviço** de Frontend.

![GatariaInfraASCode](../../static/img/docsImages/GatariaIaC.png)

## Docker Registry

Utilizaremos o [Docker hub](https://hub.docker.com/search?q=) como nosso **registry** das imagens Docker. Caso não tenha um usuário: [criar o seu](https://hub.docker.com/signup).

O **push** nossas images e bem fácil, vamos de `docker push`

## Gataria rodando via Docker

**Mais um modulo concluído!** 

Ja temos todos os **microsserviço** em imagens Docker, e com o upload das mesmas para o nosso **Registry**. Agora podemos usar elas em qualquer máquina que rode containers. Inclusive no **Kubernetes**.

Então o nosso **próximo modulo**, onde as coisas começam a ficar mais legais: **Gataria no Kubernetes.**

