---
title: Creating a ssh key
---

<head>
    <meta name="keywords" content="DutchIS, VPS, Virtual Server, ssh, key, Documentation, Docs" />
</head>

This document describes how to generate a SSH key.

## Why do I need a SSH Key?
SSH Keys are used as a more secure authentication method for servers.
If you do not have a SSH key associated with your account, then you will get the following error.

![image of sshkey error](/img/virtualservers/needsshkey.png)

## Generating with Putty
Generating an SSH key using putty can be done with the tool Puttygen. If you already have putty installed, then you will also have Puttygen installed. Otherwise you can download this tool separately [here](https://www.putty.org/). Once you have downloaded this tool, you can generate a new key by clicking the **Generate** button.

![image puttygen](/img/virtualservers/puttygen.png)

You can then create a password to further secure the private key. We always advise you to use this to store your private key as securely as possible, think of it as your password. When a password is set, you can save the key.

![image puttygen](/img/virtualservers/puttygengenerating.png)

After you have generated your keys. You will want to save your keys using the button below. You can copy your ssh key in OpenSSH format here  

![image puttygen](/img/virtualservers/rsasshkey.png)

## Adding an SSH key to your account
Adding your SSH key is super simple. [Go to the SSH key page here](https://dutchis.net/dashboard/virtualservers/sshkey), then fill in your SSH key in to the field and click save. Make sure that your SSH key is in OpenSSH format, so a single line. Every line is a seperated SSH key. Super useful if you want to have more than one user deploy VM's.

![image puttygen](/img/virtualservers/sshkeyfield.png)

Now you can finaly create a virtual server! 🎉

## Using your SSH key with Putty
Open Putty and enter your virtual servers IP address. 

![image puttygen](/img/virtualservers/puttysession.png)

Now we want to select our private key to use to authenticate with our server. We can do this by going to `Connection` -> `SSH` -> `Auth` in de left sidebar. Then we want to select our Private key. After you have done that, you can finaly connect to your server by clicking **Open**. You will be asked to enter a username, which is your distro's name. For Ubuntu it will be `ubuntu`. You will be also asked to enter your SSH key's password.

![image puttygen](/img/virtualservers/puttyauth.png)