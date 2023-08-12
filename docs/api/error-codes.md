---
title: Error Codes
---

<head>
    <meta name="keywords" content="DutchIS, API, Error Codes, Documentation, Docs" />
</head>

Here you will find all of the error codes our API will produce and a way to fix it.

## Virtual Servers

### `virtual-server-invalid-powerstate`
You have provided no or an invalid powerstate with your request. You can choose from the following states:
- `start`
- `stop`
- `restart`
- `reset`
- `shutdown`

### `virtual-server-not-found`
You have provided an ID of a virtual server which does not exist or associated with your account.
Check if your provided virtual server ID.

### `virtual-server-cannot-downgrade`
You can not downgrade a virtual server. You have specified an plan ID which has lower specifications than your virtual server.

### `virtual-server-invalid-type`
You have provided an invalid virtual server type. The following virtual server types are available:
- `performance`
- `standard`

### `virtual-server-unavailable`
The node your virtual server is hosted on is currently unavailable. This could be due to maintenance or a node failure. 
Please contact our support team for more information.

### `virtual-server-no-ips`
You have no IP addresses available to assign to your virtual server. Please contact our support team for more information.

## Tickets

### `ticket-not-found`
The ticket ID you have given does not exist or associated with your account. Check your ticket ID.

### `ticket-invalid-action`
You have provided no or an invalid ticket action. You can choose from the following actions:
- `close`

### `ticket-message-required`
You have not provided a message. Please add a message to your request.

### `ticket-subject-required`
You have not provided a subject. Please add a subject to your request.

## Payment Methods

### `payment-method-does-not-exist`
You have provided an payment method which does not exist or is associated with your account. Check your payment method ID.

### `payment-method-default`
You have provided an payment method which is already the default. Choose another payment method to set as default.

### `payment-method-unpaid-invoices`
You cannot remove a payment method when there are unpaid invoices associated with your account. 
You can still add another payment method and set it as default.

### `payment-method-delete-default`
You cannot delete an payment method which is set as default. Please set another payment method as default and try again.

## Suspended

### `suspended-overdue-invoices`
Your account is currently suspended due to unpaid invoices. Please pay your invoices to continue using our services.

## Teams

### `not-team-member`
You are not a member of the team you are trying to access. Please contact the team owner to get access.

### `missing-permission-team`
You do not have permissions to perform this action on this team. Please contact the team owner to get access.

### `teams-remove-owner`
You cannot remove the owner of a team. Please transfer ownership to another member and try again.

### `teams-remove-not-member`
You cannot remove a member which is not a member of the team.

## API

### `missing-permission-api`
Your API key does not have permissions to perform this action. Please update the permissions of your API key.

### `too-many-requests`
You have made too many requests. Please wait a bit before trying again.

## Network

### `network-ip-not-found`
The IP address you have given does not exist or is not associated with your account. Check your IP address.

## Payment

### `payment-method-does-not-exist`
The payment method you have given does not exist.

### `payment-method-default`
The payment method you have given is already the default. Choose another payment method to set as default.

### `payment-method-delete-default`
You cannot delete an payment method which is set as default. Please set another payment method as default and try again.

