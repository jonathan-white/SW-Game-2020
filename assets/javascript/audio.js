const sounds = {
	player_selected: new Audio('assets/audio/saberup.wav'), 
	defender_selected: new Audio('assets/audio/saberdown.wav'),
	force_be_with_you: new Audio('assets/audio/obi_force.mp3'),
	sidious_v_luke: new  Audio('assets/audio/sidious_vs_luke.wav'),
	duel_of_fates: new Audio('assets/audio/Star-Wars-Duel-of-the-Fates.mp3'),
	crystal: new Audio('assets/audio/jingle-bell-1.mp3'),
	crystal_shower: new Audio('assets/audio/magic-chime-04.mp3'),
	yodasTwoCents: function(){
		const yodaSayings = [
			new Audio('assets/audio/yoda_dange-disturb.mp3'), 
			new Audio('assets/audio/yoda_do_or_do_not.wav')
		];
		const rand = Math.floor(Math.random() * yodaSayings.length);
		return yodaSayings[rand];
	}
};
