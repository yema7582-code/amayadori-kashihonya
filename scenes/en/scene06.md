# Scene 06 The Shrine Steps

[bg shrine_steps]
[bgm bgm_memory]
[se rain_loop]

Minato: (That night. When I passed the shop, its lights were off.)

Minato: (For no real reason, I walked up the hill to the shrine. Halfway up the steps, an indigo umbrella sat open.)

[show shiori normal]

Shiori: ...Why are you here?

Minato: I could ask you the same.

Shiori: When I am in the shop, all I see are boxes.

Minato: (Under the umbrella, Shiori sat hugging her knees. The rain had thinned to almost a mist.)

Minato: Mind if I sit?

Shiori: It is wet there.

Minato: I'm already wet.

[se rain_loop]

Minato: (For a while, neither of us spoke. Down below, the streetlights of the shopping arcade blurred one by one.)

[show shiori sad]

Shiori: My mother died when I was six.

Minato: ...

Shiori: Of an illness. In a hospital in Tokyo. After that, my grandfather took me in, and I came here.

Shiori: Please do not ask about my father. I do not know much about him either.

Minato: I won't.

Shiori: My grandfather has never once talked about my mother. There are no photos. Only her memorial tablet on the altar.

Shiori: When I was little, I asked him just once. "What was my mother like?"

Minato: What did he say?

Shiori: "She was a girl who didn't take care of books."

Minato: (A weird noise almost escaped me.)

[show shiori normal]

Shiori: ...This is where you laugh.

Minato: How could I laugh?

Shiori: I laughed. Because he would not say anything else. Because that was the only thing I knew about my mother.

[if found_stamp -> s06_know]

Minato: Can I ask your mother's name?

Shiori: Haruka.

Minato: (The roster in the school library. The single character left beside the ink stain.)

Minato: ...I saw it in a school roster today. A library committee member from twenty-some years ago who was the contact for the shop. I couldn't read the surname, but the first name was "Haruka."

[show shiori surprised]

Shiori: ...

Minato: The girl the fishmonger's wife talked about, writing at the desk by the window. The round handwriting on the envelope. I think they're all the same person.

Minato: I haven't confirmed it. It's just a hunch.

Shiori: My mother was from Tokyo.

Minato: Maybe she was here just for high school.

Shiori: ...I have never heard anything like that.

[jump s06_choice]

[label s06_know]

[if told_chikage -> s06_know_told]

Minato: I found it in a school roster today. A library committee member who was the contact between the shop and the library twenty-two years ago.

Minato: Someone named "Haruka Minase." The handwriting matched the envelope.

[show shiori surprised]

Shiori: ...Minase.

Minato: You know the name?

Shiori: It was my mother's surname before she married. And her name was Haruka.

Minato: (I knew it, I thought. I only thought it. I didn't say it.)

[jump s06_after_know]

[label s06_know_told]

Shiori: The roster this afternoon. ...I have been thinking about it ever since.

Minato: Yeah.

[label s06_after_know]

[show shiori sad]

Shiori: I thought my mother was from Tokyo.

Shiori: But in high school, she was in this town. Coming to our shop. Talking with my grandfather.

Shiori: And my grandfather said, "I don't know that handwriting."

Minato: ...There's no way he didn't know it.

Shiori: There is no way.

[label s06_choice]

Minato: (Shiori took the envelope out of her pocket. Its corners had gone a little soft. She must have handled it again and again these past few days.)

[choice]
- "Let's read it together." -> choice06_a
- "It's your call, Shiori." -> choice06_b
[/choice]

[label choice06_a]

Minato: Let's read it together. If opening it alone is too hard.

[if trust_shiori < 1 -> s06_refuse]
[flag trust_shiori +1]

[show shiori surprised]

Shiori: ...Together.

Minato: It came out of a book I brought in. So I'm at least half responsible, right?

Shiori: What kind of logic is that?

Minato: Call it my late fee.

[show shiori smile]

Shiori: ...I told you, we don't charge late fees.

Minato: (Her formal tone had slipped a little.)

Shiori: Fine, then I'll charge one. Be next to me when I open it.

Minato: Okay.

Shiori: Not now. At the shop. I want to read it somewhere properly bright.

[jump scene06_end]

[label choice06_b]

Minato: It's your call, Shiori. Open it or don't.

[if trust_shiori < 1 -> s06_refuse]
[flag trust_shiori +1]

[show shiori surprised]

Shiori: ...Mine?

Minato: It's addressed to your grandpa, but your mom wrote it, right? It's not my decision.

Shiori: Do you think I have the right to open my grandfather's letter?

Minato: I think whether you do isn't for me to decide. It's for you.

[show shiori blush]

Shiori: You're not playing fair, Minato.

Minato: (The first time she'd called me by my first name. I had a feeling that if I pointed it out, she'd never do it again, so I kept quiet.)

Shiori: ...I'll open it. At the shop. Before I read it to my grandfather, I'll read it first.

Shiori: I think I've earned at least that much.

[jump scene06_end]

[label s06_refuse]

[show shiori cold]

Shiori: ...I cannot open it yet.

Minato: Okay.

Shiori: It is not something I will open just because you told me to, Shinomiya.

Minato: (The envelope went back into her pocket.)

Minato: (On the first day, I was the one who asked if she wanted to open it. She probably remembers.)

[show shiori normal]

Shiori: But I know whose letter it is now.

Shiori: ...For that, thank you.

[label scene06_end]

[se rain_loop]

Minato: (The drizzle stopped. Shiori closed the umbrella and went down the stone steps one at a time.)

Minato: (Halfway down, she looked back just once, started to say something, and didn't.)

[bgm stop]
[bg black]
