# Scene 10 Night on the Seawall

[bg seawall_night]
[bgm bgm_rain]
[se waves]

Minato: (That night. The seawall, after the rain.)

Minato: (The rainy-season clouds had broken up, and the lights of Shiomi were reflected in the puddles.)

[if answer_later && trust_shiori < 2 -> s10_chikage]

[show shiori normal]

Shiori: You're late.

Minato: You're the one who called me out here.

Shiori: I told you the time, didn't I? Eight o'clock.

Minato: It's 8:02.

Shiori: You're late.

Minato: (The indigo umbrella was propped, closed, against the seawall.)

[show shiori sad]

Shiori: When I got home, I went through every book on the window shelf.

Minato: The scribbles?

Shiori: They were there. In every single book. In the margins.

Shiori: Next to a scene where the hero is crying: "Don't cry." Next to a confession scene: "Took you long enough."

Minato: ...Just like you.

Shiori: Like what?

Minato: Nothing.

[show shiori normal]

Shiori: Some books had a date written on the last page. The day she finished. On rainy days, a little drawing of an umbrella.

Shiori: My mother came here every day, didn't she?

Minato: Yeah.

Shiori: To the same spot where I sit every day now.

[se waves]

Minato: (For a while, there was only the sound of the waves.)

[show shiori normal]

Shiori: Apparently my grandfather asked a nurse today to bring him one of the books from the window shelf.

Minato: Was he reading it?

Shiori: Only the scribbles, she said. The nurse laughed: "Your grandpa was holding the book upside down."

Minato: ...Can he even read it like that?

Shiori: I don't think he can. He probably remembers it without reading.

[show shiori sad]

Shiori: If you hadn't come in out of the rain that day, Shinomiya...

Minato: I would have. I didn't have an umbrella.

Shiori: If you hadn't brought the book...

Minato: My sister shoved it at me.

Shiori: ...It was all just chance, wasn't it?

Minato: Chance is fine. The letter got delivered.

[show shiori normal]

Shiori: Ten years late.

Minato: You don't charge late fees, right?

Shiori: ...We don't.


[show shiori normal]

Shiori: I've decided about the shop, too. I'll tell you tomorrow.

Minato: Not now?

Shiori: If I tell you now, I'll cry.

Minato: (Joke or serious—I still couldn't tell.)
[if chose_shiori && trust_shiori < 2 -> ending_B]

[jump s10_end]

[label s10_chikage]

[show chikage normal]

Chikage: Oh, there you are.

Minato: Chikage. Why are you here?

Chikage: When you disappear, it's the roof, the library, or here. I told you.

Minato: (Chikage was holding a convenience store bag.)

[show chikage smile]

Chikage: Pork bun. You can have half.

Minato: ...Thanks.

Chikage: So, how'd it turn out? The thing with the shop.

Minato: I figured it all out. ...It was about Shiori's mom.

Chikage: I see.

[if told_chikage -> s10_apology]

[show chikage normal]

Chikage: I won't ask for details. I can pretty much tell from your face.

[jump s10_end]

[label s10_apology]

[show chikage sad]

Chikage: I went to apologize to her today. For spreading the news about the closing.

Minato: What did she say?

Chikage: "Thanks to you, Hayase, I got to see the roster."

Chikage: ...She's a good kid. So good it's annoying.

[label s10_end]

[ending]
