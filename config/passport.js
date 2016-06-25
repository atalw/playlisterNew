'use strict';

var passport = require('passport');
var YoutubeV3Strategy = require('passport-youtube-v3-playlists').Strategy;

var User = require('./../models/user');
var secrets = require('./secrets.json');

// store user info in session instead of database
passport.serializeUser(function(user, done) {
	var sessionUser = {
		_id: user._id,
		userId: user.userId,
		displayName: user.displayName,
		picture: user.picture,
		playlists: user.playlists
	};
  done(null, sessionUser);
});

passport.deserializeUser(function(sessionUser, done) {
  done(null, sessionUser);
});

passport.use(new YoutubeV3Strategy ({
	clientID: secrets.web.client_id,
	clientSecret: secrets.web.client_secret,
	callbackURL: secrets.web.callback_uri
	},
		function(accessToken, refreshToken, profile, done) {
			var data = [];
			var playlistIds = profile.playlists;
			playlistIds.forEach(function(playlist) {
				data.push({id: playlist.id, title: playlist.snippet.title, date: playlist.snippet.publishedAt});
			});
			User.findOne({userId: profile.id}, function(err, user) {
				if (user)
					done(null, user);
				else {
					var user = new User({
						userId: profile.id,
						displayName: profile.displayName,
						picture: profile.picture,
						playlists: data
					});
					user.save(function(err) {
						if(err) console.log(err);
						else return done(err, user);
					});
				}
			})
		}
));
