import {Meteor} from 'meteor/meteor';
import {Posts} from './../imports/api/user_posts.js';

Meteor.startup(function(){

 /*Posts.insert({
   topic:'animation',
   votes: 12000,
 });

 Posts.insert({
   topic:'Boku no Hero',
   votes: 400000,
 });
*/
 console.log(Posts.find().fetch());
});
