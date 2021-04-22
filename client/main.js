import React from "react";
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Posts} from './../imports/api/user_posts.js'
import './main.html';

const renderPosts = function (passed_posts) {
  console.log(passed_posts);
  let formattedPosts = passed_posts.map(function(post){
    return <p key={post._id}>{post.topic} have {post.votes} vote[s]</p>;
  });

  return formattedPosts;
};


const formStopper = function(event){
  event.preventDefault();
  let createPost =  event.target.newPost.value;
  if(createPost){
    event.target.newPost.value = '';
    Posts.insert({
      topic: createPost,
      votes: 0,
    });
  }
};

Meteor.startup(() => {


//const posts = Posts.find().fetch();

Tracker.autorun(function() {

let posts = Posts.find().fetch();

  let jsx = (
    <div>
      <h1>Hello There</h1>
      <form onSubmit={formStopper}>
        <input type="text" name="newPost" placeholder="Create a Post"/>
        <input type="submit"/>
      {renderPosts(posts)}

      </form>
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('content'));
  });
});
