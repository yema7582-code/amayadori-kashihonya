# Scene 01 The Lending Library in the Rain

[bg street_rain]
[bgm bgm_rain]
[se rain_heavy]

Minato: (...So much for the weather forecast.)

Minato: (I run with my bag over my head. The shopping arcade's roof gives out halfway down the street.)

Minato: (A row of shuttered shops—and just one with its lights still on.)

[se door_slide]
[se door_bell]
[bg shop_rain]
[se rain_loop]

Minato: Sorry, just for a minute—

[show shiori cold]

Shiori: We close at seven.

Minato: Oh, I'm just getting out of the rain. I'll be quick.

Shiori: ...The umbrella stand is over there. Please don't touch the shelves while you're wet.

Minato: (I don't have an umbrella. I decided not to mention it.)

Minato: (It smells like old paper. Books are packed all the way to the ceiling, every spine faded by the sun.)

Minato: Is this a bookstore?

[show shiori normal]

Shiori: It's a lending library.

Minato: A lending library.

Shiori: You borrow a book, read it, and bring it back.

Minato: ...Ah.

Minato: (Come to think of it—I dig through my bag. The book my sister shoved at me this morning.)

Minato: I think this is yours. My sister borrowed it ages ago and forgot to return it.

[show shiori surprised]

Shiori: ..."Kuze Lending Library." Yes, it's ours.

Shiori: The checkout date is ten years ago, though.

Minato: Sorry. Is there, like, a late fee...?

Shiori: We don't charge anything like that.

[se book_drop]

Minato: Oh.

Minato: (The book slips from Shiori's hand as she takes it.)

[se paper]

Minato: (A white envelope slides out from between the pages.)

Minato: Something was tucked inside.

[show shiori normal]

Shiori: "To Mr. Kuze"...

Minato: The postmark's from ten years ago too.

Shiori: It's never been opened.

Minato: (The handwriting on the address was round, leaning slightly to the right.)

Minato: Mr. Kuze—is that someone from the shop?

Shiori: My grandfather.

Minato: So it's a letter for your grandpa—

[show shiori cold]

Shiori: My grandfather isn't here right now.

Minato: (The way she said it meant: don't ask anything more.)

Minato: (Only the sound of the rain goes on.)

[choice]
- "Want to open it?" -> choice01_a
- "You should give it to your grandpa." -> choice01_b
[/choice]

[label choice01_a]

Minato: Want to open it?

[show shiori cold]

Shiori: It's someone else's letter.

Minato: ...Yeah, you're right. Sorry.

Shiori: But...

Minato: Hm?

[show shiori normal]

Shiori: ...No. Never mind.

[jump scene01_end]

[label choice01_b]
[flag trust_shiori +1]

Minato: You should give it to your grandpa. It's been waiting ten years.

[show shiori surprised]

Shiori: You mean the letter's the one that's been waiting?

Minato: Maybe both of them?

[show shiori normal]

Shiori: ...You're a strange person.

Minato: I get that a lot.

[jump scene01_end]

[label scene01_end]

[se rain_loop]

Minato: (The rain's letting up.)

Minato: Well, I'll get going. Glad I could return the book.

Shiori: Um.

[show shiori sad]

Shiori: This shop is closing at the end of the month.

Minato: Huh?

Shiori: I haven't told anyone yet. ...So please don't tell anyone.

Minato: Why tell me, then?

Shiori: I wonder why.

[show shiori normal]

Shiori: Maybe because you're the first person in ten years to come back and return a book.

[se door_bell]

Minato: (Outside, a thin rain was still falling.)

Minato: (When I looked back, through the glass door, she was holding the envelope up to the light.)

[bgm stop]
[bg black]
