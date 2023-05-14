---
title: Create a virtual server
---

<head>
    <meta name="theme-color" content="#103f84"/>
    <meta name="keywords" content="DutchIS, VPS, Virtual Server, VM, Create, Documentation, Docs" />
    <meta name="publisher" content="DutchIS"/>
    <meta property="og:type" content="website"/>
    <meta property="og:image" content="https://dutchis.net/images/logo.png"/>
    <meta property="og:image:type" content="image/png"/>
    <meta property="og:image:width" content="300"/>
    <meta property="og:image:height" content="300"/>
    <meta property="og:image:alt" content="The DutchIS logo"/>
</head>

Virtual servers are virtual server instances hence the name. You may also know it by VPS, VM, instance. Creating a virtual server is simple and can be done in just a few steps!

First navigate to the virtual server overview page. You can find it here: https://dutchis.net/dashboard/virtualservers

![virtual server overview](/img/virtualservers/virtualserver-overview.png)

Once there, click on **Create a new virtual server**. You should land on the page shown below.

![virtual server creation page](/img/virtualservers/virtualserver-creation-page.png)

## Configuring you virtual server
**Hostname:**
This will be your server's name. This name is also used when deploying your operating system.

**Username:**
Your username used for logging in to your server. **When deploying a Windows operating system, `Administrator` is used as the username** 

**Password:**
Your password used for logging in to your server when key based authentication is not possible. By default password authentication in SSH is disabled on unix based operating systems.

**Operating System:**

| Name | Est Deploy time | Remark |
|------|-------------|--------|
| Ubuntu 22.04 | a minute | - |
| Ubuntu 20.04 | a minute | - |
| Debian 10 | a minute | - |
| Debian 11 | a minute | - |
| Fedora 38 | a minute | - |
| OpenSUSE Leap 15.5 | a minute | - |
| Gentoo 2023 | a minute | - |
| CentOS 9 | a minute | WARNING: CentOS is end of life |
| Windows Server 2022 | 5 minutes | - |

**SSH Keys:**
Select the SSH key you want to use to login with. If you don't have a SSH key yet, [then first read this article](/Virtual%20Servers/creating-a-sshkey).

**Specifications:**
Choose the specifications for your server. This can be changed later. **Note: disk size cannot be decreased.**

## Creation
Once your happy with your chosen configuration, you can click on **Create virtual server**. You will be redirected back to the virtual server overview and your server will begin deploying.
It should look something like the image below once your server is deployed. Depending on your selected operating system it may take some time. Check the operating system table above.

![virtual server overview with a virtual server](/img/virtualservers/virtualserver-overview-with-vs.png)
Once your server is deployed you can login into it via SSH for linux systems or use Remote Desktop(RDP) for Windows systems.
