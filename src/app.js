import { Amplify, API, graphqlOperation } from "aws-amplify";

import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const SubscriptionResult = document.getElementById("SubscriptionResult");

// Define the subscription query
const onPublish = /* GraphQL */ `
  subscription PostsSubscription {
    addedPost {
      author
      content
      id
      title
      downs
      ups
      version
    }
  }
`;

// Start the subscription and define what to do each time an event is published
API.graphql(graphqlOperation(onPublish)).subscribe({
  next: (evt) => {
    console.log(evt);
    const msg = evt.value.data.addedPost;
    SubscriptionResult.innerHTML += `<h3>${msg.title} - ${msg.author}</h3><p>${msg.content}</p>`;
  },
});
