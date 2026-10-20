# Scene 07 Chikage's Warning

[bg street_rain]
[bgm bgm_daily]
[se rain_loop]

Minato: (The next day after school. Chikage was waiting at the school gate.)

[show chikage normal]

Chikage: I told you to give me some time, remember?

Minato: You did.

Chikage: We can talk while we walk. You're heading to the shopping street anyway, right?

Minato: (She had me there, so I fell in beside her without a word.)

[se footsteps_wet]

Chikage: Remember in elementary school, when you brought home a turtle from the river?

Minato: ...I don't.

Chikage: You did. You named it, fed it every day, sketched the pattern on its shell.

Chikage: Then you got bored after a month, and I was the one who took it back to the river.

Minato: That part I remember. You were crying and yelling at me.

[show chikage pout]

Chikage: I wasn't crying.

Minato: You were.

Chikage: I was yelling, though.

[bg seawall_eve]
[bgm bgm_heart]
[se waves]

Minato: (We came out of the shopping street onto the seawall. The rain had stopped, and evening sun was slanting through a gap in the clouds.)

[show chikage normal]

Chikage: You get totally swept up in whatever catches your interest. And once you've figured it out, you move on.

Minato: ...

Chikage: I'm not blaming you. I've just been watching you be like that forever.

[if told_chikage -> s07_leak]
[jump s07_confess]

[label s07_leak]

[show chikage sad]

Chikage: And—let me apologize first.

Minato: For what?

Chikage: Last night I told my mom about the lending library. The letter, the girl's mom, all of it. I thought it was an interesting story.

Chikage: And my mom goes, "I hear that place is closing soon."

Minato: ...Who told her?

Chikage: No idea. Maybe someone heard at the hospital. But because I brought it up, my mom ended up talking about it at her part-time job this morning.

Chikage: By lunch, the whole shopping street knew.

Minato: (Shiori said she hadn't told anyone yet.)

Minato: (Not the fishmonger's wife, not the flower shop. She must have meant to tell them herself.)

Chikage: Just now, in front of the fish shop, I saw her surrounded by people. "We'll miss you so much."

Chikage: All she kept saying was "Yes."

Minato: ...

Chikage: I'm sorry. It's my fault.

Minato: I'm the one who told you.

Chikage: Even so.

[label s07_confess]

[show chikage normal]

Chikage: Anyway. The real topic.

Minato: That wasn't the real topic?

Chikage: Nope.

Minato: (Chikage stood at the edge of the seawall, facing the sea.)

[show chikage sad]

Chikage: I've liked you for a long time, Minato.

Minato: (The sound of the waves suddenly got louder.)

Chikage: Since the turtle. Probably.

Minato: ...

Chikage: I'm not saying it because I want an answer. I just didn't want you to wander off somewhere without me ever saying it.

[show chikage normal]

Chikage: So there's just one thing I want to ask.

Chikage: Are you actually looking at her? Or are you just chasing a mystery?

Minato: What do you mean?

Chikage: Once you solve the mystery of that shop, you'll probably be satisfied. Like with the turtle.

Chikage: But I don't think she will be. The shop will be gone, she'll know about her mom, and her life will just keep going on after that.

Chikage: If you're by her side knowing that, fine. If you're not, then you'd better stop.

Minato: (Chikage's voice wasn't angry and it wasn't tearful. That's what hit hardest.)

[choice]
- Thank her, and tell her your heart is with Shiori -> choice07_a
- "I can't answer right now." -> choice07_b
[/choice]

[label choice07_a]
[flag chose_shiori = 1]

Minato: Thanks, Chikage.

[show chikage surprised]

Chikage: ...Wait, you're thanking me?

Minato: For telling me. For watching out for me all this time.

Minato: But I care about Shiori. Not just the mystery.

Minato: Even after I figure out everything about the letter, I'll probably still go to the shop. The boxes aren't done yet.

[show chikage smile]

Chikage: The boxes?

Minato: I mean it.

Chikage: I know. It's written all over your face.

[show chikage sad]

Chikage: ...I knew, but I wanted to hear it.

Minato: Yeah.

Chikage: Then go.

[show chikage smile]

Chikage: If you pull a turtle on her, I'm throwing you in the river. You, not the turtle.

[jump scene07_end]

[label choice07_b]
[flag answer_later = 1]

Minato: ...I can't answer right now.

[show chikage pout]

Chikage: That's not fair.

Minato: Sorry.

Chikage: It's not something to apologize for.

Minato: I don't want to give a half-baked answer. Not about Shiori, and not about you.

[show chikage normal]

Chikage: ...Hmm.

Chikage: That's the first time I've ever heard you say you don't want to give a half-baked answer.

Minato: Is it?

Chikage: It is. You always end things with "whatever."

[show chikage smile]

Chikage: Okay, I'll wait. But don't keep her waiting about the letter.

[label scene07_end]

[se waves]

Minato: (Chikage waved and headed back the way we came.)

Minato: (I decided to go to the shop before the sun went down.)

[bgm stop]
[bg black]
