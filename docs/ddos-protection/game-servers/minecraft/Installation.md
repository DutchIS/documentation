---
title: Minecraft Installation
---

<head>
    <meta name="theme-color" content="#103f84"/>
    <meta name="keywords" content="DutchIS, Minecraft, Server, DDoS Protection, DDoS, Documentation, Docs" />
    <meta name="publisher" content="DutchIS"/>
    <meta property="og:type" content="website"/>
    <meta property="og:image" content="https://dutchis.net/images/logo.png"/>
    <meta property="og:image:type" content="image/png"/>
    <meta property="og:image:width" content="300"/>
    <meta property="og:image:height" content="300"/>
    <meta property="og:image:alt" content="The DutchIS logo"/>
</head>

Minecraft servers are easy to protect. This guide will explain how to protect your Minecraft server.

## Configuration
[Navigate to the server creation page](https://dutchis.net/dashboard/ddos-protection/game/new) and fill in the details according to your Minecraft server.

**Name**
Enter a name for your server. This will be used to distingush your server in your dashboard.

**Domain Name**
You can use one of our domains or use your own domain name. For Minecraft protection you can suffix a name with the following domains:
- .play-minecraft.nl
- .mc.play-dutchis.nl

You can also use your own domain name. Simply create a CNAME record which points to `minecraft.ddos.dutchis.net`.

**Destination IP Address**
This is your Minecraft server's backend IP. Currently only IPv4 is supported

**Destination IP Address**
This is your Minecraft server's backend port. This may be between `1000` and `65535`.

**Extra Options**
- **Enable Forced Host**.
  This will modify the handshake packets to BungeeCord's `forced_hosts` option

- **Enable Proxy Protocol**.
  This enables HAProxy's proxy protocol for IP forwarding.
  Warning: You should only ever set this to true if you know that your server is compatible.

- **Enable Real IP Header**.
  This enables the RealIP protocol for IP forwarding.
  Warning: You should only ever set this to true if you know that your server is compatible.

![Example configuration](/img/ddos-protection/minecraft-server-create.png)