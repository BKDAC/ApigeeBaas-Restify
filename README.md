# ApigeeBaas-Restify

##Apigee-Baas & Restify in Action

###restify is a node.js module built specifically to enable you to build correct REST web services. It intentionally borrows heavily from express as that is more or less the de facto API for writing web applications on top of node.js.

Express' use case is targeted at browser applications and contains a lot of functionality, such as templating and rendering, to support that. Restify does not.

Restify exists to let you build "strict" API services that are maintanable and observable. Restify comes with automatic DTrace support for all your handlers, if you're running on a platform that supports DTrace.

 
In this article we build sample to showcase some of the capabilities of Apigee-Baas features and restify framework to build enterprise quality applications. 
Apigee Edge Baas provides developers with access to flexible data store and enables you to quickly integrate valuable features into your app, including social graphs, user management, data storage, push notifications, performance monitoring and more.
If you are not familiar with restify, please visit the site for more information.
###
> http://restify.com/

###
To begin with clone the repository and start the server by running any of the controllers from the command prompt.

> node server.js


to make a request to restaurants use 

> http://localhost:8080/restaurants

> http://localhost:8080/users

> http://localhost:8080/reviews

To POST a review

> http://localhost:8080/reviews

Payload:
>{"rating": 4,
>"restID": 2,
>"reviewer": "Alex",
>"title": "Yummy Tacos in town"
>}



